const kanaMap = {
  // --------------------
  // 母音
  // --------------------
  あ: ["A"], ア: ["A"],
  い: ["I"], イ: ["I"],
  う: ["U"], ウ: ["U"],
  え: ["E"], エ: ["E"],
  お: ["O"], オ: ["O"],

  // --------------------
  // か行
  // --------------------
  か: ["KA"], カ: ["KA"],
  き: ["KI"], キ: ["KI"],
  く: ["KU"], ク: ["KU"],
  け: ["KE"], ケ: ["KE"],
  こ: ["KO"], コ: ["KO"],

  // --------------------
  // さ行
  // --------------------
  さ: ["SA"], サ: ["SA"],
  し: ["SHI","SI"], シ: ["SHI","SI"],
  す: ["SU"], ス: ["SU"],
  せ: ["SE"], セ: ["SE"],
  そ: ["SO"], ソ: ["SO"],

  // --------------------
  // た行
  // --------------------
  た: ["TA"], タ: ["TA"],
  ち: ["CHI","TI"], チ: ["CHI","TI"],
  つ: ["TSU","TU"], ツ: ["TSU","TU"],
  て: ["TE"], テ: ["TE"],
  と: ["TO"], ト: ["TO"],

  // --------------------
  // な行
  // --------------------
  な: ["NA"], ナ: ["NA"],
  に: ["NI"], ニ: ["NI"],
  ぬ: ["NU"], ヌ: ["NU"],
  ね: ["NE"], ネ: ["NE"],
  の: ["NO"], ノ: ["NO"],

  // --------------------
  // は行
  // --------------------
  は: ["HA"], ハ: ["HA"],
  ひ: ["HI"], ヒ: ["HI"],
  ふ: ["FU","HU"], フ: ["FU","HU"],
  へ: ["HE"], ヘ: ["HE"],
  ほ: ["HO"], ホ: ["HO"],

  // --------------------
  // ま行
  // --------------------
  ま: ["MA"], マ: ["MA"],
  み: ["MI"], ミ: ["MI"],
  む: ["MU"], ム: ["MU"],
  め: ["ME"], メ: ["ME"],
  も: ["MO"], モ: ["MO"],

  // --------------------
  // や行
  // --------------------
  や: ["YA"], ヤ: ["YA"],
  ゆ: ["YU"], ユ: ["YU"],
  よ: ["YO"], ヨ: ["YO"],

  // --------------------
  // ら行
  // --------------------
  ら: ["RA"], ラ: ["RA"],
  り: ["RI"], リ: ["RI"],
  る: ["RU"], ル: ["RU"],
  れ: ["RE"], レ: ["RE"],
  ろ: ["RO"], ロ: ["RO"],

  // --------------------
  // わ行
  // --------------------
  わ: ["WA"], ワ: ["WA"],
  を: ["WO"], ヲ: ["WO"],
  ん: ["NN","N"], ン: ["NN","N"],

  // --------------------
  // 濁音
  // --------------------
  が: ["GA"], ガ: ["GA"],
  ぎ: ["GI"], ギ: ["GI"],
  ぐ: ["GU"], グ: ["GU"],
  げ: ["GE"], ゲ: ["GE"],
  ご: ["GO"], ゴ: ["GO"],

  ざ: ["ZA"], ザ: ["ZA"],
  じ: ["JI","ZI"], ジ: ["JI","ZI"],
  ず: ["ZU"], ズ: ["ZU"],
  ぜ: ["ZE"], ゼ: ["ZE"],
  ぞ: ["ZO"], ゾ: ["ZO"],

  だ: ["DA"], ダ: ["DA"],
  ぢ: ["JI","DI"], ヂ: ["JI","DI"],
  づ: ["ZU","DU"], ヅ: ["ZU","DU"],
  で: ["DE"], デ: ["DE"],
  ど: ["DO"], ド: ["DO"],

  ば: ["BA"], バ: ["BA"],
  び: ["BI"], ビ: ["BI"],
  ぶ: ["BU"], ブ: ["BU"],
  べ: ["BE"], ベ: ["BE"],
  ぼ: ["BO"], ボ: ["BO"],

  ぱ: ["PA"], パ: ["PA"],
  ぴ: ["PI"], ピ: ["PI"],
  ぷ: ["PU"], プ: ["PU"],
  ぺ: ["PE"], ペ: ["PE"],
  ぽ: ["PO"], ポ: ["PO"],

  // --------------------
  // 拗音
  // --------------------
  きゃ: ["KYA"], キャ: ["KYA"],
  きゅ: ["KYU"], キュ: ["KYU"],
  きょ: ["KYO"], キョ: ["KYO"],

  しゃ: ["SHA","SYA"], シャ: ["SHA","SYA"],
  しゅ: ["SHU","SYU"], シュ: ["SHU","SYU"],
  しょ: ["SHO","SYO"], ショ: ["SHO","SYO"],

  ちゃ: ["CHA","TYA"], チャ: ["CHA","TYA"],
  ちゅ: ["CHU","TYU"], チュ: ["CHU","TYU"],
  ちょ: ["CHO","TYO"], チョ: ["CHO","TYO"],

  にゃ: ["NYA"], ニャ: ["NYA"],
  にゅ: ["NYU"], ニュ: ["NYU"],
  にょ: ["NYO"], ニョ: ["NYO"],

  ひゃ: ["HYA"], ヒャ: ["HYA"],
  ひゅ: ["HYU"], ヒュ: ["HYU"],
  ひょ: ["HYO"], ヒョ: ["HYO"],

  みゃ: ["MYA"], ミャ: ["MYA"],
  みゅ: ["MYU"], ミュ: ["MYU"],
  みょ: ["MYO"], ミョ: ["MYO"],

  りゃ: ["RYA"], リャ: ["RYA"],
  りゅ: ["RYU"], リュ: ["RYU"],
  りょ: ["RYO"], リョ: ["RYO"],

  ぎゃ: ["GYA"], ギャ: ["GYA"],
  ぎゅ: ["GYU"], ギュ: ["GYU"],
  ぎょ: ["GYO"], ギョ: ["GYO"],

  じゃ: ["JA","JYA","ZYA"], ジャ: ["JA","JYA","ZYA"],
  じゅ: ["JU","JYU","ZYU"], ジュ: ["JU","JYU","ZYU"],
  じょ: ["JO","JYO","ZYO"], ジョ: ["JO","JYO","ZYO"],

  びゃ: ["BYA"], ビャ: ["BYA"],
  びゅ: ["BYU"], ビュ: ["BYU"],
  びょ: ["BYO"], ビョ: ["BYO"],

  ぴゃ: ["PYA"], ピャ: ["PYA"],
  ぴゅ: ["PYU"], ピュ: ["PYU"],
  ぴょ: ["PYO"], ピョ: ["PYO"],

  // --------------------
  // 小文字（単体入力 l~ / x~）
  // --------------------
  ぁ: ["LA","XA"], ァ: ["LA","XA"],
  ぃ: ["LI","XI"], ィ: ["LI","XI"],
  ぅ: ["LU","XU"], ゥ: ["LU","XU"],
  ぇ: ["LE","XE"], ェ: ["LE","XE"],
  ぉ: ["LO","XO"], ォ: ["LO","XO"],

  ゃ: ["LYA","XYA"], ャ: ["LYA","XYA"],
  ゅ: ["LYU","XYU"], ュ: ["LYU","XYU"],
  ょ: ["LYO","XYO"], ョ: ["LYO","XYO"],

  っ: ["LTU","XTU"], ッ: ["LTU","XTU"],

  // --------------------
  // 記号・空白
  // --------------------
  ー: ["-"],
  "、": [","],
  "。": ["."],
  "　": [" "],
  " ": [" "]
};
// --------------------
// 漢字 → かな分解
// --------------------
const kanjiMap = {
少: ["す","こ"],
日々: ["ひ", "び"],
毎日: ["まい", "にち"],
練: ["れん"],
習: ["しゅう"],
重: ["かさ"],
大: ["たい"],
切: ["せつ"],
入: ["にゅう"],
力: ["りょく"],
指: ["ゆび"],
動: ["うご"],
位: ["い"],
置: ["ち"],
正: ["せい"],
確: ["かく"],
向: ["こう"],
上: ["じょう"],
焦: ["あせ"],
継: ["けい"],
続: ["ぞく"],
鍵: ["かぎ"],
間: ["ま"],
違: ["ちが"],
確: ["かく"],
認: ["にん"],
修: ["しゅう"],
正: ["せい"],
習: ["しゅう"],
慣: ["かん"],
効: ["こう"],
率: ["りつ"],
学: ["まな"],
毎: ["まい"],
日: ["にち"],
短: ["たん"],
時: ["じ"],
間: ["かん"],
文: ["ぶん"],
章: ["しょう"],
字: ["じ"],
意: ["い"],
識: ["しき"],
両: ["りょう"],
方: ["ほう"],
達: ["たつ"],
部: ["ぶ"],
分: ["ぶん"]


};

const phraseMap = {
  "日々": ["ひ","び"],
  "毎日": ["まい","にち"],
  "文章": ["ぶん","しょう"],
  "短時間": ["たん","じ","かん"],
  "入力": ["にゅう","りょく"],
  "文字": ["も","じ"],
  "位置": ["い","ち"],
  "意識": ["い","しき"],
  "正確": ["せい","かく"],
  "両方": ["りょう","ほう"],
  "向上": ["こう","じょう"],
  "上達": ["じょう","たつ"],
  "間違": ["ま","ちが"],
  "確認": ["かく","にん"],
  "修正": ["しゅう","せい"],
  "習慣": ["しゅう","かん"],
  "効率": ["こう","りつ"]
};

// --------------------
// ひらがな・カタカナ → トークン
// --------------------
function buildTokensFromKana(text) {
  const tokens = [];
  let i = 0;

  while (i < text.length) {
    const two = text.slice(i, i + 2);
    if (kanaMap[two]) {
      tokens.push({ ja: two, ro: kanaMap[two] });
      i += 2;
      continue;
    }

    const one = text[i];
    if (kanaMap[one]) {
      tokens.push({ ja: one, ro: kanaMap[one] });
    } else {
      tokens.push({ ja: one, ro: [one] });
    }
    i++;
  }

  return tokens.map(t => ({
    ja: t.ja,
    ro: t.ro.map(r => r.toUpperCase())
  }));
}

// --------------------
// 漢字対応トークン生成
// --------------------
function buildTokensFromMixed(text) {
  const tokens = [];
  let i = 0;

  while (i < text.length) {
    let matched = false;

    for (const k in kanjiMap) {
      if (text.startsWith(k, i)) {
        const readings = kanjiMap[k];

        readings.forEach((kana, idx) => {
          const subs = buildTokensFromKana(kana);

          subs.forEach((t, subIdx) => {
            const isLast =
              idx === readings.length - 1 &&
              subIdx === subs.length - 1;

            tokens.push({
              ja: isLast ? k : "",
              ro: t.ro
            });
          });
        });

        i += k.length;
        matched = true;
        break;
      }
    }

    if (matched) continue;

    const two = text.slice(i, i + 2);
    if (kanaMap[two]) {
      tokens.push({ ja: two, ro: kanaMap[two] });
      i += 2;
      continue;
    }

    const one = text[i];
    if (kanaMap[one]) {
      tokens.push({ ja: one, ro: kanaMap[one] });
    } else {
      tokens.push({ ja: one, ro: [one] });
    }

    i++;
  }

  return tokens.map(t => ({
    ja: t.ja,
    ro: t.ro.map(r => r.toUpperCase())
  }));
}

// --------------------
// TypingProblem
// --------------------
class TypingProblem {
  constructor(text, mode = "long") {
    this.text = text;
    this.tokens = buildTokensFromMixed(text);
    this.mode = mode;
  }
}

// --------------------
// 問題
// --------------------
const longProblems = [
  new TypingProblem(
    "タイピングは日々少しずつ練習を重ねることが大切である。毎日短時間でも文章を入力し、指の動きや文字の位置に意識を向けることで、正確さとスピードの両方を向上させることができる。焦らず継続することが上達の鍵であり、間違えた部分を確認しながら修正する習慣をつけると効率よく学べる。",
    "long"
  )
];

const wordProblems = [
  new TypingProblem("ねこ", "word"),
  new TypingProblem("がっこう", "word"),
  new TypingProblem("でんしゃ", "word"),
  new TypingProblem("ともだち", "word"),
  new TypingProblem("おんがく", "word")
];

// --------------------
function pickRandomProblem(mode) {
  const list = mode === "long" ? longProblems : wordProblems;
  return list[Math.floor(Math.random() * list.length)];
}