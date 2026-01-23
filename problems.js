// 1問を表すクラス
class TypingProblem {
  constructor(ja, ro, mode="long") {
    this.ja = ja;                       // 日本語文
    this.ro = ro.replace(/\s+/g, "");   // ローマ字（スペースなし）
    this.mode = mode;                    // 'long' or 'word'
  }
}

// 長文モード
const longProblems = [
  // 1. タイピングを日々コツコツ
  new TypingProblem(
    "タイピングは日々少しずつ練習を重ねることが大切である。毎日短時間でも文章を入力し、指の動きや文字の位置に意識を向けることで、正確さとスピードの両方を向上させることができる。焦らず継続することが上達の鍵であり、間違えた部分を確認しながら修正する習慣をつけると効率よく学べる。",
    "TAIPINGUHA HIBI SUKOSHI ZUZU RENSYUU WO KASANERU KOTO GA TAiSETSU DE ARU. MAINICHI TANJIKAN DEMO BUNSHOU WO NYUURYOKU SHI, YUBI NO UGOKI YA MOJI NO ICHI NI ISHIKI WO MUKE RU KOTO DE, SEIKAKUSA TO SUPIIDO NO RYOUHOU WO KOUJOU SASE RU KOTO GA DEKIRU. ASERAZU KEIZOKU SURU KOTO GA JOUTATSU NO KAGI DE ARI, MACHIGAETA BUBUN WO KAKUNIN SHI NAGARA SHUUSEI SURU SHUUKAN WO TSUKERU TO KOURITSU YOKU MANABERU."
  ),

  // 2. 世界の豆知識
  new TypingProblem(
    "世界には驚くような豆知識がたくさん存在する。例えば、オーストラリアではカンガルーが野生で街を歩き、ブラジルではザリガニの養殖が盛んである。ポーランドのある都市では毎年オレンジを使った祭りが開かれ、多くの観光客で賑わう。こうした情報を知っておくと、旅行や日常の会話の中でも話題として活用できる。",
    "SEKAI NI HA ODOROKU YOU NA MAMECHISHIKI GA TAKUSAN SONZAI SURU. TATOEBA OOSUTORARIA DE HA KANGARUU GA YASEI DE MACHI WO ARUKI, BURAZIRU DE HA ZARIGANI NO YOUSHOKU GA SAKAN DE ARU. POORANDO NO ARU TOSHI DE HA MAI TOSHI ORENJI WO TSUKATTA MATSURI GA HIRAKA RE, OOKU NO KANKOUKYAKU DE NIGIWAU. KOU SHITA JOUHOU WO SHITTE OKU TO, RYOKOU YA NICHIJOU NO KAIWA NO NAKA DEMO WADAI TO SHITE KATSYOU DEKIRU."
  ),

  // 3. 家事の豆知識
  new TypingProblem(
    "家事を効率よくこなすためには、ちょっとした工夫が役立つ。洗濯物は色や素材ごとに分けることで傷みを防ぎ、オーブンやコンロの使い方を工夫すると調理時間を短縮できる。掃除では道具を整理して順序良く動かすと作業がスムーズになる。こうした日々の積み重ねが生活全体の快適さを高めることにつながる。",
    "KAJI WO KOURITSU YOKU KONASU TAME NI HA, CHOTTO SHITA KUFUU GA YAKUDATSU. SENTAKUMONO HA IRO YA SOZAI GOTO NI WAKE RU KOTO DE ITAMI WO FUSEGI, OOBUN YA KONRO NO TSUKAIKATA WO KUFUU SURU TO CHOURI JIKAN WO TANSHUKU DEKIRU. SOUJI DE HA DOUGU WO SEIRI SHITE JUNJO YOKU UGOKASU TO SAGYOU GA SUMU-ZU NI NARU. KOU SHITA HIBI NO TSUMIKASANE GA SEIKATSU ZENTAI NO KAITEKISA WO TAKAMERU KOTO NI TSUNAGARU."
  ),

  // 4. 意外に知らない世界の常識
  new TypingProblem(
    "世界には普段あまり知られていない常識が数多く存在する。例えば南極では夏でも氷点下の気温が続き、北欧の都市では古い郵便制度が今も使われている。こうした知識を覚えておくと、旅行の際や日常の会話で驚きや興味深い話題として活用できることがある。",
    "SEKAI NI HA FUDAN AMARI SHIRARETE INAI JOUSHIKI GA KAZU OOKU SONZAI SURU. TATOEBA NANKYOKU DE HA NATSU DEMO HYOU TENKA NO KIO ON GA TSUZUKI, HOKUOU NO TOSHI DE HA FURUI YUUBIN SEIDO GA IMA MO TSUKAWARETE IRU. KOU SHITA CHISHIKI WO OBOETE OKU TO, RYOKOU NO SAI YA NICHIJOU NO KAIWA DE ODOROKI YA KYOUMI BUKAI WADAI TO SHITE KATSYOU DEKIRU KOTO GA ARU."
  ),

  // 5. タイピングは正確性
  new TypingProblem(
    "タイピングの上達にはスピードだけでなく正確性が重要である。焦らず確実に文字を入力し、間違えた部分は振り返って修正することが上達への近道である。長文を入力する際も文の構造を意識し、句読点や改行を正確に打つことで、自然に正確かつ速くタイピングできるようになる。",
    "TAIPINGU NO JOUTATSU NI HA SUPIIDO DAKE DE NAKU SEIKAKUSEI GA JUYOU DE ARU. ASERAZU KAKUJITSU NI MOJI WO NYUURYOKU SHI, MACHIGAETA BUBUN HA FURIKAETTE SHUUSEI SURU KOTO GA JOUTATSU HE NO CHIKAMICHI DE ARU. CHOUBUN WO NYUURYOKU SURU SAI MO BUN NO KOUZOU WO ISHIKI SHI, KUTOUTEN YA KAIGYOU WO SEIKAKU NI UTU KOTO DE, SHIZEN NI SEIKAKU KATSU HAYAKU TAIPINGU DEKIRU YOU NI NARU."
  )
];


// 単語モード
const wordProblems = [
  new TypingProblem("猫", "neko", "word"),
  new TypingProblem("学校", "gakkou", "word"),
  new TypingProblem("電車", "densha", "word"),
  new TypingProblem("友達", "tomodachi", "word"),
  new TypingProblem("音楽", "ongaku", "word")
];

// モードに応じてランダムに1問を返す関数
function pickRandomProblem(mode) {
  const list = (mode === "long") ? longProblems : wordProblems;
  return list[Math.floor(Math.random() * list.length)];
}
