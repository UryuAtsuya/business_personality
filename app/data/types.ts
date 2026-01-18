export interface AIType {
  id: string;
  code: string;
  name: string;
  youtrustName: string;
  catchCopy: string;
  survivalStrategy: string;
  recommendedCareer: string;
  replacementRisk: string;
  image: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  axis: {
    input: 'Theory' | 'Intuition';
    process: 'Manual' | 'Auto';
    output: 'Creative' | 'Structured';
    interaction: 'Human' | 'AI';
  };
}

export const aiTypes: AIType[] = [
  // --- Group: Guardians (Blue) ---
  {
    id: 'rhms',
    code: 'RHMS',
    name: 'RHMS',
    youtrustName: '表現者',
    catchCopy: '空気を動かし、指名で勝つ',
    survivalStrategy: '対面での信頼構築が武器。就活・転職では面接の場で温度感と誠実さを示すと刺さる。AIが模倣しづらい「人の熱量」で評価を取りに行く。',
    recommendedCareer: '営業・販売・広報PR・研修講師・イベントMC・サービス業マネージャー',
    replacementRisk: '低',
    image: '/images/characters/humans/rhms.png',
    color: 'blue',
    axis: { input: 'Theory', process: 'Manual', output: 'Structured', interaction: 'Human' }
  },
  {
    id: 'rhmt',
    code: 'RHMT',
    name: 'RHMT',
    youtrustName: '先導者',
    catchCopy: '場づくりで人を前に進める',
    survivalStrategy: 'コミュニティやチームの合意形成が得意。転職では「人を動かした経験」を数字で語ると強い。AIが作れない帰属感と秩序で価値を出す。',
    recommendedCareer: 'コミュニティ運営・イベント企画・地方創生・人事/組織開発・プロジェクトマネージャー・自治体連携',
    replacementRisk: '低',
    image: '/images/characters/humans/rhmt.png',
    color: 'blue',
    axis: { input: 'Theory', process: 'Manual', output: 'Structured', interaction: 'Human' }
  },
  {
    id: 'rhps',
    code: 'RHPS',
    name: 'RHPS',
    youtrustName: '名工',
    catchCopy: '手技と品質で最後に勝つ',
    survivalStrategy: '高度な実技と品質保証で信頼を取るタイプ。就活では作品や実績を具体物で見せると強い。AIを補助に使いつつ最終品質を人が保証する。',
    recommendedCareer: '美容師・料理人・製造ライン品質管理・施工管理補佐・医療技術職・伝統工芸',
    replacementRisk: '極低',
    image: '/images/characters/humans/rhps.png',
    color: 'blue',
    axis: { input: 'Theory', process: 'Manual', output: 'Structured', interaction: 'AI' }
  },
  {
    id: 'rhpt',
    code: 'RHPT',
    name: 'RHPT',
    youtrustName: '育成者',
    catchCopy: '人の成長に寄り添い続ける',
    survivalStrategy: '対話で相手の不安を減らし成長を支援する。採用場面では「育成・支援」エピソードが刺さる。AIには届きにくい信頼関係で勝つ。',
    recommendedCareer: '人材育成・教育・介護・キャリアアドバイザー・学校運営・コーチング',
    replacementRisk: '低',
    image: '/images/characters/humans/rhpt.png',
    color: 'blue',
    axis: { input: 'Theory', process: 'Manual', output: 'Structured', interaction: 'Human' }
  },

  // --- Group: Diplomats (Green) ---
  {
    id: 'rlms',
    code: 'RLMS',
    name: 'RLMS',
    youtrustName: '事業主',
    catchCopy: '現場の勘とAIで稼ぐ',
    survivalStrategy: '現場感覚で利益構造を読み、AIで回転率を上げる。転職では改善で利益を出した話が強い。小さく回して確実に勝つ。',
    recommendedCareer: '小規模店舗オーナー・EC運営・スマート農業・無人店舗運営・不動産管理・業務改善担当',
    replacementRisk: '中',
    image: '/images/characters/humans/rlms.png',
    color: 'green',
    axis: { input: 'Intuition', process: 'Manual', output: 'Creative', interaction: 'AI' }
  },
  {
    id: 'rlmt',
    code: 'RLMT',
    name: 'RLMT',
    youtrustName: '統括者',
    catchCopy: '現場とテックをつなぐ司令塔',
    survivalStrategy: '現場の肌感を持ちながら、仕組み化でスケールさせる。転職では多拠点・多部門を動かした経験が武器。人とAIの橋渡しで価値を出す。',
    recommendedCareer: '物流統括・工場長・建設マネジメント・オペレーションマネージャー・DX推進・BPO統括',
    replacementRisk: '低',
    image: '/images/characters/humans/rlmt.png',
    color: 'green',
    axis: { input: 'Intuition', process: 'Auto', output: 'Structured', interaction: 'Human' }
  },
  {
    id: 'rlps',
    code: 'RLPS',
    name: 'RLPS',
    youtrustName: '技術士',
    catchCopy: '難題を現場で解く職人エンジニア',
    survivalStrategy: '標準化されないトラブル対応に強い。転職では「修羅場対応」の再現性が評価される。AIと道具を使い、最後の解決者になる。',
    recommendedCareer: '設備保全・インフラ保守・フィールドエンジニア・特殊修理・セキュリティ運用・SRE',
    replacementRisk: '極低',
    image: '/images/characters/humans/rlps.png',
    color: 'green',
    axis: { input: 'Theory', process: 'Manual', output: 'Creative', interaction: 'AI' }
  },
  {
    id: 'rlpt',
    code: 'RLPT',
    name: 'RLPT',
    youtrustName: '守護者',
    catchCopy: '社会基盤を止めない守りの要',
    survivalStrategy: 'ルール遵守と安定運用が強み。就職では堅実性と責任感を示すと刺さる。自動化を取り入れつつ、最終判断は人で締める。',
    recommendedCareer: '公務員・警察消防・インフラ運用・コンプライアンス・リスク管理・品質保証',
    replacementRisk: '低',
    image: '/images/characters/humans/rlpt.png',
    color: 'green',
    axis: { input: 'Theory', process: 'Auto', output: 'Structured', interaction: 'Human' }
  },

  // --- Group: Drivers (Orange) ---
  {
    id: 'vhms',
    code: 'VHMS',
    name: 'VHMS',
    youtrustName: '発信者',
    catchCopy: '発信で行動を生む',
    survivalStrategy: 'データとクリエイティブの両輪で拡散を作る。転職では成果の数値（CV/売上）を提示すると強い。AIで量産しつつ、人の目を止める設計が鍵。',
    recommendedCareer: 'SNSマーケ・広告運用・広報・ブランドオーナー・コンテンツディレクター・インフルエンサー',
    replacementRisk: '低',
    image: '/images/characters/humans/vhms.png',
    color: 'orange',
    axis: { input: 'Theory', process: 'Auto', output: 'Structured', interaction: 'AI' }
  },
  {
    id: 'vhmt',
    code: 'VHMT',
    name: 'VHMT',
    youtrustName: '運営者',
    catchCopy: 'オンラインの秩序と文化を作る',
    survivalStrategy: 'コミュニティの空気を読み、ルールと運営で定着させる。転職では炎上回避や定着率の実績が刺さる。人とAIのバランスで文化を守る。',
    recommendedCareer: 'コミュニティマネージャー・カスタマーサクセス・オンラインサロン運営・モデレーター・プロダクト運営・CS運営',
    replacementRisk: '中',
    image: '/images/characters/humans/vhmt.png',
    color: 'orange',
    axis: { input: 'Intuition', process: 'Manual', output: 'Structured', interaction: 'Human' }
  },
  {
    id: 'vhps',
    code: 'VHPS',
    name: 'VHPS',
    youtrustName: '助言者',
    catchCopy: '言葉で迷いをほどく',
    survivalStrategy: '相手の悩みを引き出し、言葉で背中を押す。就活では相談件数や変化の事例が武器。AIで情報整理し、人の心に届く助言を出す。',
    recommendedCareer: 'キャリアコーチ・メンタルコーチ・人材紹介アドバイザー・カウンセラー・研修ファシリテーター・ライター',
    replacementRisk: '低',
    image: '/images/characters/humans/vhps.png',
    color: 'orange',
    axis: { input: 'Intuition', process: 'Auto', output: 'Creative', interaction: 'AI' }
  },
  {
    id: 'vhpt',
    code: 'VHPT',
    name: 'VHPT',
    youtrustName: '演出家',
    catchCopy: '体験設計で記憶に残す',
    survivalStrategy: '体験の流れを設計し、感情の山を作る。転職ではUX/体験改善の実績が強い。AIで制作スピードを上げ、最後は人の感性で磨く。',
    recommendedCareer: 'UXデザイナー・イベントプロデューサー・ゲームディレクター・展示演出・プロモーション企画・映像ディレクター',
    replacementRisk: '中',
    image: '/images/characters/humans/vhpt.png',
    color: 'orange',
    axis: { input: 'Theory', process: 'Auto', output: 'Structured', interaction: 'AI' }
  },

  // --- Group: Visionaries (Purple) ---
  {
    id: 'vlms',
    code: 'VLMS',
    name: 'VLMS',
    youtrustName: '起業家',
    catchCopy: '最小のチームで価値を生む',
    survivalStrategy: '仮説検証を高速で回し、小さく勝つのが得意。転職では「ゼロからの立ち上げ」経験が評価される。人を巻き込みながらAIで速度を出す。',
    recommendedCareer: 'ソロプレナー・個人開発・事業開発・新規サービス立ち上げ・プロダクトマネージャー・投資家',
    replacementRisk: '極低',
    image: '/images/characters/humans/vlms.png',
    color: 'purple',
    axis: { input: 'Intuition', process: 'Manual', output: 'Creative', interaction: 'Human' }
  },
  {
    id: 'vlmt',
    code: 'VLMT',
    name: 'VLMT',
    youtrustName: '開拓者',
    catchCopy: '新しい市場を切り拓く',
    survivalStrategy: '未整備な領域で旗を立てるタイプ。転職では不確実性を前進させた経験が武器。AIで試行回数を増やし、人の意思で方向を決める。',
    recommendedCareer: '起業家・プラットフォーム企画・BizDev・グロース責任者・海外事業・戦略企画',
    replacementRisk: '極低',
    image: '/images/characters/humans/vlmt.png',
    color: 'purple',
    axis: { input: 'Intuition', process: 'Auto', output: 'Creative', interaction: 'Human' }
  },
  {
    id: 'vlps',
    code: 'VLPS',
    name: 'VLPS',
    youtrustName: '分析家',
    catchCopy: '仮説と検証で勝ち筋を突く',
    survivalStrategy: 'データと洞察で突破口を見つける。就活では分析で成果を出した具体例が強い。AIを使って深掘りし、最後の仮説は人が描く。',
    recommendedCareer: 'データサイエンティスト・AIエンジニア・セキュリティアナリスト・リサーチャー・プロダクトアナリスト・クオンツ',
    replacementRisk: '極低',
    image: '/images/characters/humans/vlps.png',
    color: 'purple',
    axis: { input: 'Intuition', process: 'Auto', output: 'Creative', interaction: 'AI' }
  },
  {
    id: 'vlpt',
    code: 'VLPT',
    name: 'VLPT',
    youtrustName: '参謀',
    catchCopy: '全体設計で組織を強くする',
    survivalStrategy: '全体最適と実行を両立させる。転職では経営視点での改善が刺さる。AIで標準化しつつ、人の意思で優先度を決める。',
    recommendedCareer: '戦略コンサル・DX推進室・CEO室・経営企画・業務改革・PMO',
    replacementRisk: '低',
    image: '/images/characters/humans/vlpt.png',
    color: 'purple',
    axis: { input: 'Intuition', process: 'Auto', output: 'Creative', interaction: 'Human' }
  }
];
