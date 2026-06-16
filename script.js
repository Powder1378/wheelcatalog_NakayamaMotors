 const wheels = [
  // ===== Sports : Vanilla =====
  { name: "インフェルノ", category: "Sports", image: "./images/SPT_V_1.png", type: "Vanilla", chrome: true },
  { name: "ディープファイブ", category: "Sports", image: "./images/SPT_V_2.png", type: "Vanilla", chrome: true },
  { name: "ロズスピード Mr.V", category: "Sports", image: "./images/SPT_V_3.png", type: "Vanilla", chrome: true },
  { name: "ダイヤモンドカット", category: "Sports", image: "./images/SPT_V_4.png", type: "Vanilla", chrome: true },
  { name: "クロノ", category: "Sports", image: "./images/SPT_V_5.png", type: "Vanilla", chrome: true },
  { name: "フェローチRR", category: "Sports", image: "./images/SPT_V_6.png", type: "Vanilla", chrome: true },
  { name: "フィフティナイン", category: "Sports", image: "./images/SPT_V_7.png", type: "Vanilla", chrome: true },
  { name: "マーシー", category: "Sports", image: "./images/SPT_V_8.png", type: "Vanilla", chrome: true },
  { name: "シンセティックZ", category: "Sports", image: "./images/SPT_V_9.png", type: "Vanilla", chrome: true },
  { name: "オーガニック・タイプゼロ", category: "Sports", image: "./images/SPT_V_10.png", type: "Vanilla", chrome: true },
  { name: "エンドーv.1", category: "Sports", image: "./images/SPT_V_11.png", type: "Vanilla", chrome: true },
  { name: "GTワン", category: "Sports", image: "./images/SPT_V_12.png", type: "Vanilla", chrome: true },
  { name: "デューバー7", category: "Sports", image: "./images/SPT_V_13.png", type: "Vanilla", chrome: true },
  { name: "ウザール", category: "Sports", image: "./images/SPT_V_14.png", type: "Vanilla", chrome: true },
  { name: "グラウンドライド", category: "Sports", image: "./images/SPT_V_15.png", type: "Vanilla", chrome: true },
  { name: "Sレーサー", category: "Sports", image: "./images/SPT_V_16.png", type: "Vanilla", chrome: true },
  { name: "ベナム", category: "Sports", image: "./images/SPT_V_17.png", type: "Vanilla", chrome: true },
  { name: "コスモ", category: "Sports", image: "./images/SPT_V_18.png", type: "Vanilla", chrome: true },
  { name: "ダッシュVIP", category: "Sports", image: "./images/SPT_V_19.png", type: "Vanilla", chrome: true },
  { name: "アイスキッド", category: "Sports", image: "./images/SPT_V_20.png", type: "Vanilla", chrome: true },
  { name: "ラウフェルド", category: "Sports", image: "./images/SPT_V_21.png", type: "Vanilla", chrome: true },
  { name: "湾岸マスター", category: "Sports", image: "./images/SPT_V_22.png", type: "Vanilla", chrome: true },
  { name: "スーパーファイブ", category: "Sports", image: "./images/SPT_V_23.png", type: "Vanilla", chrome: true },
  { name: "エンドーv2", category: "Sports", image: "./images/SPT_V_24.png", type: "Vanilla", chrome: true },
  { name: "スプリット・シックス", category: "Sports", image: "./images/SPT_V_25.png", type: "Vanilla", chrome: true },

  // ===== Sports : MOD =====
  { name: "en01", category: "Sports", image: "./images/SPT_M_51.png", type: "MOD", chrome: false, color: true },
  { name: "mgp", category: "Sports", image: "./images/SPT_M_52.png", type: "MOD", chrome: false, color: false },
  { name: "re30", category: "Sports", image: "./images/SPT_M_53.png", type: "MOD", chrome: false, color: true },
  { name: "agt1", category: "Sports", image: "./images/SPT_M_54.png", type: "MOD", chrome: false, color: true },
  { name: "agt2", category: "Sports", image: "./images/SPT_M_55.png", type: "MOD", chrome: false, color: false },
  { name: "cr01", category: "Sports", image: "./images/SPT_M_56.png", type: "MOD", chrome: false, color: true },
  { name: "rpf1", category: "Sports", image: "./images/SPT_M_57.png", type: "MOD", chrome: false, color: true },
  { name: "rp03", category: "Sports", image: "./images/SPT_M_58.png", type: "MOD", chrome: false, color: true },
  { name: "te37", category: "Sports", image: "./images/SPT_M_59.png", type: "MOD", chrome: false, color: true },
  { name: "te37v", category: "Sports", image: "./images/SPT_M_60.png", type: "MOD", chrome: false, color: true },
  { name: "sa60", category: "Sports", image: "./images/SPT_M_61.png", type: "MOD", chrome: false, color: false },
  { name: "bt3", category: "Sports", image: "./images/SPT_M_62.png", type: "MOD", chrome: false, color: false },
  { name: "rg2", category: "Sports", image: "./images/SPT_M_63.png", type: "MOD", chrome: false, color: true },
  { name: "p45r", category: "Sports", image: "./images/SPT_M_64.png", type: "MOD", chrome: false, color: true },
  { name: "mf10", category: "Sports", image: "./images/SPT_M_65.png", type: "MOD", chrome: false, color: false },
  { name: "sw388", category: "Sports", image: "./images/SPT_M_66.png", type: "MOD", chrome: false, color: false },
  { name: "5gn", category: "Sports", image: "./images/SPT_M_67.png", type: "MOD", chrome: false, color: true },
  { name: "57c6", category: "Sports", image: "./images/SPT_M_68.png", type: "MOD", chrome: false, color: true },
  { name: "rs050rr", category: "Sports", image: "./images/SPT_M_69.png", type: "MOD", chrome: false, color: true },
  { name: "ms1", category: "Sports", image: "./images/SPT_M_70.png", type: "MOD", chrome: false, color: true },
  { name: "wrs", category: "Sports", image: "./images/SPT_M_71.png", type: "MOD", chrome: false, color: true },
  { name: "ms01", category: "Sports", image: "./images/SPT_M_72.png", type: "MOD", chrome: false, color: true },
  { name: "ce28", category: "Sports", image: "./images/SPT_M_73.png", type: "MOD", chrome: false, color: true },
  { name: "e40", category: "Sports", image: "./images/SPT_M_74.png", type: "MOD", chrome: false, color: true },
  { name: "ml1", category: "Sports", image: "./images/SPT_M_75.png", type: "MOD", chrome: false, color: true },
  { name: "mk2r", category: "Sports", image: "./images/SPT_M_76.png", type: "MOD", chrome: false, color: true },
  { name: "blm", category: "Sports", image: "./images/SPT_M_77.png", type: "MOD", chrome: false, color: true },
  { name: "lg4", category: "Sports", image: "./images/SPT_M_78.png", type: "MOD", chrome: false, color: false },
  { name: "lg1", category: "Sports", image: "./images/SPT_M_79.png", type: "MOD", chrome: false, color: false },
  { name: "gtc", category: "Sports", image: "./images/SPT_M_80.png", type: "MOD", chrome: false, color: true },
  { name: "dh", category: "Sports", image: "./images/SPT_M_81.png", type: "MOD", chrome: false, color: true },
  { name: "jps", category: "Sports", image: "./images/SPT_M_82.png", type: "MOD", chrome: false, color: false },
  { name: "svk", category: "Sports", image: "./images/SPT_M_83.png", type: "MOD", chrome: false, color: false },
  { name: "sv", category: "Sports", image: "./images/SPT_M_84.png", type: "MOD", chrome: false, color: false },
  { name: "037", category: "Sports", image: "./images/SPT_M_85.png", type: "MOD", chrome: false, color: false },
  { name: "mr", category: "Sports", image: "./images/SPT_M_86.png", type: "MOD", chrome: false, color: true },
  { name: "vskf", category: "Sports", image: "./images/SPT_M_87.png", type: "MOD", chrome: false, color: true },
  { name: "vsxx", category: "Sports", image: "./images/SPT_M_88.png", type: "MOD", chrome: false, color: true },
  { name: "cst", category: "Sports", image: "./images/SPT_M_89.png", type: "MOD", chrome: false, color: true },
  { name: "fe", category: "Sports", image: "./images/SPT_M_90.png", type: "MOD", chrome: false, color: true },
  { name: "sfm", category: "Sports", image: "./images/SPT_M_91.png", type: "MOD", chrome: false, color: true },
  { name: "sfm2", category: "Sports", image: "./images/SPT_M_92.png", type: "MOD", chrome: false, color: true },
  { name: "sss", category: "Sports", image: "./images/SPT_M_93.png", type: "MOD", chrome: false, color: true },
  { name: "sps3", category: "Sports", image: "./images/SPT_M_94.png", type: "MOD", chrome: false, color: true },
  { name: "eav", category: "Sports", image: "./images/SPT_M_95.png", type: "MOD", chrome: false, color: true },
  { name: "bp1", category: "Sports", image: "./images/SPT_M_96.png", type: "MOD", chrome: false, color: true },
  { name: "tsl", category: "Sports", image: "./images/SPT_M_97.png", type: "MOD", chrome: false, color: false },
  { name: "mle", category: "Sports", image: "./images/SPT_M_98.png", type: "MOD", chrome: false, color: false },
  { name: "ozr", category: "Sports", image: "./images/SPT_M_99.png", type: "MOD", chrome: false, color: false },
  { name: "we1", category: "Sports", image: "./images/SPT_M_100.png", type: "MOD", chrome: false, color: false },
  { name: "dyc", category: "Sports", image: "./images/SPT_M_101.png", type: "MOD", chrome: false, color: true },
  { name: "fm1", category: "Sports", image: "./images/SPT_M_102.png", type: "MOD", chrome: false, color: false },
  { name: "scc", category: "Sports", image: "./images/SPT_M_103.png", type: "MOD", chrome: false, color: true },
  { name: "bp8", category: "Sports", image: "./images/SPT_M_104.png", type: "MOD", chrome: false, color: false },
  { name: "wkb", category: "Sports", image: "./images/SPT_M_105.png", type: "MOD", chrome: false, color: false },
  { name: "ete1", category: "Sports", image: "./images/SPT_M_106.png", type: "MOD", chrome: false, color: false },
  { name: "brs", category: "Sports", image: "./images/SPT_M_107.png", type: "MOD", chrome: false, color: true },
  { name: "gx1", category: "Sports", image: "./images/SPT_M_108.png", type: "MOD", chrome: false, color: true },
  { name: "est", category: "Sports", image: "./images/SPT_M_109.png", type: "MOD", chrome: false, color: true },
  { name: "rct4", category: "Sports", image: "./images/SPT_M_110.png", type: "MOD", chrome: false, color: true },
  { name: "cr9", category: "Sports", image: "./images/SPT_M_111.png", type: "MOD", chrome: false, color: true },
  { name: "gtc1", category: "Sports", image: "./images/SPT_M_112.png", type: "MOD", chrome: false, color: false },
  { name: "h06", category: "Sports", image: "./images/SPT_M_113.png", type: "MOD", chrome: false, color: true },


  // SUV
    // ===== SUV : Vanilla =====
  { name: "VIP", category: "SUV", image: "./images/SUV_V_1.png", type: "Vanilla", chrome: true },
  { name: "ベネファクター", category: "SUV", image: "./images/SUV_V_2.png", type: "Vanilla", chrome: true },
  { name: "コスモ", category: "SUV", image: "./images/SUV_V_3.png", type: "Vanilla", chrome: true },
  { name: "ビップ", category: "SUV", image: "./images/SUV_V_4.png", type: "Vanilla", chrome: true },
  { name: "ロイヤル・シックス", category: "SUV", image: "./images/SUV_V_5.png", type: "Vanilla", chrome: true },
  { name: "ファゴーム", category: "SUV", image: "./images/SUV_V_6.png", type: "Vanilla", chrome: true },
  { name: "デラックス", category: "SUV", image: "./images/SUV_V_7.png", type: "Vanilla", chrome: true },
  { name: "アイスド・アウト", category: "SUV", image: "./images/SUV_V_8.png", type: "Vanilla", chrome: true },
  { name: "コンシェンティ", category: "SUV", image: "./images/SUV_V_9.png", type: "Vanilla", chrome: true },
  { name: "ロズスピード・テン", category: "SUV", image: "./images/SUV_V_10.png", type: "Vanilla", chrome: true },
  { name: "スーパーノヴァ", category: "SUV", image: "./images/SUV_V_11.png", type: "Vanilla", chrome: true },
  { name: "オベイRS", category: "SUV", image: "./images/SUV_V_12.png", type: "Vanilla", chrome: true },
  { name: "ロズスピード・ボーラー", category: "SUV", image: "./images/SUV_V_13.png", type: "Vanilla", chrome: true },
  { name: "エクストラバガンゾ", category: "SUV", image: "./images/SUV_V_14.png", type: "Vanilla", chrome: true },
  { name: "スプリット・シックス", category: "SUV", image: "./images/SUV_V_15.png", type: "Vanilla", chrome: true },
  { name: "エンパワード", category: "SUV", image: "./images/SUV_V_16.png", type: "Vanilla", chrome: true },
  { name: "サンライズ", category: "SUV", image: "./images/SUV_V_17.png", type: "Vanilla", chrome: true },
  { name: "ダッシュVIP", category: "SUV", image: "./images/SUV_V_18.png", type: "Vanilla", chrome: true },
  { name: "カッター", category: "SUV", image: "./images/SUV_V_19.png", type: "Vanilla", chrome: true },

  // ===== Muscle : Vanilla =====
  { name: "クラシック・ファイブ", category: "Muscle", image: "./images/MUS_V_1.png", type: "Vanilla", chrome: true },
  { name: "デュークス", category: "Muscle", image: "./images/MUS_V_2.png", type: "Vanilla", chrome: true },
  { name: "マッスル・フリーク", category: "Muscle", image: "./images/MUS_V_3.png", type: "Vanilla", chrome: true },
  { name: "クラッカ", category: "Muscle", image: "./images/MUS_V_4.png", type: "Vanilla", chrome: true },
  { name: "アズリアル", category: "Muscle", image: "./images/MUS_V_5.png", type: "Vanilla", chrome: true },
  { name: "メカ", category: "Muscle", image: "./images/MUS_V_6.png", type: "Vanilla", chrome: true },
  { name: "ブラック・トップ", category: "Muscle", image: "./images/MUS_V_7.png", type: "Vanilla", chrome: true },
  { name: "ドラッグSPL", category: "Muscle", image: "./images/MUS_V_8.png", type: "Vanilla", chrome: true },
  { name: "リボルバー", category: "Muscle", image: "./images/MUS_V_9.png", type: "Vanilla", chrome: true },
  { name: "クラシック・ロッド", category: "Muscle", image: "./images/MUS_V_10.png", type: "Vanilla", chrome: true },
  { name: "フェアリー", category: "Muscle", image: "./images/MUS_V_11.png", type: "Vanilla", chrome: true },
  { name: "スプーナー", category: "Muscle", image: "./images/MUS_V_12.png", type: "Vanilla", chrome: true },
  { name: "ファイブスター", category: "Muscle", image: "./images/MUS_V_13.png", type: "Vanilla", chrome: true },
  { name: "オールドスクール", category: "Muscle", image: "./images/MUS_V_14.png", type: "Vanilla", chrome: true },
  { name: "エル・ヘフェ", category: "Muscle", image: "./images/MUS_V_15.png", type: "Vanilla", chrome: true },
  { name: "ドッドマン", category: "Muscle", image: "./images/MUS_V_16.png", type: "Vanilla", chrome: true },
  { name: "シックス・ガン", category: "Muscle", image: "./images/MUS_V_17.png", type: "Vanilla", chrome: true },
  { name: "マーセナリー", category: "Muscle", image: "./images/MUS_V_18.png", type: "Vanilla", chrome: true },

  // ===== Offroad : Vanilla =====
  { name: "レイダー", category: "Offroad", image: "./images/OFF_V_1.png", type: "Vanilla", chrome: true },
  { name: "マッドスリンガー", category: "Offroad", image: "./images/OFF_V_2.png", type: "Vanilla", chrome: true },
  { name: "ネヴィス", category: "Offroad", image: "./images/OFF_V_3.png", type: "Vanilla", chrome: true },
  { name: "ケアンゴーム", category: "Offroad", image: "./images/OFF_V_4.png", type: "Vanilla", chrome: true },
  { name: "アマゾン", category: "Offroad", image: "./images/OFF_V_5.png", type: "Vanilla", chrome: true },
  { name: "チャレンジャー", category: "Offroad", image: "./images/OFF_V_6.png", type: "Vanilla", chrome: true },
  { name: "デューン・バッシャー", category: "Offroad", image: "./images/OFF_V_7.png", type: "Vanilla", chrome: true },
  { name: "ファイブスター", category: "Offroad", image: "./images/OFF_V_8.png", type: "Vanilla", chrome: true },
  { name: "ロッククロウラー", category: "Offroad", image: "./images/OFF_V_9.png", type: "Vanilla", chrome: true },
  { name: "ミルスペック・スティーリー", category: "Offroad", image: "./images/OFF_V_10.png", type: "Vanilla", chrome: true },
  { name: "レトロ・スティーリー", category: "Offroad", image: "./images/OFF_V_11.png", type: "Vanilla", chrome: true },
  { name: "耐久スティーリー", category: "Offroad", image: "./images/OFF_V_12.png", type: "Vanilla", chrome: true },
  { name: "凹型スティーリー", category: "Offroad", image: "./images/OFF_V_13.png", type: "Vanilla", chrome: true },
  { name: "警察仕様スティーリー", category: "Offroad", image: "./images/OFF_V_14.png", type: "Vanilla", chrome: true },
  { name: "軽量スティーリー", category: "Offroad", image: "./images/OFF_V_15.png", type: "Vanilla", chrome: true },
  { name: "デュークス", category: "Offroad", image: "./images/OFF_V_16.png", type: "Vanilla", chrome: true },
  { name: "アバランチ", category: "Offroad", image: "./images/OFF_V_17.png", type: "Vanilla", chrome: true },
  { name: "マウンテンマン", category: "Offroad", image: "./images/OFF_V_18.png", type: "Vanilla", chrome: true },
  { name: "リッジクライマー", category: "Offroad", image: "./images/OFF_V_19.png", type: "Vanilla", chrome: true },
  { name: "凸形5", category: "Offroad", image: "./images/OFF_V_20.png", type: "Vanilla", chrome: true },
  { name: "フラット6", category: "Offroad", image: "./images/OFF_V_21.png", type: "Vanilla", chrome: true },
  { name: "全地形モンスター", category: "Offroad", image: "./images/OFF_V_22.png", type: "Vanilla", chrome: true },
  { name: "ドラッグSPL", category: "Offroad", image: "./images/OFF_V_23.png", type: "Vanilla", chrome: true },
  { name: "凹型ラリーマスター", category: "Offroad", image: "./images/OFF_V_24.png", type: "Vanilla", chrome: true },
  { name: "凹凸スノーフレーク", category: "Offroad", image: "./images/OFF_V_25.png", type: "Vanilla", chrome: true },

  // ===== Offroad : MOD =====
  { name: "AF_FROST_01", category: "Offroad", image: "./images/OFF_M_36.png", type: "MOD", chrome: true },
  { name: "AF_FROST_02", category: "Offroad", image: "./images/OFF_M_37.png", type: "MOD", chrome: true },
  { name: "AF_FROST_03", category: "Offroad", image: "./images/OFF_M_38.png", type: "MOD", chrome: true },
  { name: "AF_FROST_04", category: "Offroad", image: "./images/OFF_M_39.png", type: "MOD", chrome: true },
  { name: "AF_FROST_05", category: "Offroad", image: "./images/OFF_M_40.png", type: "MOD", chrome: true },
  { name: "AF_HORNET_01", category: "Offroad", image: "./images/OFF_M_41.png", type: "MOD", chrome: true },
  { name: "AF_HORNET_02", category: "Offroad", image: "./images/OFF_M_42.png", type: "MOD", chrome: true },
  { name: "AF_HORNET_03", category: "Offroad", image: "./images/OFF_M_43.png", type: "MOD", chrome: true },
  { name: "AF_HORNET_04", category: "Offroad", image: "./images/OFF_M_44.png", type: "MOD", chrome: true },
  { name: "AF_HORNET_05", category: "Offroad", image: "./images/OFF_M_45.png", type: "MOD", chrome: true },
  { name: "AF_SWANG_01", category: "Offroad", image: "./images/OFF_M_46.png", type: "MOD", chrome: true },
  { name: "AF_SWANG_02", category: "Offroad", image: "./images/OFF_M_47.png", type: "MOD", chrome: true },
  { name: "AF_SWANG_03", category: "Offroad", image: "./images/OFF_M_48.png", type: "MOD", chrome: true },
  { name: "AF_SWANG_04", category: "Offroad", image: "./images/OFF_M_49.png", type: "MOD", chrome: true },
  { name: "AF_SWANG_05", category: "Offroad", image: "./images/OFF_M_50.png", type: "MOD", chrome: true },



   // ===== Lowrider : Vanilla =====
  { name: "フレア", category: "Lowrider", image: "./images/LOW_V_1.png", type: "Vanilla", chrome: true },
  { name: "ワイヤード", category: "Lowrider", image: "./images/LOW_V_2.png", type: "Vanilla", chrome: true },
  { name: "トリプル・ゴールド", category: "Lowrider", image: "./images/LOW_V_3.png", type: "Vanilla", chrome: true },
  { name: "ビッグ・ワーム", category: "Lowrider", image: "./images/LOW_V_4.png", type: "Vanilla", chrome: true },
  { name: "セブン・ファイブス", category: "Lowrider", image: "./images/LOW_V_5.png", type: "Vanilla", chrome: true },
  { name: "スプリットシックス", category: "Lowrider", image: "./images/LOW_V_6.png", type: "Vanilla", chrome: true },
  { name: "フレッシュ・メッシュ", category: "Lowrider", image: "./images/LOW_V_7.png", type: "Vanilla", chrome: true },
  { name: "レッド・スレッド", category: "Lowrider", image: "./images/LOW_V_8.png", type: "Vanilla", chrome: true },
  { name: "ダーバイン", category: "Lowrider", image: "./images/LOW_V_9.png", type: "Vanilla", chrome: true },
  { name: "スーパー・フィン", category: "Lowrider", image: "./images/LOW_V_10.png", type: "Vanilla", chrome: true },
  { name: "クラシック・ロッド", category: "Lowrider", image: "./images/LOW_V_11.png", type: "Vanilla", chrome: true },
  { name: "ダラー", category: "Lowrider", image: "./images/LOW_V_12.png", type: "Vanilla", chrome: true },
  { name: "デュークス", category: "Lowrider", image: "./images/LOW_V_13.png", type: "Vanilla", chrome: true },
  { name: "ロウ・ファイブ", category: "Lowrider", image: "./images/LOW_V_14.png", type: "Vanilla", chrome: true },
  { name: "グーチ", category: "Lowrider", image: "./images/LOW_V_15.png", type: "Vanilla", chrome: true },

  // ===== Benny's : Vanilla =====
  { name: "OGハンネット", category: "Benny's", image: "./images/BNS_V_1.png", type: "Vanilla", chrome: true },
  { name: "ノックオフ", category: "Benny's", image: "./images/BNS_V_2.png", type: "Vanilla", chrome: true },
  { name: "スポークアウト", category: "Benny's", image: "./images/BNS_V_3.png", type: "Vanilla", chrome: true },
  { name: "ビンテージワイヤー", category: "Benny's", image: "./images/BNS_V_4.png", type: "Vanilla", chrome: true },
  { name: "スムージー", category: "Benny's", image: "./images/BNS_V_5.png", type: "Vanilla", chrome: true },
  { name: "ロッド・ミー・アップ", category: "Benny's", image: "./images/BNS_V_6.png", type: "Vanilla", chrome: true },
  { name: "クリーン", category: "Benny's", image: "./images/BNS_V_7.png", type: "Vanilla", chrome: false },
  { name: "ロッタ・クローム", category: "Benny's", image: "./images/BNS_V_8.png", type: "Vanilla", chrome: false },
  { name: "スピンドル", category: "Benny's", image: "./images/BNS_V_9.png", type: "Vanilla", chrome: false },
  { name: "バイキング", category: "Benny's", image: "./images/BNS_V_10.png", type: "Vanilla", chrome: false },
  { name: "トリプル・スポーク", category: "Benny's", image: "./images/BNS_V_11.png", type: "Vanilla", chrome: false },
  { name: "ファローフ", category: "Benny's", image: "./images/BNS_V_12.png", type: "Vanilla", chrome: false },
  { name: "タイガースタイル", category: "Benny's", image: "./images/BNS_V_13.png", type: "Vanilla", chrome: false },
  { name: "スリー・ウィーリン", category: "Benny's", image: "./images/BNS_V_14.png", type: "Vanilla", chrome: false },
  { name: "ビッグ・バー", category: "Benny's", image: "./images/BNS_V_15.png", type: "Vanilla", chrome: false },
  { name: "バイオハザード", category: "Benny's", image: "./images/BNS_V_16.png", type: "Vanilla", chrome: false },
  { name: "ウェーブ", category: "Benny's", image: "./images/BNS_V_17.png", type: "Vanilla", chrome: false },
  { name: "リック・リック", category: "Benny's", image: "./images/BNS_V_18.png", type: "Vanilla", chrome: false },
  { name: "スパイラライザー", category: "Benny's", image: "./images/BNS_V_19.png", type: "Vanilla", chrome: false },
  { name: "ヒプノティクス", category: "Benny's", image: "./images/BNS_V_20.png", type: "Vanilla", chrome: false },
  { name: "サイコデリック", category: "Benny's", image: "./images/BNS_V_21.png", type: "Vanilla", chrome: false },
  { name: "ハーフカット", category: "Benny's", image: "./images/BNS_V_22.png", type: "Vanilla", chrome: false },
  { name: "スーパーエレクトリック", category: "Benny's", image: "./images/BNS_V_23.png", type: "Vanilla", chrome: false },

  // ===== Bespoke : Vanilla =====
  { name: "クローム OG ハンネット", category: "Bespoke", image: "./images/BSP_V_1.png", type: "Vanilla", chrome: false },
  { name: "ゴールド OG ハンネット", category: "Bespoke", image: "./images/BSP_V_2.png", type: "Vanilla", chrome: false },
  { name: "クローム ワイヤーズ", category: "Bespoke", image: "./images/BSP_V_3.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ワイヤーズ", category: "Bespoke", image: "./images/BSP_V_4.png", type: "Vanilla", chrome: false },
  { name: "クローム スポーク アウト", category: "Bespoke", image: "./images/BSP_V_5.png", type: "Vanilla", chrome: false },
  { name: "ゴールド スポーク アウト", category: "Bespoke", image: "./images/BSP_V_6.png", type: "Vanilla", chrome: false },
  { name: "クローム ノックオフ", category: "Bespoke", image: "./images/BSP_V_7.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ノックオフ", category: "Bespoke", image: "./images/BSP_V_8.png", type: "Vanilla", chrome: false },
  { name: "クローム ビッガー ワーム", category: "Bespoke", image: "./images/BSP_V_9.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ビッガー ワーム", category: "Bespoke", image: "./images/BSP_V_10.png", type: "Vanilla", chrome: false },
  { name: "クローム ビンテージ ワイヤー", category: "Bespoke", image: "./images/BSP_V_11.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ビンテージ ワイヤー", category: "Bespoke", image: "./images/BSP_V_12.png", type: "Vanilla", chrome: false },
  { name: "クローム クラシック ワイヤー", category: "Bespoke", image: "./images/BSP_V_13.png", type: "Vanilla", chrome: false },
  { name: "ゴールド クラシック ワイヤー", category: "Bespoke", image: "./images/BSP_V_14.png", type: "Vanilla", chrome: false },
  { name: "クローム スムージー", category: "Bespoke", image: "./images/BSP_V_15.png", type: "Vanilla", chrome: false },
  { name: "ゴールド スムージー", category: "Bespoke", image: "./images/BSP_V_16.png", type: "Vanilla", chrome: false },
  { name: "クローム クラシック ロッド", category: "Bespoke", image: "./images/BSP_V_17.png", type: "Vanilla", chrome: false },
  { name: "ゴールド クラシック ロッド", category: "Bespoke", image: "./images/BSP_V_18.png", type: "Vanilla", chrome: false },
  { name: "クローム ダラー", category: "Bespoke", image: "./images/BSP_V_19.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ダラー", category: "Bespoke", image: "./images/BSP_V_20.png", type: "Vanilla", chrome: false },
  { name: "クローム マイティー スター", category: "Bespoke", image: "./images/BSP_V_21.png", type: "Vanilla", chrome: false },
  { name: "ゴールド マイティー スター", category: "Bespoke", image: "./images/BSP_V_22.png", type: "Vanilla", chrome: false },
  { name: "クローム デカダント ディッシュ", category: "Bespoke", image: "./images/BSP_V_23.png", type: "Vanilla", chrome: false },
  { name: "ゴールド デカダント ディッシュ", category: "Bespoke", image: "./images/BSP_V_24.png", type: "Vanilla", chrome: false },
  { name: "クローム レーザー スタイル", category: "Bespoke", image: "./images/BSP_V_25.png", type: "Vanilla", chrome: false },
  { name: "ゴールド レーザー スタイル", category: "Bespoke", image: "./images/BSP_V_26.png", type: "Vanilla", chrome: false },
  { name: "クローム ケルティック ノット", category: "Bespoke", image: "./images/BSP_V_27.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ケルティック ノット", category: "Bespoke", image: "./images/BSP_V_28.png", type: "Vanilla", chrome: false },
  { name: "クローム ウォリアー ディッシュ", category: "Bespoke", image: "./images/BSP_V_29.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ウォリアー ディッシュ", category: "Bespoke", image: "./images/BSP_V_30.png", type: "Vanilla", chrome: false },
  { name: "ゴールド ビッグ ドッグ スポーク", category: "Bespoke", image: "./images/BSP_V_31.png", type: "Vanilla", chrome: false },

  // ===== Track : Vanilla =====
  { name: "ラリー スローバック", category: "Track", image: "./images/RLY_V_1.png", type: "Vanilla", chrome: false },
  { name: "グラブル トラップ", category: "Track", image: "./images/RLY_V_2.png", type: "Vanilla", chrome: false },
  { name: "ストーブ トップ", category: "Track", image: "./images/RLY_V_3.png", type: "Vanilla", chrome: false },
  { name: "ストーブ トップ メッシュ", category: "Track", image: "./images/RLY_V_4.png", type: "Vanilla", chrome: false },
  { name: "レトロ 3ピース", category: "Track", image: "./images/RLY_V_5.png", type: "Vanilla", chrome: false },
  { name: "ラリー モノブロック", category: "Track", image: "./images/RLY_V_6.png", type: "Vanilla", chrome: false },
  { name: "フォージド5", category: "Track", image: "./images/RLY_V_7.png", type: "Vanilla", chrome: false },
  { name: "スプリット スター", category: "Track", image: "./images/RLY_V_8.png", type: "Vanilla", chrome: false },
  { name: "スピード ボーイ", category: "Track", image: "./images/RLY_V_9.png", type: "Vanilla", chrome: false },
  { name: "90sランニング", category: "Track", image: "./images/RLY_V_10.png", type: "Vanilla", chrome: false },
  { name: "トロポス", category: "Track", image: "./images/RLY_V_11.png", type: "Vanilla", chrome: false },
  { name: "エクソス", category: "Track", image: "./images/RLY_V_12.png", type: "Vanilla", chrome: false },
  { name: "ハイタッチ", category: "Track", image: "./images/RLY_V_13.png", type: "Vanilla", chrome: false },
  { name: "スーパー デラックス", category: "Track", image: "./images/RLY_V_14.png", type: "Vanilla", chrome: false },
  { name: "ピュア ビジネス", category: "Track", image: "./images/RLY_V_15.png", type: "Vanilla", chrome: false },
  { name: "ペッパー ポット", category: "Track", image: "./images/RLY_V_16.png", type: "Vanilla", chrome: false },
  { name: "ブラックトップ ブレンダー", category: "Track", image: "./images/RLY_V_17.png", type: "Vanilla", chrome: false },
  { name: "スローバック", category: "Track", image: "./images/RLY_V_18.png", type: "Vanilla", chrome: false },
  { name: "エクスプレスウェイ", category: "Track", image: "./images/RLY_V_19.png", type: "Vanilla", chrome: false },
  { name: "ヒドゥン シックス", category: "Track", image: "./images/RLY_V_20.png", type: "Vanilla", chrome: false },
  { name: "ディンカ SPL", category: "Track", image: "./images/RLY_V_21.png", type: "Vanilla", chrome: false },
  { name: "レトロ ターボファン", category: "Track", image: "./images/RLY_V_22.png", type: "Vanilla", chrome: false },
  { name: "コニカル ターボファン", category: "Track", image: "./images/RLY_V_23.png", type: "Vanilla", chrome: false },
  { name: "アイス ストーム", category: "Track", image: "./images/RLY_V_24.png", type: "Vanilla", chrome: false },
  { name: "スーパー タービン", category: "Track", image: "./images/RLY_V_25.png", type: "Vanilla", chrome: false },
  { name: "モダン メッシュ", category: "Track", image: "./images/RLY_V_26.png", type: "Vanilla", chrome: false },
  { name: "フォージド スター", category: "Track", image: "./images/RLY_V_27.png", type: "Vanilla", chrome: false },
  { name: "スノーフレーク", category: "Track", image: "./images/RLY_V_28.png", type: "Vanilla", chrome: false },
  { name: "ギガ メッシュ", category: "Track", image: "./images/RLY_V_29.png", type: "Vanilla", chrome: false },
  { name: "メッシュ マイスター", category: "Track", image: "./images/RLY_V_30.png", type: "Vanilla", chrome: false },



  // Street
   // ===== Street : Vanilla =====
  { name: "レトロ スティーリー", category: "Street", image: "./images/STR_V_1.png", type: "Vanilla", chrome: false },
  { name: "低スペック スティーリー", category: "Street", image: "./images/STR_V_2.png", type: "Vanilla", chrome: false },
  { name: "凹形 スティーリー", category: "Street", image: "./images/STR_V_3.png", type: "Vanilla", chrome: false },
  { name: "ネビュラ", category: "Street", image: "./images/STR_V_4.png", type: "Vanilla", chrome: false },
  { name: "ホットリング スティーリー", category: "Street", image: "./images/STR_V_5.png", type: "Vanilla", chrome: false },
  { name: "カップ チャンピオン", category: "Street", image: "./images/STR_V_6.png", type: "Vanilla", chrome: false },
  { name: "スタンスト EG カスタム", category: "Street", image: "./images/STR_V_7.png", type: "Vanilla", chrome: false },
  { name: "クラッカ カスタム", category: "Street", image: "./images/STR_V_8.png", type: "Vanilla", chrome: false },
  { name: "デュークス カスタム", category: "Street", image: "./images/STR_V_9.png", type: "Vanilla", chrome: false },
  { name: "エンド v.3 カスタム", category: "Street", image: "./images/STR_V_10.png", type: "Vanilla", chrome: false },
  { name: "V8 キラー", category: "Street", image: "./images/STR_V_11.png", type: "Vanilla", chrome: false },
  { name: "フジワラ カスタム", category: "Street", image: "./images/STR_V_12.png", type: "Vanilla", chrome: false },
  { name: "コスモ μMK2", category: "Street", image: "./images/STR_V_13.png", type: "Vanilla", chrome: false },
  { name: "エアロ スター", category: "Street", image: "./images/STR_V_14.png", type: "Vanilla", chrome: false },
  { name: "ハイプ ファイブ", category: "Street", image: "./images/STR_V_15.png", type: "Vanilla", chrome: false },
  { name: "ラフ ウェルド メガ ディープ", category: "Street", image: "./images/STR_V_16.png", type: "Vanilla", chrome: false },
  { name: "マーシー 凹形", category: "Street", image: "./images/STR_V_17.png", type: "Vanilla", chrome: false },
  { name: "スゴイ 凹形", category: "Street", image: "./images/STR_V_18.png", type: "Vanilla", chrome: false },
  { name: "シンセティック Z 凹形", category: "Street", image: "./images/STR_V_19.png", type: "Vanilla", chrome: false },
  { name: "エンド v.4 ディッシュド", category: "Street", image: "./images/STR_V_20.png", type: "Vanilla", chrome: false },
  { name: "ハイパーフレッシュ", category: "Street", image: "./images/STR_V_21.png", type: "Vanilla", chrome: false },
  { name: "トルファード 凹形", category: "Street", image: "./images/STR_V_22.png", type: "Vanilla", chrome: false },
  { name: "オーガニック タイプ 2", category: "Street", image: "./images/STR_V_23.png", type: "Vanilla", chrome: false },
  { name: "ビッグ マンバ", category: "Street", image: "./images/STR_V_24.png", type: "Vanilla", chrome: false },
  { name: "ディープ フレーク", category: "Street", image: "./images/STR_V_25.png", type: "Vanilla", chrome: false },
  { name: "コスモ μMK3", category: "Street", image: "./images/STR_V_26.png", type: "Vanilla", chrome: false },
  { name: "凹形 レーサー", category: "Street", image: "./images/STR_V_27.png", type: "Vanilla", chrome: false },
  { name: "ディープ フレーク リバース", category: "Street", image: "./images/STR_V_28.png", type: "Vanilla", chrome: false },
  { name: "ワイルド ワゴン", category: "Street", image: "./images/STR_V_29.png", type: "Vanilla", chrome: false },
  { name: "凹形 メガ メッシュ", category: "Street", image: "./images/STR_V_30.png", type: "Vanilla", chrome: false },

  // ===== HighEnd : Vanilla =====
  { name: "シャドウ", category: "HighEnd", image: "./images/HED_V_1.png", type: "Vanilla", chrome: true },
  { name: "ハイファー", category: "HighEnd", image: "./images/HED_V_2.png", type: "Vanilla", chrome: true },
  { name: "ブレイド", category: "HighEnd", image: "./images/HED_V_3.png", type: "Vanilla", chrome: true },
  { name: "ダイヤモンド", category: "HighEnd", image: "./images/HED_V_4.png", type: "Vanilla", chrome: true },
  { name: "スーパー・ジー", category: "HighEnd", image: "./images/HED_V_5.png", type: "Vanilla", chrome: true },
  { name: "クロマティックZ", category: "HighEnd", image: "./images/HED_V_6.png", type: "Vanilla", chrome: true },
  { name: "マーシー チューリップ", category: "HighEnd", image: "./images/HED_V_7.png", type: "Vanilla", chrome: true },
  { name: "オベイ RS", category: "HighEnd", image: "./images/HED_V_8.png", type: "Vanilla", chrome: true },
  { name: "GT クローム", category: "HighEnd", image: "./images/HED_V_9.png", type: "Vanilla", chrome: true },
  { name: "チーター RR", category: "HighEnd", image: "./images/HED_V_10.png", type: "Vanilla", chrome: true },
  { name: "ソーラー", category: "HighEnd", image: "./images/HED_V_11.png", type: "Vanilla", chrome: true },
  { name: "スプリット テン", category: "HighEnd", image: "./images/HED_V_12.png", type: "Vanilla", chrome: true },
  { name: "ダッシュ VIP", category: "HighEnd", image: "./images/HED_V_13.png", type: "Vanilla", chrome: true },
  { name: "ロズスピード テン", category: "HighEnd", image: "./images/HED_V_14.png", type: "Vanilla", chrome: true },
  { name: "カーボン インフェルノ", category: "HighEnd", image: "./images/HED_V_15.png", type: "Vanilla", chrome: true },
  { name: "カーボン シャドウ", category: "HighEnd", image: "./images/HED_V_16.png", type: "Vanilla", chrome: true },
  { name: "カーボニックZ", category: "HighEnd", image: "./images/HED_V_17.png", type: "Vanilla", chrome: true },
  { name: "カーボン ソーラー", category: "HighEnd", image: "./images/HED_V_18.png", type: "Vanilla", chrome: true },
  { name: "チーター カーボンR", category: "HighEnd", image: "./images/HED_V_19.png", type: "Vanilla", chrome: true },
  { name: "カーボン S レーサー", category: "HighEnd", image: "./images/HED_V_20.png", type: "Vanilla", chrome: true },

  // ===== HighEnd : MOD =====
  { name: "AVANT GARDE AGL73_1", category: "HighEnd", image: "./images/HED_M_41.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL73_2", category: "HighEnd", image: "./images/HED_M_42.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL73_3", category: "HighEnd", image: "./images/HED_M_43.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AERO.35_1", category: "HighEnd", image: "./images/HED_M_44.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AERO.35_2", category: "HighEnd", image: "./images/HED_M_45.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AERO.35_3", category: "HighEnd", image: "./images/HED_M_46.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL12_1", category: "HighEnd", image: "./images/HED_M_47.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL12_2", category: "HighEnd", image: "./images/HED_M_48.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL12_3", category: "HighEnd", image: "./images/HED_M_49.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL14_1", category: "HighEnd", image: "./images/HED_M_50.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL14_2", category: "HighEnd", image: "./images/HED_M_51.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL14_3", category: "HighEnd", image: "./images/HED_M_52.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL24_1", category: "HighEnd", image: "./images/HED_M_53.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL24_2", category: "HighEnd", image: "./images/HED_M_54.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL24_3", category: "HighEnd", image: "./images/HED_M_55.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL27_1", category: "HighEnd", image: "./images/HED_M_56.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL27_2", category: "HighEnd", image: "./images/HED_M_57.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL27_3", category: "HighEnd", image: "./images/HED_M_58.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL33_1", category: "HighEnd", image: "./images/HED_M_59.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL33_2", category: "HighEnd", image: "./images/HED_M_60.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL33_3", category: "HighEnd", image: "./images/HED_M_61.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL34_1", category: "HighEnd", image: "./images/HED_M_62.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL34_2", category: "HighEnd", image: "./images/HED_M_63.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL34_3", category: "HighEnd", image: "./images/HED_M_64.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL37_1", category: "HighEnd", image: "./images/HED_M_65.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL37_2", category: "HighEnd", image: "./images/HED_M_66.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL37_3", category: "HighEnd", image: "./images/HED_M_67.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL40_1", category: "HighEnd", image: "./images/HED_M_68.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL40_2", category: "HighEnd", image: "./images/HED_M_69.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL40_3", category: "HighEnd", image: "./images/HED_M_70.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL41_1", category: "HighEnd", image: "./images/HED_M_71.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL41_2", category: "HighEnd", image: "./images/HED_M_72.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL41_3", category: "HighEnd", image: "./images/HED_M_73.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL42_1", category: "HighEnd", image: "./images/HED_M_74.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL42_2", category: "HighEnd", image: "./images/HED_M_75.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL42_3", category: "HighEnd", image: "./images/HED_M_76.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL46_1", category: "HighEnd", image: "./images/HED_M_77.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL46_2", category: "HighEnd", image: "./images/HED_M_78.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL46_3", category: "HighEnd", image: "./images/HED_M_79.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL47_1", category: "HighEnd", image: "./images/HED_M_80.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL47_2", category: "HighEnd", image: "./images/HED_M_81.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL47_3", category: "HighEnd", image: "./images/HED_M_82.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL49_1", category: "HighEnd", image: "./images/HED_M_83.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL49_2", category: "HighEnd", image: "./images/HED_M_84.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL49_3", category: "HighEnd", image: "./images/HED_M_85.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL52_1", category: "HighEnd", image: "./images/HED_M_86.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL52_2", category: "HighEnd", image: "./images/HED_M_87.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL52_3", category: "HighEnd", image: "./images/HED_M_88.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL53_1", category: "HighEnd", image: "./images/HED_M_89.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL53_2", category: "HighEnd", image: "./images/HED_M_90.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL53_3", category: "HighEnd", image: "./images/HED_M_91.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL55_1", category: "HighEnd", image: "./images/HED_M_92.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL55_2", category: "HighEnd", image: "./images/HED_M_93.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL55_3", category: "HighEnd", image: "./images/HED_M_94.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL58_1", category: "HighEnd", image: "./images/HED_M_95.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL58_2", category: "HighEnd", image: "./images/HED_M_96.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL58_3", category: "HighEnd", image: "./images/HED_M_97.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL59_1", category: "HighEnd", image: "./images/HED_M_98.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL59_2", category: "HighEnd", image: "./images/HED_M_99.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL59_3", category: "HighEnd", image: "./images/HED_M_100.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL66_1", category: "HighEnd", image: "./images/HED_M_101.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL66_2", category: "HighEnd", image: "./images/HED_M_102.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL66_3", category: "HighEnd", image: "./images/HED_M_103.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL68_1", category: "HighEnd", image: "./images/HED_M_104.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL68_2", category: "HighEnd", image: "./images/HED_M_105.png", type: "MOD", chrome: true },
  { name: "AVANT GARDE AGL68_3", category: "HighEnd", image: "./images/HED_M_106.png", type: "MOD", chrome: true },
　
  
  

  // Tuner
　{ name: "コスモ", category: "Tuner", image: "./images/TNR_V_1.png", type: "Vanilla", chrome: false },
  { name: "スーパー メッシュ", category: "Tuner", image: "./images/TNR_V_2.png", type: "Vanilla", chrome: false },
  { name: "アウトサイダー", category: "Tuner", image: "./images/TNR_V_3.png", type: "Vanilla", chrome: false },
  { name: "ローラス", category: "Tuner", image: "./images/TNR_V_4.png", type: "Vanilla", chrome: false },
  { name: "ドリフマイスター", category: "Tuner", image: "./images/TNR_V_5.png", type: "Vanilla", chrome: false },
  { name: "スライサー", category: "Tuner", image: "./images/TNR_V_6.png", type: "Vanilla", chrome: false },
  { name: "エル クワトロ", category: "Tuner", image: "./images/TNR_V_7.png", type: "Vanilla", chrome: false },
  { name: "ダブド", category: "Tuner", image: "./images/TNR_V_8.png", type: "Vanilla", chrome: false },
  { name: "ファイブ スター", category: "Tuner", image: "./images/TNR_V_9.png", type: "Vanilla", chrome: false },
  { name: "スライドウェイズ", category: "Tuner", image: "./images/TNR_V_10.png", type: "Vanilla", chrome: false },
  { name: "アペックス", category: "Tuner", image: "./images/TNR_V_11.png", type: "Vanilla", chrome: false },
  { name: "スタンスド EG", category: "Tuner", image: "./images/TNR_V_12.png", type: "Vanilla", chrome: false },
  { name: "カウンターステア", category: "Tuner", image: "./images/TNR_V_13.png", type: "Vanilla", chrome: false },
  { name: "エンド v.1", category: "Tuner", image: "./images/TNR_V_14.png", type: "Vanilla", chrome: false },
  { name: "エンド v.2ディッシュ", category: "Tuner", image: "./images/TNR_V_15.png", type: "Vanilla", chrome: false },
  { name: "グルッペ Z", category: "Tuner", image: "./images/TNR_V_16.png", type: "Vanilla", chrome: false },
  { name: "チョクドリ", category: "Tuner", image: "./images/TNR_V_17.png", type: "Vanilla", chrome: false },
  { name: "シケイン", category: "Tuner", image: "./images/TNR_V_18.png", type: "Vanilla", chrome: false },
  { name: "サイソク", category: "Tuner", image: "./images/TNR_V_19.png", type: "Vanilla", chrome: false },
  { name: "ディッシュド エイト", category: "Tuner", image: "./images/TNR_V_20.png", type: "Vanilla", chrome: false },
  { name: "フジワラ", category: "Tuner", image: "./images/TNR_V_21.png", type: "Vanilla", chrome: false },
  { name: "ゾクシャ", category: "Tuner", image: "./images/TNR_V_22.png", type: "Vanilla", chrome: false },
  { name: "バトル VIII", category: "Tuner", image: "./images/TNR_V_23.png", type: "Vanilla", chrome: false },
  { name: "ラリー マスター", category: "Tuner", image: "./images/TNR_V_24.png", type: "Vanilla", chrome: false },


  // Bike
  { name: "スピードウェイ", category: "Bike", image: "./images/BKE_V_1.png", type: "Vanilla", chrome: true },
  { name: "ストリート スペシャル", category: "Bike", image: "./images/BKE_V_2.png", type: "Vanilla", chrome: true },
  { name: "レーサー", category: "Bike", image: "./images/BKE_V_3.png", type: "Vanilla", chrome: true },
  { name: "トラック スター", category: "Bike", image: "./images/BKE_V_4.png", type: "Vanilla", chrome: true },
  { name: "オーバーロード", category: "Bike", image: "./images/BKE_V_5.png", type: "Vanilla", chrome: true },
  { name: "トライデント", category: "Bike", image: "./images/BKE_V_6.png", type: "Vanilla", chrome: true },
  { name: "トリプル スレット", category: "Bike", image: "./images/BKE_V_7.png", type: "Vanilla", chrome: true },
  { name: "スティレット", category: "Bike", image: "./images/BKE_V_8.png", type: "Vanilla", chrome: true },
  { name: "ワイヤーズ", category: "Bike", image: "./images/BKE_V_9.png", type: "Vanilla", chrome: true },
  { name: "ボバー", category: "Bike", image: "./images/BKE_V_10.png", type: "Vanilla", chrome: true },
  { name: "ソリダス", category: "Bike", image: "./images/BKE_V_11.png", type: "Vanilla", chrome: true },
  { name: "アイス シールド", category: "Bike", image: "./images/BKE_V_12.png", type: "Vanilla", chrome: true },
  { name: "ループス", category: "Bike", image: "./images/BKE_V_13.png", type: "Vanilla", chrome: true },
  { name: "ロンパー レーシング", category: "Bike", image: "./images/BKE_V_14.png", type: "Vanilla", chrome: true },
  { name: "ワープ ドライブ", category: "Bike", image: "./images/BKE_V_15.png", type: "Vanilla", chrome: true },
  { name: "スノーフレーク", category: "Bike", image: "./images/BKE_V_16.png", type: "Vanilla", chrome: true },
  { name: "ホーリー スポーク", category: "Bike", image: "./images/BKE_V_17.png", type: "Vanilla", chrome: true },
  { name: "オールド スクール トリプル", category: "Bike", image: "./images/BKE_V_18.png", type: "Vanilla", chrome: true },
  { name: "フューチュラ", category: "Bike", image: "./images/BKE_V_19.png", type: "Vanilla", chrome: true },
  { name: "クォーター マイル キング", category: "Bike", image: "./images/BKE_V_20.png", type: "Vanilla", chrome: true },
  { name: "カートホイール", category: "Bike", image: "./images/BKE_V_21.png", type: "Vanilla", chrome: true },
  { name: "ダブル ファイブ", category: "Bike", image: "./images/BKE_V_22.png", type: "Vanilla", chrome: true },
  { name: "シュリケン", category: "Bike", image: "./images/BKE_V_23.png", type: "Vanilla", chrome: true },
  { name: "シンプル シックス", category: "Bike", image: "./images/BKE_V_24.png", type: "Vanilla", chrome: true },
  { name: "ケルティック", category: "Bike", image: "./images/BKE_V_25.png", type: "Vanilla", chrome: true },
  { name: "レイザー", category: "Bike", image: "./images/BKE_V_26.png", type: "Vanilla", chrome: true },
  { name: "ツイステッド", category: "Bike", image: "./images/BKE_V_27.png", type: "Vanilla", chrome: true },
  { name: "モーニング スター", category: "Bike", image: "./images/BKE_V_28.png", type: "Vanilla", chrome: true },
  { name: "ジャギッド スポークス", category: "Bike", image: "./images/BKE_V_29.png", type: "Vanilla", chrome: true },
  { name: "エイドロン", category: "Bike", image: "./images/BKE_V_30.png", type: "Vanilla", chrome: true },
  { name: "エニグマ", category: "Bike", image: "./images/BKE_V_31.png", type: "Vanilla", chrome: true },
  { name: "ビッグ スポークス", category: "Bike", image: "./images/BKE_V_32.png", type: "Vanilla", chrome: true },
  { name: "ウェブズ", category: "Bike", image: "./images/BKE_V_33.png", type: "Vanilla", chrome: true },
  { name: "ホットプレート", category: "Bike", image: "./images/BKE_V_34.png", type: "Vanilla", chrome: true },
  { name: "ボブスタ", category: "Bike", image: "./images/BKE_V_35.png", type: "Vanilla", chrome: true },
  { name: "グラウチ", category: "Bike", image: "./images/BKE_V_36.png", type: "Vanilla", chrome: true },

  // Open wheel
  { name: "レトロ5", category: "Open", image: "./images/DRS_V_1.png", type: "Vanilla", chrome: false },
  { name: "レトロ5（ストライプ）", category: "Open", image: "./images/DRS_V_2.png", type: "Vanilla", chrome: false },
  { name: "レトロ スター", category: "Open", image: "./images/DRS_V_3.png", type: "Vanilla", chrome: false },
  { name: "レトロ スター（ストライプ）", category: "Open", image: "./images/DRS_V_4.png", type: "Vanilla", chrome: false },
  { name: "トリプレックス", category: "Open", image: "./images/DRS_V_5.png", type: "Vanilla", chrome: false },
  { name: "トリプレックス（ストライプ）", category: "Open", image: "./images/DRS_V_6.png", type: "Vanilla", chrome: false },
  { name: "70年代スペック", category: "Open", image: "./images/DRS_V_7.png", type: "Vanilla", chrome: false },
  { name: "70年代 スペック（ストライプ）", category: "Open", image: "./images/DRS_V_8.png", type: "Vanilla", chrome: false },
  { name: "スーパー 5R", category: "Open", image: "./images/DRS_V_9.png", type: "Vanilla", chrome: false },
  { name: "スーパー 5R（ストライプ）", category: "Open", image: "./images/DRS_V_10.png", type: "Vanilla", chrome: false },
  { name: "スピードスター", category: "Open", image: "./images/DRS_V_11.png", type: "Vanilla", chrome: false },
  { name: "スピードスター（ストライプ）", category: "Open", image: "./images/DRS_V_12.png", type: "Vanilla", chrome: false },
  { name: "GP-90", category: "Open", image: "./images/DRS_V_13.png", type: "Vanilla", chrome: false },
  { name: "GP-90（ストライプ）", category: "Open", image: "./images/DRS_V_14.png", type: "Vanilla", chrome: false },
  { name: "スーパー スポーク", category: "Open", image: "./images/DRS_V_15.png", type: "Vanilla", chrome: false },
  { name: "スーパー スポーク（ストライプ）", category: "Open", image: "./images/DRS_V_16.png", type: "Vanilla", chrome: false },
  { name: "グリッドライン", category: "Open", image: "./images/DRS_V_17.png", type: "Vanilla", chrome: false },
  { name: "グリッドライン（ストライプ）", category: "Open", image: "./images/DRS_V_18.png", type: "Vanilla", chrome: false },
  { name: "スノーフレーク", category: "Open", image: "./images/DRS_V_19.png", type: "Vanilla", chrome: false },
  { name: "スノーフレーク（ストライプ）", category: "Open", image: "./images/DRS_V_20.png", type: "Vanilla", chrome: false }




];


/* =========================
   DOM取得
========================= */
const modal = document.getElementById("wheel-modal");
const modalTitle = document.getElementById("modal-title");
const wheelContainer = document.getElementById("wheel-container");
const overlay = document.querySelector(".modal-overlay");

/* =========================
   カテゴリボタン操作
========================= */
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    openModal(category);
  });
});

/* =========================
   モーダルを開く
========================= */
function openModal(category) {
  modal.classList.remove("hidden");

  document.body.classList.add("modal-open");

  modalTitle.textContent = `${category} Wheels`;
  renderWheels(category);

  document.querySelector(".modal-content").scrollTop = 0;
}


/* =========================
   ホイール描画
========================= */
function renderWheels(category) {
  wheelContainer.innerHTML = "";

  const filtered = wheels.filter(wheel => wheel.category === category);

  if (filtered.length === 0) {
    wheelContainer.innerHTML =
      `<p style="text-align:center;">このカテゴリのホイールはありません</p>`;
    return;
  }

  filtered.forEach(wheel => {
    const card = document.createElement("div");
    card.className = "wheel-card";

    // カラー変更可否（存在する場合のみ表示）
    let colorHTML = "";
    if (typeof wheel.color === "boolean") {
      colorHTML = `
        <span class="wheel-color ${wheel.color ? "color-ok" : "no-color"}">
          ${wheel.color ? "カラー変更可" : "カラー変更不可"}
        </span>
      `;
    }

    card.innerHTML = `
      <img src="${wheel.image}" alt="${wheel.name}">
      <h3>${wheel.name}</h3>

      <div class="wheel-info">
        <span class="wheel-type">${wheel.type}</span>
        ${colorHTML}
      </div>
    `;

    wheelContainer.appendChild(card);
  });
}

/* =========================
   モーダルを閉じる
========================= */
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");

  document.body.classList.remove("modal-open");

  wheelContainer.innerHTML = "";
}

/* =========================
   スクロールトップ
========================= */
const scrollBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================
   ホイール一覧（常設表示）
========================= */
const wheelList = document.getElementById("wheel-list");

if (wheelList) {
  // カテゴリ一覧（表示順を固定）
  const categories = [
    "Sports",
    "Muscle",
    "Lowrider",
    "SUV",
    "Offroad",
    "Tuner",
    "Bike",
    "HighEnd",
    "Benny's",
    "Bespoke",
    "Open",
    "Street",
    "Track"
  ];

  categories.forEach(category => {
    const items = wheels.filter(w => w.category === category);
    if (items.length === 0) return;

    // 見出し
    const title = document.createElement("h2");
    title.className = "wheel-category-title";
    title.textContent = category;
    wheelList.appendChild(title);

    // グリッド
    const grid = document.createElement("div");
    grid.className = "wheel-list-grid";

    items.forEach(wheel => {
      const card = document.createElement("div");
      card.className = "wheel-card";

      const colorHTML =
        wheel.color === true || wheel.color === false
          ? `
            <span class="wheel-color ${wheel.color ? "color-ok" : "no-color"}">
              ${wheel.color ? "カラー変更可" : "カラー変更不可"}
            </span>
          `
          : "";

      card.innerHTML = `
        <img src="${wheel.image}" alt="${wheel.name}">
        <h3>${wheel.name}</h3>
        <div class="wheel-info">
          <span class="wheel-category">${wheel.category}</span>
          ${colorHTML}
        </div>
      `;

      grid.appendChild(card);
    });

    wheelList.appendChild(grid);
  });


 // ダブルクリックで背景変更
 const logo = document.querySelector(".title-icon");

logo.addEventListener("dblclick", () => {
  document.body.classList.toggle("secret-bg");
});

 
}

function sendVisitLog() {

  fetch("https://script.google.com/macros/s/AKfycbxawSWLoapxzyb_Eg35JqrdGn32YOb-qYpT76J-ez9MKTzIRf9Ryc8JdmF1SloLHoU_/exec", {

    method: "POST",

    body: JSON.stringify({
      action: "visit"
    })

  }).catch(err => {
    console.log(err);
  });

}














