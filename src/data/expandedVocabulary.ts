import { Word } from '../types';

export const expandedVocabulary: Word[] = [
  // 基本動詞
  {
    id: 'w200',
    japanese: '寝る',
    hiragana: 'ねる',
    english: 'to sleep',
    descriptionJa: '夜（よる）に休息（きゅうそく）をとる行為（こうい）',
    descriptionEn: 'Action of resting at night',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w201',
    japanese: '起きる',
    hiragana: 'おきる',
    english: 'to wake up',
    descriptionJa: '睡眠（すいみん）から目覚（めざ）める',
    descriptionEn: 'To wake up from sleep',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w202',
    japanese: '立つ',
    hiragana: 'たつ',
    english: 'to stand',
    descriptionJa: '足（あし）で体（からだ）を支（ささ）えて直立（ちょくりつ）する',
    descriptionEn: 'To support body with legs in upright position',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w203',
    japanese: '座る',
    hiragana: 'すわる',
    english: 'to sit',
    descriptionJa: '椅子（いす）などに腰（こし）を下（お）ろす',
    descriptionEn: 'To lower oneself onto a chair or seat',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w204',
    japanese: '泳ぐ',
    hiragana: 'およぐ',
    english: 'to swim',
    descriptionJa: '水（みず）の中（なか）で体（からだ）を動（うご）かして進（すす）む',
    descriptionEn: 'To move through water using body movements',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w205',
    japanese: '走る',
    hiragana: 'はしる',
    english: 'to run',
    descriptionJa: '足（あし）を早（はや）く動（うご）かして進（すす）む',
    descriptionEn: 'To move forward by moving legs quickly',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w206',
    japanese: '作る',
    hiragana: 'つくる',
    english: 'to make',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w207',
    japanese: '働く',
    hiragana: 'はたらく',
    english: 'to work',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w208',
    japanese: '休む',
    hiragana: 'やすむ',
    english: 'to rest',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w209',
    japanese: '開ける',
    hiragana: 'あける',
    english: 'to open',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 身体部位
  {
    id: 'w210',
    japanese: '目',
    hiragana: 'め',
    english: 'eye',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w211',
    japanese: '鼻',
    hiragana: 'はな',
    english: 'nose',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w212',
    japanese: '耳',
    hiragana: 'みみ',
    english: 'ear',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w213',
    japanese: '口',
    hiragana: 'くち',
    english: 'mouth',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w214',
    japanese: '手',
    hiragana: 'て',
    english: 'hand',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w215',
    japanese: '体',
    hiragana: 'からだ',
    english: 'body',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w216',
    japanese: '心',
    hiragana: 'こころ',
    english: 'heart/mind',
    category: 'body',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 乗り物
  {
    id: 'w220',
    japanese: '飛行機',
    hiragana: 'ひこうき',
    english: 'airplane',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w221',
    japanese: 'バス',
    hiragana: 'バス',
    english: 'bus',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w222',
    japanese: '電車',
    hiragana: 'でんしゃ',
    english: 'train',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w223',
    japanese: '自転車',
    hiragana: 'じてんしゃ',
    english: 'bicycle',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w224',
    japanese: 'タクシー',
    hiragana: 'タクシー',
    english: 'taxi',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w225',
    japanese: '船',
    hiragana: 'ふね',
    english: 'ship/boat',
    category: 'transport',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 洋服・アクセサリー
  {
    id: 'w230',
    japanese: '服',
    hiragana: 'ふく',
    english: 'clothes',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w231',
    japanese: 'シャツ',
    hiragana: 'シャツ',
    english: 'shirt',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w232',
    japanese: 'ズボン',
    hiragana: 'ズボン',
    english: 'pants',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w233',
    japanese: '靴',
    hiragana: 'くつ',
    english: 'shoes',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w234',
    japanese: 'ワンピース',
    hiragana: 'ワンピース',
    english: 'dress',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w235',
    japanese: 'スカート',
    hiragana: 'スカート',
    english: 'skirt',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w236',
    japanese: '帽子',
    hiragana: 'ぼうし',
    english: 'hat',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w237',
    japanese: 'メガネ',
    hiragana: 'メガネ',
    english: 'glasses',
    category: 'clothing',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 天気・自然
  {
    id: 'w240',
    japanese: '天気',
    hiragana: 'てんき',
    english: 'weather',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w241',
    japanese: '晴れ',
    hiragana: 'はれ',
    english: 'sunny weather',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w242',
    japanese: '曇り',
    hiragana: 'くもり',
    english: 'cloudy weather',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w243',
    japanese: '雪',
    hiragana: 'ゆき',
    english: 'snow',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w244',
    japanese: '風',
    hiragana: 'かぜ',
    english: 'wind',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w245',
    japanese: '太陽',
    hiragana: 'たいよう',
    english: 'sun',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w246',
    japanese: '月',
    hiragana: 'つき',
    english: 'moon/month',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w247',
    japanese: '星',
    hiragana: 'ほし',
    english: 'star',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w248',
    japanese: '空',
    hiragana: 'そら',
    english: 'sky',
    category: 'weather',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 季節
  {
    id: 'w250',
    japanese: '春',
    hiragana: 'はる',
    english: 'spring',
    category: 'seasons',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w251',
    japanese: '夏',
    hiragana: 'なつ',
    english: 'summer',
    category: 'seasons',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w252',
    japanese: '冬',
    hiragana: 'ふゆ',
    english: 'winter',
    category: 'seasons',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 感情・状態
  {
    id: 'w260',
    japanese: '楽しい',
    hiragana: 'たのしい',
    english: 'fun/enjoyable',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w261',
    japanese: '嬉しい',
    hiragana: 'うれしい',
    english: 'happy',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w262',
    japanese: '悲しい',
    hiragana: 'かなしい',
    english: 'sad',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w263',
    japanese: '怒る',
    hiragana: 'おこる',
    english: 'to get angry',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w264',
    japanese: '怖い',
    hiragana: 'こわい',
    english: 'scary/afraid',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w265',
    japanese: '元気',
    hiragana: 'げんき',
    english: 'healthy/energetic',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w266',
    japanese: '疲れる',
    hiragana: 'つかれる',
    english: 'to get tired',
    category: 'emotions',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 食べ物（詳細）
  {
    id: 'w270',
    japanese: '野菜',
    hiragana: 'やさい',
    english: 'vegetables',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w271',
    japanese: '卵',
    hiragana: 'たまご',
    english: 'egg',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w272',
    japanese: 'チーズ',
    hiragana: 'チーズ',
    english: 'cheese',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w273',
    japanese: 'バター',
    hiragana: 'バター',
    english: 'butter',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w274',
    japanese: '砂糖',
    hiragana: 'さとう',
    english: 'sugar',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w275',
    japanese: '塩',
    hiragana: 'しお',
    english: 'salt',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w276',
    japanese: 'お箸',
    hiragana: 'おはし',
    english: 'chopsticks',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w277',
    japanese: 'スプーン',
    hiragana: 'スプーン',
    english: 'spoon',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w278',
    japanese: 'フォーク',
    hiragana: 'フォーク',
    english: 'fork',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 学校・勉強
  {
    id: 'w280',
    japanese: '先生',
    hiragana: 'せんせい',
    english: 'teacher',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w281',
    japanese: '生徒',
    hiragana: 'せいと',
    english: 'student',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w282',
    japanese: '授業',
    hiragana: 'じゅぎょう',
    english: 'class/lesson',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w283',
    japanese: '宿題',
    hiragana: 'しゅくだい',
    english: 'homework',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w284',
    japanese: '試験',
    hiragana: 'しけん',
    english: 'exam',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w285',
    japanese: '教科書',
    hiragana: 'きょうかしょ',
    english: 'textbook',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w286',
    japanese: 'ノート',
    hiragana: 'ノート',
    english: 'notebook',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w287',
    japanese: '机',
    hiragana: 'つくえ',
    english: 'desk',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w288',
    japanese: '椅子',
    hiragana: 'いす',
    english: 'chair',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w289',
    japanese: '黒板',
    hiragana: 'こくばん',
    english: 'blackboard',
    category: 'school',
    jlptLevel: 'N5',
    difficulty: 3
  },

  // 職業
  {
    id: 'w290',
    japanese: '医者',
    hiragana: 'いしゃ',
    english: 'doctor',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w291',
    japanese: '看護師',
    hiragana: 'かんごし',
    english: 'nurse',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w292',
    japanese: '警察官',
    hiragana: 'けいさつかん',
    english: 'police officer',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w293',
    japanese: '運転手',
    hiragana: 'うんてんしゅ',
    english: 'driver',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w294',
    japanese: 'コック',
    hiragana: 'コック',
    english: 'cook',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w295',
    japanese: '店員',
    hiragana: 'てんいん',
    english: 'shop clerk',
    category: 'jobs',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // その他生活用品
  {
    id: 'w300',
    japanese: 'テレビ',
    hiragana: 'テレビ',
    english: 'television',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w301',
    japanese: 'ラジオ',
    hiragana: 'ラジオ',
    english: 'radio',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w302',
    japanese: '時計',
    hiragana: 'とけい',
    english: 'clock/watch',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w303',
    japanese: 'カメラ',
    hiragana: 'カメラ',
    english: 'camera',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w304',
    japanese: '電話',
    hiragana: 'でんわ',
    english: 'telephone',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w305',
    japanese: 'コンピューター',
    hiragana: 'コンピューター',
    english: 'computer',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w306',
    japanese: '本',
    hiragana: 'ほん',
    english: 'book',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w307',
    japanese: '新聞',
    hiragana: 'しんぶん',
    english: 'newspaper',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w308',
    japanese: '雑誌',
    hiragana: 'ざっし',
    english: 'magazine',
    category: 'household',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 動物
  {
    id: 'w310',
    japanese: '犬',
    hiragana: 'いぬ',
    english: 'dog',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w311',
    japanese: '猫',
    hiragana: 'ねこ',
    english: 'cat',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w312',
    japanese: '鳥',
    hiragana: 'とり',
    english: 'bird',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w313',
    japanese: '牛',
    hiragana: 'うし',
    english: 'cow',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w314',
    japanese: '豚',
    hiragana: 'ぶた',
    english: 'pig',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w315',
    japanese: '馬',
    hiragana: 'うま',
    english: 'horse',
    category: 'animals',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 疑問詞・代名詞追加
  {
    id: 'w320',
    japanese: 'いつ',
    hiragana: 'いつ',
    english: 'when',
    category: 'pronouns',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w321',
    japanese: 'どうして',
    hiragana: 'どうして',
    english: 'why',
    category: 'pronouns',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w322',
    japanese: 'いくら',
    hiragana: 'いくら',
    english: 'how much',
    category: 'pronouns',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w323',
    japanese: 'いくつ',
    hiragana: 'いくつ',
    english: 'how many',
    category: 'pronouns',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 副詞
  {
    id: 'w330',
    japanese: 'とても',
    hiragana: 'とても',
    english: 'very',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w331',
    japanese: 'ちょっと',
    hiragana: 'ちょっと',
    english: 'a little',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w332',
    japanese: 'もう',
    hiragana: 'もう',
    english: 'already',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w333',
    japanese: 'まだ',
    hiragana: 'まだ',
    english: 'not yet',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w334',
    japanese: 'よく',
    hiragana: 'よく',
    english: 'well/often',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w335',
    japanese: 'あまり',
    hiragana: 'あまり',
    english: 'not very',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w336',
    japanese: '全然',
    hiragana: 'ぜんぜん',
    english: 'not at all',
    category: 'adverbs',
    jlptLevel: 'N5',
    difficulty: 2
  },

  // 接続詞
  {
    id: 'w340',
    japanese: 'それから',
    hiragana: 'それから',
    english: 'and then',
    category: 'conjunctions',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w341',
    japanese: 'でも',
    hiragana: 'でも',
    english: 'but',
    category: 'conjunctions',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w342',
    japanese: 'そして',
    hiragana: 'そして',
    english: 'and',
    category: 'conjunctions',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 挨拶表現
  {
    id: 'w350',
    japanese: 'ごめんなさい',
    hiragana: 'ごめんなさい',
    english: 'sorry',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 2
  },
  {
    id: 'w351',
    japanese: 'お疲れ様',
    hiragana: 'おつかれさま',
    english: 'good job/thank you for your hard work',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 3
  },
  {
    id: 'w352',
    japanese: 'どういたしまして',
    hiragana: 'どういたしまして',
    english: 'you are welcome',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 3
  }
];

// 既存の語彙リストと結合する関数
export const combineVocabulary = (existingWords: Word[]): Word[] => {
  // 説明が不足している語彙に自動で説明を追加
  const wordsWithDescriptions = expandedVocabulary.map(word => ({
    ...word,
    descriptionJa: word.descriptionJa || generateDefaultDescriptionJa(word),
    descriptionEn: word.descriptionEn || generateDefaultDescriptionEn(word)
  }));
  
  return [...existingWords, ...wordsWithDescriptions];
};

// デフォルト日本説明を生成する関数
const generateDefaultDescriptionJa = (word: Word): string => {
  switch (word.category) {
    case 'verbs':
      return `${word.english}を表（あらわ）す動詞（どうし）`;
    case 'body':
      return `体（からだ）の部分（ぶぶん）：${word.english}`;
    case 'transport':
      return `乗（の）り物（もの）：${word.english}`;
    case 'clothing':
      return `衣類（いるい）：${word.english}`;
    case 'weather':
      return `天気（てんき）・自然（しぜん）：${word.english}`;
    case 'seasons':
      return `季節（きせつ）：${word.english}`;
    case 'emotions':
      return `感情（かんじょう）・状態（じょうたい）：${word.english}`;
    case 'food':
      return `食（た）べ物（もの）・飲（の）み物（もの）：${word.english}`;
    case 'school':
      return `学校（がっこう）関連（かんれん）：${word.english}`;
    case 'jobs':
      return `職業（しょくぎょう）：${word.english}`;
    case 'household':
      return `日用品（にちようひん）：${word.english}`;
    case 'animals':
      return `動物（どうぶつ）：${word.english}`;
    case 'pronouns':
      return `疑問詞（ぎもんし）・代名詞（だいめいし）：${word.english}`;
    case 'adverbs':
      return `副詞（ふくし）：${word.english}`;
    case 'conjunctions':
      return `接続詞（せつぞくし）：${word.english}`;
    case 'greetings':
      return `挨拶（あいさつ）・表現（ひょうげん）：${word.english}`;
    default:
      return word.english;
  }
};

// デフォルト英語説明を生成する関数
const generateDefaultDescriptionEn = (word: Word): string => {
  switch (word.category) {
    case 'verbs':
      return `Verb meaning "${word.english}"`;
    case 'body':
      return `Body part: ${word.english}`;
    case 'transport':
      return `Vehicle: ${word.english}`;
    case 'clothing':
      return `Clothing item: ${word.english}`;
    case 'weather':
      return `Weather/nature: ${word.english}`;
    case 'seasons':
      return `Season: ${word.english}`;
    case 'emotions':
      return `Emotion/state: ${word.english}`;
    case 'food':
      return `Food/drink: ${word.english}`;
    case 'school':
      return `School-related: ${word.english}`;
    case 'jobs':
      return `Occupation: ${word.english}`;
    case 'household':
      return `Household item: ${word.english}`;
    case 'animals':
      return `Animal: ${word.english}`;
    case 'pronouns':
      return `Question word/pronoun: ${word.english}`;
    case 'adverbs':
      return `Adverb: ${word.english}`;
    case 'conjunctions':
      return `Conjunction: ${word.english}`;
    case 'greetings':
      return `Greeting/expression: ${word.english}`;
    default:
      return word.english;
  }
};

// カテゴリ別統計
export const getExpandedCategoriesStats = (): { [key: string]: number } => {
  const stats: { [key: string]: number } = {};
  expandedVocabulary.forEach(word => {
    stats[word.category] = (stats[word.category] || 0) + 1;
  });
  return stats;
};

// 全拡張語彙数
export const getExpandedVocabularyCount = (): number => {
  return expandedVocabulary.length;
}; 