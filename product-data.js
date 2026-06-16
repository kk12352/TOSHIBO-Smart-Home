const products = [
  {
    id: 1,
    image: "assets/product1-aircore-purifier.png",
    page: "product1.html",
    category: { zh: "空气", en: "Air" },
    name: { zh: "TOSHIBO AirCore Purifier", en: "TOSHIBO AirCore Purifier" },
    price: "$329.00",
    short: {
      zh: "紧凑型智能空气净化器，用柔和状态光显示家中空气变化。",
      en: "A compact smart air purifier with gentle status lighting for everyday indoor air."
    },
    desc: {
      zh: "AirCore Purifier 通过环形出风、低噪电机和多层滤芯，帮助客厅、卧室和书房保持清爽。它的青色状态光只在需要时提醒你，不打扰日常节奏。",
      en: "AirCore Purifier combines circular airflow, a quiet motor, and layered filtration for fresher living rooms, bedrooms, and studies. Its cyan status light stays calm and useful."
    },
    specs: [
      { zh: "三层净化滤芯", en: "Three-layer filter system" },
      { zh: "低噪睡眠模式", en: "Quiet sleep mode" },
      { zh: "青色空气状态光环", en: "Cyan air-status light ring" },
      { zh: "TOSHIBO 前置品牌标识", en: "Front TOSHIBO brand mark" }
    ]
  },
  {
    id: 2,
    image: "assets/product2-halolamp.png",
    page: "product2.html",
    category: { zh: "照明", en: "Lighting" },
    name: { zh: "TOSHIBO HaloLamp", en: "TOSHIBO HaloLamp" },
    price: "$129.00",
    short: {
      zh: "智能氛围台灯，适合床头、书桌和柔和夜间照明。",
      en: "A smart ambient table lamp for bedside, desk, and calm evening lighting."
    },
    desc: {
      zh: "HaloLamp 使用柔化灯罩、木质底座和触控光环，在阅读、放松和夜间起身之间自然切换。它可以作为 TOSHIBO 系统里的场景照明节点。",
      en: "HaloLamp uses a softened diffuser, wood base, and touch ring to move naturally between reading, relaxing, and night lighting. It acts as a lighting node in the TOSHIBO system."
    },
    specs: [
      { zh: "无频闪柔光灯罩", en: "Flicker-free soft diffuser" },
      { zh: "触控调光底座", en: "Touch dimming base" },
      { zh: "卧室与书桌场景模式", en: "Bedroom and desk scenes" },
      { zh: "底座 TOSHIBO 雕刻标识", en: "Engraved TOSHIBO base mark" }
    ]
  },
  {
    id: 3,
    image: "assets/product3-echocube.png",
    page: "product3.html",
    category: { zh: "声音", en: "Audio" },
    name: { zh: "TOSHIBO EchoCube", en: "TOSHIBO EchoCube" },
    price: "$179.00",
    short: {
      zh: "织物包覆智能音箱，让语音控制和音乐播放更克制。",
      en: "A fabric-wrapped smart speaker for restrained voice control and music."
    },
    desc: {
      zh: "EchoCube 用圆角立方体结构、声学织物和底部柔光环呈现安静的科技感。它负责语音控制、家庭提醒和轻量音乐播放。",
      en: "EchoCube pairs a rounded cube form, acoustic fabric, and soft base ring for calm technology. It handles voice control, home reminders, and light music playback."
    },
    specs: [
      { zh: "360 度织物声学外壳", en: "360-degree acoustic fabric shell" },
      { zh: "双麦克风降噪阵列", en: "Dual-mic noise reduction" },
      { zh: "低亮度状态光环", en: "Low-brightness status ring" },
      { zh: "前置 TOSHIBO 小徽标", en: "Small front TOSHIBO badge" }
    ]
  },
  {
    id: 4,
    image: "assets/product4-kitchenhub.png",
    page: "product4.html",
    category: { zh: "厨房", en: "Kitchen" },
    name: { zh: "TOSHIBO KitchenHub", en: "TOSHIBO KitchenHub" },
    price: "$399.00",
    short: {
      zh: "台面式厨房中控屏，用于计时、菜谱和家电场景管理。",
      en: "A countertop kitchen hub for timers, recipes, and appliance scenes."
    },
    desc: {
      zh: "KitchenHub 采用圆角屏幕和木质支架，适合放在厨房台面。它让计时、菜谱、空气联动和照明场景集中在一个低干扰界面里。",
      en: "KitchenHub uses a rounded display and wood stand for kitchen counters. It brings timers, recipes, air scenes, and lighting controls into one low-distraction interface."
    },
    specs: [
      { zh: "防油污易擦边框", en: "Easy-wipe anti-smudge frame" },
      { zh: "台面稳定木质支架", en: "Stable wood countertop stand" },
      { zh: "厨房场景快捷控制", en: "Kitchen scene quick controls" },
      { zh: "下边框 TOSHIBO 标识", en: "Lower-bezel TOSHIBO mark" }
    ]
  },
  {
    id: 5,
    image: "assets/product5-sweepmini.png",
    page: "product5.html",
    category: { zh: "清洁", en: "Cleaning" },
    name: { zh: "TOSHIBO SweepMini", en: "TOSHIBO SweepMini" },
    price: "$289.00",
    short: {
      zh: "小型智能地面清洁机，适合日常灰尘和轻量碎屑。",
      en: "A compact smart floor cleaner for daily dust and light debris."
    },
    desc: {
      zh: "SweepMini 的低矮圆角机身适合在沙发、边柜和餐桌附近穿行。它不是夸张的大机器，而是一台可以每天安静运行的小型清洁设备。",
      en: "SweepMini's low rounded body moves around sofas, cabinets, and dining zones. It is designed as a small daily cleaner rather than an oversized machine."
    },
    specs: [
      { zh: "低矮圆角机身", en: "Low rounded body" },
      { zh: "近墙清扫路径", en: "Near-wall cleaning path" },
      { zh: "静音日常清洁模式", en: "Quiet daily cleaning mode" },
      { zh: "顶盖 TOSHIBO 标识", en: "Top-shell TOSHIBO mark" }
    ]
  },
  {
    id: 6,
    image: "assets/product6-meshwave-router.png",
    page: "product6.html",
    category: { zh: "网络", en: "Network" },
    name: { zh: "TOSHIBO MeshWave Router", en: "TOSHIBO MeshWave Router" },
    price: "$229.00",
    short: {
      zh: "竖立式 Mesh 家用路由器，为智能设备提供稳定连接。",
      en: "A vertical mesh home router for stable smart-device connectivity."
    },
    desc: {
      zh: "MeshWave Router 用竖立式机身和侧边状态灯显示网络状态。它适合放在客厅边柜或书房，不像传统路由器那样突兀。",
      en: "MeshWave Router uses a vertical body and side status lights to show network health. It sits comfortably on consoles or study shelves without the cluttered router look."
    },
    specs: [
      { zh: "Mesh 多节点扩展", en: "Mesh multi-node expansion" },
      { zh: "侧边网络状态灯", en: "Side network status lights" },
      { zh: "竖立式散热结构", en: "Vertical cooling structure" },
      { zh: "前面板 TOSHIBO 标识", en: "Front-panel TOSHIBO mark" }
    ]
  },
  {
    id: 7,
    image: "assets/product7-sensedot.png",
    page: "product7.html",
    category: { zh: "感知", en: "Sensing" },
    name: { zh: "TOSHIBO SenseDot", en: "TOSHIBO SenseDot" },
    price: "$69.00",
    short: {
      zh: "小型环境传感器，追踪温湿度、光线与房间状态。",
      en: "A small environmental sensor for temperature, humidity, light, and room status."
    },
    desc: {
      zh: "SenseDot 是 TOSHIBO 系统里的感知点。它可以放在桌面、窗边或柜体旁，为净化、照明和厨房设备提供更准确的场景输入。",
      en: "SenseDot acts as a sensing point in the TOSHIBO system. Place it on a desk, window area, or shelf to inform air, lighting, and kitchen scenes."
    },
    specs: [
      { zh: "温湿度与光线感知", en: "Temperature, humidity, and light sensing" },
      { zh: "小型桌面圆形机身", en: "Small round tabletop body" },
      { zh: "低功耗无线连接", en: "Low-power wireless connection" },
      { zh: "顶部 TB 微标识", en: "Top TB micro mark" }
    ]
  },
  {
    id: 8,
    image: "assets/product8-dockone.png",
    page: "product8.html",
    category: { zh: "充电", en: "Charging" },
    name: { zh: "TOSHIBO DockOne", en: "TOSHIBO DockOne" },
    price: "$119.00",
    short: {
      zh: "桌面多设备智能充电座，让手机、耳机和手表归位。",
      en: "A multi-device desktop charging dock for phones, earbuds, and watches."
    },
    desc: {
      zh: "DockOne 把手机支架、平放充电区和桌面状态光整合在低矮底座上。它减少线缆杂乱，也让睡前和办公桌面更有秩序。",
      en: "DockOne combines a phone stand, flat charging areas, and desktop status light in a low base. It reduces cable clutter and keeps bedside or desk spaces ordered."
    },
    specs: [
      { zh: "三设备无线充电区域", en: "Three-device wireless charging zones" },
      { zh: "低矮圆角底座", en: "Low rounded base" },
      { zh: "青色桌面状态光", en: "Cyan desktop status glow" },
      { zh: "前沿 TOSHIBO 标识", en: "Front-edge TOSHIBO mark" }
    ]
  },
  {
    id: 9,
    image: "assets/product9-pantrylink.png",
    page: "product9.html",
    category: { zh: "厨房", en: "Kitchen" },
    name: { zh: "TOSHIBO PantryLink", en: "TOSHIBO PantryLink" },
    price: "$149.00",
    short: {
      zh: "小型厨房与储物控制器，用旋钮和触控管理日常备餐场景。",
      en: "A compact kitchen and pantry controller with tactile knob and touch control."
    },
    desc: {
      zh: "PantryLink 适合放在橱柜、餐边柜或备餐台旁，用实体旋钮和简洁触控面板管理计时、储物提醒和厨房设备联动。",
      en: "PantryLink sits beside cabinets, pantries, or prep counters, using a tactile knob and clean touch surface for timers, pantry reminders, and kitchen-device scenes."
    },
    specs: [
      { zh: "旋钮加触控双操作", en: "Knob plus touch interaction" },
      { zh: "厨房设备场景联动", en: "Kitchen-device scene linking" },
      { zh: "紧凑防污外壳", en: "Compact smudge-resistant shell" },
      { zh: "前面板 TOSHIBO 标识", en: "Front-panel TOSHIBO mark" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.system": "系统",
    "nav.contact": "联系",
    "hero.eyebrow": "独立智能家居电子品牌",
    "hero.title": "让家更安静地聪明起来",
    "hero.body": "TOSHIBO 用空气、照明、网络、厨房和清洁设备组成一个柔和的智能家居系统，让日常生活更顺手。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaSystem": "了解系统",
    "hero.note": "说明：TOSHIBO 是本站创建的独立智能家居电子品牌，不隶属于 Toshiba、东芝或任何同名/近似名称企业，也不代表其产品线。",
    "intro.kicker": "Connected Home System",
    "intro.title": "从单个设备，到完整的居家节奏",
    "intro.body": "TOSHIBO 把净化、照明、声音、网络、厨房管理、清洁和感知能力放进统一设计语言。设备安静工作，信息清楚可见，控制方式简单直接。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "9 款首发智能家居电子产品，覆盖空气、照明、声音、厨房、清洁、网络、环境感知与桌面充电场景。",
    "products.view": "查看详情",
    "about.kicker": "Why TOSHIBO",
    "about.title": "看得见的秩序，感受得到的安静",
    "about.body": "TOSHIBO 的产品不追求喧闹的屏幕和复杂操作，而是用统一的材质、柔和的青色状态光和清晰的场景逻辑，把家里的电子设备变得更克制、更好用。",
    "about.statProducts": "款首发设备",
    "about.statMark": "原创品牌标识",
    "about.statAffiliation": "东芝关联",
    "contact.kicker": "Contact",
    "contact.title": "为安静、整洁、互联的家而设计",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 TOSHIBO 智能家居团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 TOSHIBO. Independent smart-home electronics brand.",
    "footer.note": "Not affiliated with Toshiba, 东芝, or any similarly named company. This is an independent concept brand website.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "独立智能家居电子概念品牌，不代表 Toshiba、东芝或任何同名/近似名称企业。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.system": "System",
    "nav.contact": "Contact",
    "hero.eyebrow": "Independent Smart-Home Electronics",
    "hero.title": "A Quieter Kind of Smart Home",
    "hero.body": "TOSHIBO connects air, lighting, network, kitchen, and cleaning devices into a calm smart-home system that makes daily life feel easier.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaSystem": "View System",
    "hero.note": "Note: TOSHIBO is an independent smart-home electronics concept brand created for this site. It is not affiliated with Toshiba, 东芝, or any similarly named company.",
    "intro.kicker": "Connected Home System",
    "intro.title": "From Single Devices to a Complete Home Rhythm",
    "intro.body": "TOSHIBO brings purification, lighting, audio, networking, kitchen control, cleaning, and sensing into one design language. Devices work quietly, information stays clear, and control remains simple.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Nine launch smart-home electronics across air, lighting, audio, kitchen, cleaning, network, sensing, and desktop charging scenarios.",
    "products.view": "View Details",
    "about.kicker": "Why TOSHIBO",
    "about.title": "Visible Order, Felt Quietness",
    "about.body": "TOSHIBO products avoid loud screens and complicated controls. Unified materials, soft cyan status light, and clear home scenes make electronics feel calmer and easier to use.",
    "about.statProducts": "Launch devices",
    "about.statMark": "Original brand mark",
    "about.statAffiliation": "Toshiba affiliation",
    "contact.kicker": "Contact",
    "contact.title": "Designed for Quiet, Ordered, Connected Homes",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the TOSHIBO smart-home team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 TOSHIBO. Independent smart-home electronics brand.",
    "footer.note": "Not affiliated with Toshiba, 东芝, or any similarly named company. This is an independent concept brand website.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Independent smart-home electronics concept brand. Not affiliated with Toshiba, 东芝, or any similarly named company."
  }
};
