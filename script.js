let currentProblem = null;
let tokens = [];
let tokenIndex = 0;
let charIndex = 0;

let missCount = 0;
let totalTyped = 0;
let startTime = null;

// --------------------
// DOM
// --------------------
const homeScreen = document.getElementById("home-screen");
const typingScreen = document.getElementById("typing-screen");
const resultScreen = document.getElementById("result-screen");

const textEl = document.getElementById("text");
const romajiEl = document.getElementById("romaji");
const inputEl = document.getElementById("input");

const missEl = document.getElementById("miss");
const accEl = document.getElementById("accuracy");

const resMissEl = document.getElementById("res-miss");
const resTimeEl = document.getElementById("res-time");
const resAccEl = document.getElementById("res-acc");

const giveupBtn = document.getElementById("giveup");

// --------------------
// モード選択
// --------------------
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    startGame(mode);
  });
});

// --------------------
// ゲーム開始
// --------------------
function startGame(mode) {
  currentProblem = pickRandomProblem(mode);

  // トークンをディープコピー（候補削り用）
  tokens = currentProblem.tokens.map(t => ({
    ja: t.ja,
    ro: [...t.ro]
  }));

  tokenIndex = 0;
  charIndex = 0;
  missCount = 0;
  totalTyped = 0;
  startTime = Date.now();

  missEl.textContent = "0";
  accEl.textContent = "100";

  homeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  typingScreen.classList.remove("hidden");

  inputEl.value = "";
  inputEl.focus();

  renderText();
  renderRomaji();
}

function pickRandomProblem(mode) {
  let list;
  switch(mode) {
    case "long":
      list = longProblems;
      break;
    case "word":
      list = wordProblems;
      break;
    case "english":
      list = englishProblems;
      break;
    default:
      list = wordProblems;
  }
  return list[Math.floor(Math.random() * list.length)];
}


// --------------------
// 表示更新（日本語）
// --------------------
function renderText() {
  let html = "";

  tokens.forEach((t, i) => {
    if (i < tokenIndex) {
      html += `<span class="text-green-400">${t.ja}</span>`;
    } else if (i === tokenIndex) {
      html += `<span class="text-yellow-300 underline">${t.ja}</span>`;
    } else {
      html += `<span class="text-white/60">${t.ja}</span>`;
    }
  });

  textEl.innerHTML = html;
}

// --------------------
// 表示更新（ローマ字）
// --------------------
function renderRomaji() {
  if (tokenIndex >= tokens.length) {
    romajiEl.textContent = "";
    return;
  }

  const WINDOW_SIZE = 50;   // 表示ウィンドウ全体
  const SCROLL_POS  = 25;   // ここを超えたらスクロール

  // ① 先読み用：残り全部を連結
  let all = "";
  for (let i = tokenIndex; i < tokens.length; i++) {
    all += tokens[i].ro[0];
  }

  // ② 全体の中での「今の入力位置」
  let offset = charIndex;
  // （tokenIndex 以前は表示しない設計なので charIndex だけでOK）

  // ③ スクロール開始位置を計算
  let start = 0;
  if (offset > SCROLL_POS) {
    start = offset - SCROLL_POS;
  }

  // ④ 表示ウィンドウを切り出す
  const windowText = all.slice(start, start + WINDOW_SIZE);

  // ⑤ ウィンドウ内でのカーソル位置
  const cursorPos = offset - start;

  const typed = windowText.slice(0, cursorPos);
  const rest  = windowText.slice(cursorPos);

  romajiEl.innerHTML =
    `<span class="text-green-400">${typed}</span>` +
    `<span class="text-white/60">${rest}</span>` +
    `<span class="cursor">|</span>`;
}



// --------------------
// 入力処理
// --------------------
inputEl.addEventListener("keydown", (e) => {
  if (!currentProblem) return;
  if (e.key.length !== 1) return;

  const key = e.key.toUpperCase();
  totalTyped++;

  const token = tokens[tokenIndex];
  const candidates = token.ro;

  let matched = false;

  for (const cand of candidates) {
    if (key === cand[charIndex]) {
      matched = true;
      break;
    }
  }

  if (matched) {
    charIndex++;

    // 現在入力に合う候補だけ残す
    tokens[tokenIndex].ro = candidates.filter(c => c[charIndex - 1] === key);

    // トークン完了判定
    const done = tokens[tokenIndex].ro.some(c => charIndex >= c.length);

    if (done) {
      tokenIndex++;
      charIndex = 0;

      if (tokenIndex >= tokens.length) {
        finishGame();
        return;
      }
    }
  } else {
    missCount++;
    typingScreen.classList.remove("shake");
    void typingScreen.offsetWidth; // reflow
    typingScreen.classList.add("shake");
  }

  updateStats();
  renderText();
  renderRomaji();
  e.preventDefault();
});

// --------------------
// 統計更新
// --------------------
function updateStats() {
  missEl.textContent = missCount.toString();

  const correct = totalTyped - missCount;
  const acc = totalTyped > 0
    ? Math.floor((correct / totalTyped) * 100)
    : 100;

  accEl.textContent = acc.toString();
}

// --------------------
// 終了処理
// --------------------
function finishGame() {
  const timeSec = ((Date.now() - startTime) / 1000).toFixed(2);

  resMissEl.textContent = missCount.toString();
  resTimeEl.textContent = `${timeSec} 秒`;

  const correct = totalTyped - missCount;
  const acc = totalTyped > 0
    ? Math.floor((correct / totalTyped) * 100)
    : 100;

  resAccEl.textContent = acc.toString();

  typingScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  currentProblem = null;
}

// --------------------
// 結果画面：ホームに戻る
// --------------------
document.querySelectorAll(".restart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    typingScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    currentProblem = null;
  });
});

// --------------------
// やめる
// --------------------
giveupBtn.addEventListener("click", () => {
  typingScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  currentProblem = null;
});
