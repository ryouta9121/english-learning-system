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
const kanjiMap1 = {
  日常: ["にち","じょう"],
  訓練: ["くん","れん"],
  積: ["つ"],
  上: ["あ"],
  点: ["てん"],
  重要: ["じゅう","よう"],
  各日: ["かく","じつ"],
  時間帯: ["じ","かん","たい"],
  文: ["ぶん"],
  打: ["う"],
  手先: ["て","さき"],
  流: ["なが"],
  字形: ["じ","けい"],
  配置: ["はい","ち"],
  気持: ["き","も"],
  配: ["くば"],
  精度: ["せい","ど"],
  速: ["はや"],
  共: ["とも"],
  高: ["たか"],
  慌: ["あわ"],
  続: ["つづ"],
  姿勢: ["し","せい"],
  熟練: ["じゅく","れん"],
  要: ["かなめ"],
  誤: ["あやま"],
  箇所: ["か","しょ"],
  見直: ["み","なお"],
  直: ["なお"],
  身: ["み"],
  能率: ["のう","りつ"],
  良: ["よ"],
  覚: ["おぼ"]
};

const kanjiMap2 = {
  世界: ["せ","かい"],
  国: ["くに"],
  大: ["おお"],
  実際: ["じつ","さい"],
  北: ["きた"],
  海: ["うみ"],
  色: ["いろ"],
  理由: ["り","ゆう"],
  工夫: ["く","ふう"],
  聞: ["き"],
  少: ["すこ"],
  考: ["かんが"],
  方: ["かた"],
  変: ["か"],
  話: ["はなし"],
  地図: ["ち","ず"],
  見: ["み"],
  紙: ["かみ"],
  丸: ["まる"],
  地球: ["ち","きゅう"],
  写: ["うつ"],
  原因: ["げん","いん"],
  赤道: ["せき","どう"],
  近: ["ちか"],
  場所: ["ば","しょ"],
  深: ["ふか"],
  光: ["ひかり"],
  海底: ["かい","てい"],
  様子: ["よう","す"],
  仕組: ["しく","み"],
  知: ["し"],
  何気: ["なに","げ"],
  立体: ["りつ","たい"],
  感: ["かん"],
  困: ["こま"],
  毎日: ["まい","にち"],
  見: ["み"],
  面白: ["おもしろ"]
};


const kanjiMap3 = {
  家事: ["か","じ"],
  豆知識: ["まめ","ち","しき"],
  工夫: ["く","ふう"],
  洗: ["あら"],
  水: ["みず"],
  床: ["ゆか"],
  音楽: ["おん","がく"],
  時間: ["じ","かん"],
  毎日: ["まい","にち"],
  特別: ["とく","べつ"],       
  道具: ["どう","ぐ"],
  少: ["すく"],       
  楽: ["らく"],       
  最: ["さい"],       
  油: ["あぶら"],     
  物: ["もの"],       
  替: ["か"],         
  回: ["かい"],       
  減: ["へ"],         
  強: ["つよ"],       
  同: ["おな"],       
  向: ["む"],         
  速: ["はや"],       
  動: ["うご"],       
  方: ["ほう"],       
  集: ["あつ"],       
  使: ["つか"],
  整: ["ととの"],     
  短: ["みじか"],     
  集中: ["しゅう","ちゅう"], 
  終: ["お"],         
  後: ["あと"],       
  達成: ["たっ","せい"], 
  感: ["かん"],       
  知: ["し"],         
  疲: ["つか"],       
  方: ["ほう"],
  変: ["か"]          
};


const kanjiMap4 = {
  意志: ["い","し"],
  気: ["き"],
  強: ["つよ"],
  大切: ["たい","せつ"],
  続: ["つづ"],
  形: ["かたち"],
  作: ["つく"],
  目標: ["もく","ひょう"],
  大: ["おお"],
  今日: ["きょう"],
  小: ["ちい"],
  一歩: ["いっ","ぽ"],
  用意: ["よう","い"],
  五分: ["ご","ふん"],
  取: ["と"],
  組: ["く"],
  決: ["き"],
  始: ["はじ"],
  負担: ["ふ","たん"],
  思: ["おも"],
  進: ["すす"],
  言葉: ["こと","ば"],
  自分: ["じ","ぶん"],
  認: ["みと"],
  効: ["こう"],
  果: ["か"],
  完璧: ["かん","ぺき"],
  目指: ["めざ"],
  止: ["と"],
  評価: ["ひょう","か"],
  返: ["かえ"],
  自然: ["し","ぜん"],
  力: ["ちから"],
  保: ["たも"],
  下: ["さ"],
  多: ["おお"]
};


// --------------------
// まとめて参照用
// --------------------
const kanjiMap = {
  ...kanjiMap1,
  ...kanjiMap2,
  ...kanjiMap3,
  ...kanjiMap4
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
// 漢字対応トークン生成（長いキー優先版）
// --------------------
function buildTokensFromMixed(text) {
  const tokens = [];
  let i = 0;

  // kanjiMap をすべて統合
  const kanjiMap = { ...kanjiMap1, ...kanjiMap2, ...kanjiMap3, ...kanjiMap4 };

  // 長いキー順にソート（長い文字列から先にマッチ）
  const kanjiKeys = Object.keys(kanjiMap).sort((a, b) => b.length - a.length);

  while (i < text.length) {
    let matched = false;

    for (const k of kanjiKeys) {
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
// TypingProblem クラス
// --------------------
class TypingProblem {
  constructor(text, mode = "long") {
    this.text = text;
    this.tokens = buildTokensFromMixed(text);
    this.mode = mode;
  }
}

class TypingProblem2 {
  constructor(text, mode = "long", jaText = null) {
    this.text = text;
    this.tokens = buildTokensFromMixed(text);
    this.mode = mode;
    this.jaText = jaText; // ← OK
  }
}

// --------------------
// 問題
// --------------------
const longProblems = [
  new TypingProblem(
    "タイピングは日常こつこつと訓練を積み上げる点が重要だ。各日わずかな時間帯でも文を打ち込み、手先の流れや字形の配置へ気持ちを配ると、精度と速さを共に高められる。慌てず続ける姿勢が熟練への要となり、誤り箇所を見直しつつ直す流れを身につければ、能率良く覚えられる。",
    "long"
  ),
  new TypingProblem(
    "世界には、聞くと少し考え方が変わるような話がたくさんある。たとえば、地図で見る国の大きさは、実際とは違って見えることが多い。これは、平らな紙に丸い地球を写すための工夫が原因だ。北にある国ほど大きく見え、赤道に近い場所は小さく見えがちになる。また、海の色が場所によって違うのも理由がある。水そのものの色ではなく、深さや光、海底の様子が関係しているのだ。こうした仕組みを知ると、何気なく見ていた世界が少し立体的に感じられる。知らないままでも困らないが、知ることで毎日の見え方が変わるのも、世界のおもしろさの一つだ。",
    "long"
  ),
  new TypingProblem(
    "家事は特別な道具がなくても、少しの工夫で楽になる。たとえば、洗い物が多い日は、最初に油の少ない物から洗うと水が汚れにくい。これだけで、途中で水を替える回数が減る。また、床をふく時は、強くこするより、同じ向きにゆっくり動かす方がほこりを集めやすい。音楽をかけて気分を整えるのもおすすめだ。短い時間でも集中しやすくなり、終わった後の達成感も大きくなる。毎日の家事は小さな作業の積み重ねだが、知っているかどうかで疲れ方は大きく変わる。",
    "long"
  ),
  new TypingProblem(
    "やる気を保つのは、意志の強さだけでは難しい。大切なのは、続けやすい形を作ることだ。目標を大きく決めるより、今日できる小さな一歩を用意する方が動きやすい。たとえば、五分だけ取り組むと決めると、始める負担がぐっと下がる。始めてしまえば、思ったより進むことも多い。また、できたことを言葉にして自分で認めるのも効果的だ。完璧を目指さず、止まらなかった自分を評価する。それをくり返すことで、自然と続ける力が育っていく。",
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

const wordenglishProblems = [

  new TypingProblem2("Yes","english-word","はい"),
  new TypingProblem2("No","english-word","いいえ"),
  new TypingProblem2("OK","english-word","わかった"),
  new TypingProblem2("Thanks","english-word","ありがとう"),
  new TypingProblem2("Sorry","english-word","ごめん"),
  new TypingProblem2("Hello","english-word","こんにちは"),
  new TypingProblem2("Bye","english-word","じゃあね"),
  new TypingProblem2("Sure","english-word","もちろん"),
  new TypingProblem2("Maybe","english-word","たぶん"),
  new TypingProblem2("Really","english-word","本当に？"),

  new TypingProblem2("Right","english-word","その通り"),
  new TypingProblem2("Wrong","english-word","間違い"),
  new TypingProblem2("Wait","english-word","待って"),
  new TypingProblem2("Help","english-word","助けて"),
  new TypingProblem2("Done","english-word","終わった"),
  new TypingProblem2("Cool","english-word","いいね"),
  new TypingProblem2("Nice","english-word","いい感じ"),
  new TypingProblem2("Fine","english-word","大丈夫"),
  new TypingProblem2("Deal","english-word","了解"),
  new TypingProblem2("Guess","english-word","〜だと思う"),

  new TypingProblem2("Hope","english-word","願う"),
  new TypingProblem2("Think","english-word","考える"),
  new TypingProblem2("Know","english-word","知っている"),
  new TypingProblem2("Feel","english-word","感じる"),
  new TypingProblem2("Want","english-word","欲しい"),
  new TypingProblem2("Need","english-word","必要"),
  new TypingProblem2("Like","english-word","好き"),
  new TypingProblem2("Love","english-word","愛する"),
  new TypingProblem2("Hate","english-word","嫌い"),
  new TypingProblem2("Care","english-word","気にする"),

  new TypingProblem2("Try","english-word","試す"),
  new TypingProblem2("Start","english-word","始める"),
  new TypingProblem2("Stop","english-word","止める"),
  new TypingProblem2("Move","english-word","動く"),
  new TypingProblem2("Stay","english-word","滞在する"),
  new TypingProblem2("Leave","english-word","去る"),
  new TypingProblem2("Come","english-word","来る"),
  new TypingProblem2("Go","english-word","行く"),
  new TypingProblem2("Back","english-word","戻る"),
  new TypingProblem2("Again","english-word","もう一度"),

  new TypingProblem2("Today","english-word","今日"),
  new TypingProblem2("Tomorrow","english-word","明日"),
  new TypingProblem2("Now","english-word","今"),
  new TypingProblem2("Later","english-word","後で"),
  new TypingProblem2("Always","english-word","いつも"),
  new TypingProblem2("Often","english-word","よく"),
  new TypingProblem2("Sometimes","english-word","時々"),
  new TypingProblem2("Never","english-word","決して〜ない"),
  new TypingProblem2("Already","english-word","すでに"),
  new TypingProblem2("Soon","english-word","すぐに"),

  new TypingProblem2("Here","english-word","ここ"),
  new TypingProblem2("There","english-word","そこ"),
  new TypingProblem2("Together","english-word","一緒に"),
  new TypingProblem2("Alone","english-word","一人で"),
  new TypingProblem2("Easy","english-word","簡単"),
  new TypingProblem2("Hard","english-word","難しい"),
  new TypingProblem2("Busy","english-word","忙しい"),
  new TypingProblem2("Free","english-word","暇"),
  new TypingProblem2("Ready","english-word","準備できた"),
  new TypingProblem2("Safe","english-word","安全"),

  new TypingProblem2("Problem","english-word","問題"),
  new TypingProblem2("Answer","english-word","答え"),
  new TypingProblem2("Question","english-word","質問"),
  new TypingProblem2("Reason","english-word","理由"),
  new TypingProblem2("Idea","english-word","考え"),
  new TypingProblem2("Chance","english-word","機会"),
  new TypingProblem2("Change","english-word","変化"),
  new TypingProblem2("Result","english-word","結果"),
  new TypingProblem2("Point","english-word","要点"),
  new TypingProblem2("Truth","english-word","真実")
];

const englishProblems = [
  new TypingProblem2(
    "To be honest, practicing a little every day feels boring sometimes, but it really pays off in the long run.",
    "english",
    "正直に言うと、毎日少しずつ練習するのは退屈に感じることもあるが、長い目で見ると確実に成果が出る。"
  ),
  new TypingProblem2(
    "I didn't expect the meeting to take so long, but we ended up having a really productive discussion.",
    "english",
    "会議がそんなに長くなるとは思っていなかったが、結果的にとても有意義な話し合いになった。"
  ),
  new TypingProblem2(
    "If you keep making small mistakes, don't stress too much about it and just focus on improving step by step.",
    "english",
    "小さなミスが続いても、あまり気にしすぎず、一歩ずつ上達することに集中すればいい。"
  )
];

// --------------------
// ランダムに問題を取得
// --------------------
function pickRandomProblem(mode) {
  let list;

  switch (mode) {
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