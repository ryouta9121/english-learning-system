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

let startTime = null;
let miss = 0;
let cursor = 0;
let text = "";
let text1 = "";
let romajiLengths = []; // 日本語1文字ごとのローマ字長
let slideStart = 0;
const windowSize = 50; // ローマ字表示の幅
const slideThreshold = 25; // 25文字打ったらスライド開始

// 日本語1文字ごとのローマ字長を計算
function calcRomajiLengths(ja, ro) {
  let lengths = [];
  let index = 0;
  for (let i = 0; i < ja.length; i++) {
    let len = 0;
    while (index < ro.length && len < 20) { // 安全用
      len++;
      index++;
      if (ro[index] && ja[i + 1] && ro.slice(index, index + ja[i + 1].length).toUpperCase() === ja[i + 1].toUpperCase()) break;
    }
    lengths.push(len);
  }
  // ただしここでは簡易的に、1文字ずつの長さを自動計算
  // 実際は問題作成時にローマ字長を正確に設定するのがベスト
  return lengths;
}

// ホーム画面からモード選択
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    const problem = pickRandomProblem(mode);
    text = problem.ja;
    text1 = problem.ro.toUpperCase(); // ローマ字大文字表示

    homeScreen.style.display = "none";
    typingScreen.style.display = "block";

    input.value = "";
    miss = 0;
    cursor = 0;
    slideStart = 0;
    startTime = null;
    render();
    input.focus();
  });
});

// やめるボタン
giveUpBtn.addEventListener("click", () => {
  if (!startTime) startTime = Date.now();
  showResult();
});

function render() {
  // 日本語表示（全文）
  let html = "";
  for (let i = 0; i < text.length; i++) {
    if (i < cursor) html += `<span class="text-green-400">${text[i]}</span>`;
    else html += `<span class="text-gray-400">${text[i]}</span>`;
  }
  textDiv.innerHTML = html;

  // ローマ字スライド処理
  if (cursor > slideThreshold) {
    slideStart = cursor - slideThreshold;
  } else {
    slideStart = 0;
  }

  const windowText = text1.slice(slideStart, slideStart + windowSize);
  let romaHtml = "";
  for (let i = 0; i < windowText.length; i++) {
    const globalIndex = slideStart + i;
    romaHtml += `<span class="${globalIndex < cursor ? 'text-green-400' : 'text-gray-400'}">${windowText[i]}</span>`;
  }
  romaHtml += `<span class="cursor">|</span>`;
  romajiDiv.innerHTML = romaHtml;

  // ミス表示
  missSpan.textContent = miss;

  // 正確率（文章全体に対して）
  const acc = Math.max(0, Math.round((1 - miss / text1.length) * 100));
  accSpan.textContent = acc;
}

// 入力判定
input.addEventListener("keydown", e => {
  if (e.key.length !== 1) return;

  if (!startTime) startTime = Date.now();

  const key = e.key.toUpperCase();
  const expected = text1[cursor];

  if (key === expected) cursor++;
  else miss++;

  e.preventDefault();
  render();

  if (cursor >= text1.length) showResult();
});

// 結果画面表示
function showResult() {
  typingScreen.style.display = "none";
  resultScreen.style.display = "block";

  const time = (Date.now() - startTime) / 1000;
  resMiss.textContent = miss;
  resTime.textContent = time.toFixed(1) + "秒";
  resAcc.textContent = Math.max(0, Math.round((1 - miss / text1.length) * 100));
}

// リスタート
document.querySelectorAll(".restart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    resultScreen.style.display = "none";
    homeScreen.style.display = "block";
  });
});
