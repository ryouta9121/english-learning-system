let currentProblem = null;
let tokens = [];
let tokenIndex = 0;
let charIndex = 0;

let missCount = 0;
let totalTyped = 0;
let startTime = null;

/* =========================
   ★ 英文単語セッション用
========================= */
let wordSession = [];
let wordIndex = 0;
let sessionMiss = 0;
let sessionTyped = 0;
let sessionStartTime = null;

/* =========================
   DOM
========================= */
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
const translationEl = document.getElementById("translation");

/* =========================
   モード選択
========================= */
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    startGame(mode);
  });
});

/* =========================
   ゲーム開始
========================= */
function startGame(mode) {

  // ★ 英文単語モード（10問）
  if (mode === "english-word") {
    wordSession = shuffle([...wordenglishProblems]).slice(0, 10);
    wordIndex = 0;
    sessionMiss = 0;
    sessionTyped = 0;
    sessionStartTime = Date.now();

    loadProblem(wordSession[wordIndex]);
    return;
  }

  // 今回は他モード未対応
}

/* =========================
   問題ロード
========================= */
function loadProblem(problem) {
  currentProblem = problem;

  tokens = problem.tokens.map(t => ({
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

  if (problem.jaText) {
    translationEl.textContent = problem.jaText;
    translationEl.classList.remove("hidden");
  } else {
    translationEl.classList.add("hidden");
  }
}

/* =========================
   表示（日本語）
========================= */
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

/* =========================
   表示（ローマ字）
========================= */
function renderRomaji() {
  if (tokenIndex >= tokens.length) {
    romajiEl.textContent = "";
    return;
  }

  let all = "";
  for (let i = tokenIndex; i < tokens.length; i++) {
    all += tokens[i].ro[0];
  }

  const typed = all.slice(0, charIndex);
  const rest = all.slice(charIndex);

  romajiEl.innerHTML =
    `<span class="text-green-400">${typed}</span>` +
    `<span class="text-white/60">${rest}</span>` +
    `<span class="cursor">|</span>`;
}

/* =========================
   入力処理
========================= */
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
    tokens[tokenIndex].ro =
      candidates.filter(c => c[charIndex - 1] === key);

    const done =
      tokens[tokenIndex].ro.some(c => charIndex >= c.length);

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
    void typingScreen.offsetWidth;
    typingScreen.classList.add("shake");
  }

  updateStats();
  renderText();
  renderRomaji();
  e.preventDefault();
});

/* =========================
   統計
========================= */
function updateStats() {
  missEl.textContent = missCount;

  const correct = totalTyped - missCount;
  const acc = Math.floor((correct / totalTyped) * 100);

  accEl.textContent = acc;
}

/* =========================
   終了処理（10問制）
========================= */
function finishGame() {
  sessionMiss += missCount;
  sessionTyped += totalTyped;

  wordIndex++;

  if (wordIndex < wordSession.length) {
    loadProblem(wordSession[wordIndex]);
    return;
  }

  // ★ 10問終了
  const timeSec =
    ((Date.now() - sessionStartTime) / 1000).toFixed(2);

  const correct = sessionTyped - sessionMiss;
  const acc = Math.floor((correct / sessionTyped) * 100);

  resMissEl.textContent = sessionMiss;
  resTimeEl.textContent = `${timeSec} 秒`;
  resAccEl.textContent = acc;

  typingScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  translationEl.classList.add("hidden");

  currentProblem = null;
}

/* =========================
   ホームに戻る
========================= */
document.querySelectorAll(".restart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    currentProblem = null;
  });
});

/* =========================
   やめる
========================= */
giveupBtn.addEventListener("click", () => {
  typingScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  translationEl.classList.add("hidden");
  currentProblem = null;
});

/* =========================
   util
========================= */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
