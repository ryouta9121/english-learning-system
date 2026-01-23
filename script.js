// -------------------- RomajiChecker クラス --------------------
class RomajiChecker {
  constructor(textJa, textRo, alternatives = {}) {
    this.textJa = textJa;
    this.textRo = textRo.toUpperCase();
    this.alternatives = alternatives;
    this.cursorJa = 0;
    this.typed = "";
    this.romajiTyped = 0;
    this.miss = 0;
    this.romajiLengths = this.calcLengths();
  }
  
  // 日本語1文字ごとのローマ字長を計算
  calcLengths() {
    const lengths = [];
    for (let i = 0; i < this.textJa.length; i++) {
      const kana = this.textJa[i];
      if (this.alternatives[kana]) {
        lengths.push(Math.max(...this.alternatives[kana].map(s => s.length)));
      } else {
        lengths.push(1); // デフォルト1文字
      }
    }
    return lengths;
  }

  // キー入力判定
  inputKey(key) {
    key = key.toUpperCase();
    this.typed += key;

    const kana = this.textJa[this.cursorJa];
    const candidates = this.alternatives[kana] || [
      this.textRo.slice(this.romajiTyped, this.romajiTyped + this.romajiLengths[this.cursorJa])
    ];

    // 部分一致する候補があるか
    const matching = candidates.filter(c => c.startsWith(this.typed));

    if (matching.length === 0) {
      // ミスカウント
      this.miss++;

      // typed を候補と共通の先頭部分だけ残す
      let newTyped = "";
      for (const c of candidates) {
        let i = 0;
        while (i < c.length && i < this.typed.length && c[i] === this.typed[i]) i++;
        if (i > newTyped.length) newTyped = this.typed.slice(0, i);
      }
      this.typed = newTyped;

      return false; // 先に進まない
    }

    // 完全一致した場合、日本語文字を進める
    if (candidates.some(c => c === this.typed)) {
      this.romajiTyped += this.typed.length;
      this.cursorJa++;
      this.typed = ""; // 正解したらバッファをクリア
    }

    return true;
  }

  // 日本語文字の色判定（入力済み文字数に基づく）
  getGreenCount() {
    let sum = 0;
    let green = 0;
    for (let i = 0; i < this.textJa.length; i++) {
      sum += this.romajiLengths[i];
      if (this.romajiTyped >= sum) green = i + 1;
      else break;
    }
    return green;
  }

  // 現在のローマ字スライド用インデックス
  getSlideStart(slideThreshold = 25) {
    return this.romajiTyped > slideThreshold ? this.romajiTyped - slideThreshold : 0;
  }

  // 入力完了か
  isComplete() {
    return this.romajiTyped >= this.textRo.length;
  }

  // 正確率
  accuracy() {
    return Math.max(0, Math.round((1 - this.miss / this.textRo.length) * 100));
  }
}

// -------------------- DOM要素 --------------------
const textDiv = document.getElementById("text");
const romajiDiv = document.getElementById("romaji");
const input = document.getElementById("input");
const missSpan = document.getElementById("miss");
const accSpan = document.getElementById("accuracy");
const giveUpBtn = document.getElementById("giveup");

const homeScreen = document.getElementById("home-screen");
const typingScreen = document.getElementById("typing-screen");
const resultScreen = document.getElementById("result-screen");
const resMiss = document.getElementById("res-miss");
const resTime = document.getElementById("res-time");
const resAcc = document.getElementById("res-acc");

const windowSize = 50;
const slideThreshold = 25;

let checker = null;
let startTime = null;

// -------------------- 候補例 --------------------
const romajiAlternatives = {
  し: ["SHI","SI"],
  ち: ["CHI","TI"],
  つ: ["TSU","TU"],
  ふ: ["FU","HU"],
  じ: ["JI","ZI"],
  ぢ: ["JI","DI"],
  づ: ["ZU","DU"]
};

// -------------------- ホーム画面からモード選択 --------------------
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    const problem = pickRandomProblem(mode);
    checker = new RomajiChecker(problem.ja, problem.ro.toUpperCase(), romajiAlternatives);

    homeScreen.style.display = "none";
    typingScreen.style.display = "block";

    input.value = "";
    startTime = null;
    render();
    input.focus();
  });
});

// -------------------- やめるボタン --------------------
giveUpBtn.addEventListener("click", () => {
  if (!startTime) startTime = Date.now();
  showResult();
});

// -------------------- 描画関数 --------------------
function render() {
  if (!checker) return;

  // 日本語表示
  const greenCount = checker.getGreenCount();
  let html = "";
  for (let i = 0; i < checker.textJa.length; i++) {
    html += `<span class="${i < greenCount ? 'text-green-400' : 'text-gray-400'}">${checker.textJa[i]}</span>`;
  }
  textDiv.innerHTML = html;

  // ローマ字スライド
  const slideStart = checker.getSlideStart(slideThreshold);
  const windowText = checker.textRo.slice(slideStart, slideStart + windowSize);
  let romaHtml = "";
  for (let i = 0; i < windowText.length; i++) {
    const globalIndex = slideStart + i;
    romaHtml += `<span class="${globalIndex < checker.romajiTyped ? 'text-green-400' : 'text-gray-400'}">${windowText[i]}</span>`;
  }
  romaHtml += `<span class="cursor">|</span>`;
  romajiDiv.innerHTML = romaHtml;

  // ミス・正確率
  missSpan.textContent = checker.miss;
  accSpan.textContent = checker.accuracy();
}

// -------------------- 入力判定 --------------------
input.addEventListener("keydown", e => {
  if (e.key.length !== 1) return;

  if (!startTime) startTime = Date.now();

  const key = e.key.toUpperCase();
  const ok = checker.inputKey(key);

  if (!ok) {
    // 間違えた場合は画面を揺らす
    typingScreen.classList.remove("shake");
    void typingScreen.offsetWidth; // reflow
    typingScreen.classList.add("shake");
  }

  e.preventDefault();
  render();

  if (checker.isComplete()) showResult();
});

// -------------------- 結果画面 --------------------
function showResult() {
  typingScreen.style.display = "none";
  resultScreen.style.display = "block";

  const time = (Date.now() - startTime) / 1000;
  resMiss.textContent = checker.miss;
  resTime.textContent = time.toFixed(1) + "秒";
  resAcc.textContent = checker.accuracy();
}

// -------------------- リスタート --------------------
document.querySelectorAll(".restart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    resultScreen.style.display = "none";
    homeScreen.style.display = "block";
  });
});
