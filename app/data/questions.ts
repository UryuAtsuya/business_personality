export interface Question {
    id: number;
    text: string;
    type: 'input' | 'process' | 'output' | 'interaction';
    weight: number;
    options: [string, string];
}

export const questions: Question[] = [
    // Axis 1: Input (Theory vs Intuition)
    {
        id: 1,
        text: "Q1. 新しいAIツールが入った。最初にやることは？",
        type: 'input',
        weight: 1,
        options: ["仕様を読み込んでから触る (Theory)", "まず触って挙動を掴む (Intuition)"]
    },
    {
        id: 2,
        text: "Q2. 企業研究の進め方は？",
        type: 'input',
        weight: 1,
        options: ["IR・業界データを整理して仮説を立てる (Theory)", "現場の声や空気感を先に掴みに行く (Intuition)"]
    },
    {
        id: 3,
        text: "Q3. 応募先の選び方は？",
        type: 'input',
        weight: 1,
        options: ["条件・市場性を比較して決める (Theory)", "直感の“合う”感覚で決める (Intuition)"]
    },
    {
        id: 4,
        text: "Q4. AIの出力が正しそうで根拠不明。どうする？",
        type: 'input',
        weight: 1,
        options: ["根拠が出るまで再生成・裏取りを行う (Theory)", "面白ければ採用し現場で磨く (Intuition)"]
    },
    {
        id: 5,
        text: "Q5. 面接前の準備は？",
        type: 'input',
        weight: 1,
        options: ["想定問答をロジックで組み立てる (Theory)", "その場の空気に合わせて話す (Intuition)"]
    },
    {
        id: 6,
        text: "Q6. 新しい業務で詰まった時は？",
        type: 'input',
        weight: 1,
        options: ["資料と成功事例を読み込んで理解する (Theory)", "まず手を動かしながら掴む (Intuition)"]
    },
    {
        id: 7,
        text: "Q7. キャリアの将来性を読むなら？",
        type: 'input',
        weight: 1,
        options: ["統計や市場データを重視する (Theory)", "自分の肌感覚やビジョンを信じる (Intuition)"]
    },
    {
        id: 8,
        text: "Q8. 仕事の改善の糸口は？",
        type: 'input',
        weight: 1,
        options: ["KPIやログを分析して原因を探す (Theory)", "現場の違和感や声から着想する (Intuition)"]
    },
    {
        id: 9,
        text: "Q9. 新プロジェクトの方向性は？",
        type: 'input',
        weight: 1,
        options: ["調査と検証設計で固めてから動く (Theory)", "直感で方向を決めて走りながら修正 (Intuition)"]
    },

    // Axis 2: Process (Manual vs Auto)
    {
        id: 10,
        text: "Q10. 議事録作成。どう回す？",
        type: 'process',
        weight: 1,
        options: ["AI後に自分で徹底修正して仕上げる (Manual)", "任せ切って即共有する (Auto)"]
    },
    {
        id: 11,
        text: "Q11. 進捗報告の作り方は？",
        type: 'process',
        weight: 1,
        options: ["自分で整えて納得の形にする (Manual)", "テンプレと自動生成で素早く出す (Auto)"]
    },
    {
        id: 12,
        text: "Q12. 履歴書・職務経歴書の作成は？",
        type: 'process',
        weight: 1,
        options: ["自分で推敲して質を詰める (Manual)", "AIのドラフトを起点に回す (Auto)"]
    },
    {
        id: 13,
        text: "Q13. タスク管理のやり方は？",
        type: 'process',
        weight: 1,
        options: ["自分で優先度を調整しながら進める (Manual)", "自動リマインドとワークフローに任せる (Auto)"]
    },
    {
        id: 14,
        text: "Q14. 品質担保のスタイルは？",
        type: 'process',
        weight: 1,
        options: ["自分の目で最終チェックする (Manual)", "自動テストやチェックで回す (Auto)"]
    },
    {
        id: 15,
        text: "Q15. 面接日程の調整は？",
        type: 'process',
        weight: 1,
        options: ["丁寧なやり取りで確実に詰める (Manual)", "自動調整ツールで即決する (Auto)"]
    },
    {
        id: 16,
        text: "Q16. 繰り返し業務への向き合い方は？",
        type: 'process',
        weight: 1,
        options: ["手で柔軟に対応し続ける (Manual)", "仕組み化して自動化する (Auto)"]
    },
    {
        id: 17,
        text: "Q17. 学習・研修の取り組みは？",
        type: 'process',
        weight: 1,
        options: ["自分で演習を重ねて身につける (Manual)", "AIの学習計画や要約で効率化 (Auto)"]
    },
    {
        id: 18,
        text: "Q18. チーム運営の進め方は？",
        type: 'process',
        weight: 1,
        options: ["対話と調整で一つずつ前に進める (Manual)", "ダッシュボードや自動レポートで回す (Auto)"]
    },

    // Axis 3: Output (Creative vs Structured)
    {
        id: 19,
        text: "Q19. ブレストで欲しい案は？",
        type: 'output',
        weight: 1,
        options: ["実現性と整合性のある堅実案 (Structured)", "飛躍した意外性のある案 (Creative)"]
    },
    {
        id: 20,
        text: "Q20. 企画書の方向性は？",
        type: 'output',
        weight: 1,
        options: ["目的・課題・施策を整理した構成 (Structured)", "ストーリーで引き込む構成 (Creative)"]
    },
    {
        id: 21,
        text: "Q21. 面接での回答は？",
        type: 'output',
        weight: 1,
        options: ["結論と理由を端的に伝える (Structured)", "印象に残るエピソードで語る (Creative)"]
    },
    {
        id: 22,
        text: "Q22. ポートフォリオの作り方は？",
        type: 'output',
        weight: 1,
        options: ["成果を整理して見やすく並べる (Structured)", "世界観や独自性で魅せる (Creative)"]
    },
    {
        id: 23,
        text: "Q23. 連絡文・メールの書き方は？",
        type: 'output',
        weight: 1,
        options: ["要点を短く正確に書く (Structured)", "温度感や共感を込めて書く (Creative)"]
    },
    {
        id: 24,
        text: "Q24. AIで文章を作るなら？",
        type: 'output',
        weight: 1,
        options: ["精度と整合性を最優先にする (Structured)", "独自性と勢いを優先する (Creative)"]
    },
    {
        id: 25,
        text: "Q25. 新規事業の初期案は？",
        type: 'output',
        weight: 1,
        options: ["現実的に回せる計画を描く (Structured)", "尖ったコンセプトで突破する (Creative)"]
    },
    {
        id: 26,
        text: "Q26. 自己PRの見せ方は？",
        type: 'output',
        weight: 1,
        options: ["実績と数字を箇条書きで見せる (Structured)", "ストーリーで心を動かす (Creative)"]
    },
    {
        id: 27,
        text: "Q27. レポートの結論は？",
        type: 'output',
        weight: 1,
        options: ["整理された結論で外さない (Structured)", "独自の切り口で印象を残す (Creative)"]
    },

    // Axis 4: Interaction (Human vs AI)
    {
        id: 28,
        text: "Q28. チーム連絡をAIが仲介するのは？",
        type: 'interaction',
        weight: 1,
        options: ["効率は理解するが、信頼は対話が必須 (Human)", "ミスが減るならAI経由でOK (AI)"]
    },
    {
        id: 29,
        text: "Q29. チャットボット導入で一番怖いのは？",
        type: 'interaction',
        weight: 1,
        options: ["冷たく見えて心が離れること (Human)", "精度が低く解決が遅れること (AI)"]
    },
    {
        id: 30,
        text: "Q30. 10年後の相棒は？",
        type: 'interaction',
        weight: 1,
        options: ["人間とAIを併用して回す (Human)", "AIエージェントを束ね一人で回す (AI)"]
    },
    {
        id: 31,
        text: "Q31. 面接のやり取りは？",
        type: 'interaction',
        weight: 1,
        options: ["直接の対話で信頼を築きたい (Human)", "AI面接や自動スクリーニングでも良い (AI)"]
    },
    {
        id: 32,
        text: "Q32. 相談相手に求めるのは？",
        type: 'interaction',
        weight: 1,
        options: ["経験者の人間から学びたい (Human)", "AIから素早く答えが欲しい (AI)"]
    },
    {
        id: 33,
        text: "Q33. フィードバックの受け方は？",
        type: 'interaction',
        weight: 1,
        options: ["人の言葉と表情を重視する (Human)", "AIの分析で客観性を重視する (AI)"]
    },
    {
        id: 34,
        text: "Q34. 仕事の意思決定は？",
        type: 'interaction',
        weight: 1,
        options: ["関係者との合意を最優先にする (Human)", "AIの最適解を優先する (AI)"]
    },
    {
        id: 35,
        text: "Q35. 顧客対応で重視するのは？",
        type: 'interaction',
        weight: 1,
        options: ["人の温度感と信頼を守る (Human)", "AIで速度と正確性を取る (AI)"]
    },
    {
        id: 36,
        text: "Q36. 日々のコミュニケーションは？",
        type: 'interaction',
        weight: 1,
        options: ["直接会話で関係を深めたい (Human)", "AI要約や代行で効率を上げたい (AI)"]
    }
];
