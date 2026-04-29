const t = {
  brand: "ECHO 回响",
  brandSub: "让每份心意，都有归处。",
  homeTitle: "今天，回响在你的核心关系里发现了几个值得关心的时刻。",
  homeCopy: "每张卡展示回响注意到的关系信号、为什么重要，以及最推荐的下一步动作。",
  suggestionsTab: "今日锦囊",
  contactsTab: "关系图谱",
  openDetail: "进入档案",
  record: "记录新情报",
  back: "返回回响首页",
  copy: "复制",
  chatPlaceholder: "问问天气、生理期、奶茶、压力、项目发布或生日...",
  capturePlaceholder:
    "粘贴一段聊天、语音转写或新的关系线索。例如：Lin 说生理期前容易累，晚餐想吃清淡一点。",
};

const people = [
  {
    id: "lin",
    name: "Lin",
    relation: "恋人",
    category: "romantic",
    status: "忙碌，略有压力",
    score: 98,
    initials: "L",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    icon: "🧣",
    tags: ["喜欢奶茶", "正在减重", "纪念日将近", "生理期关怀"],
    hobbies: "阅读、散步、安静咖啡店",
    detailNote: "更喜欢具体、轻柔、不带控制感的关心。",
    briefing: "Lin 近期有多个需要温柔处理的关怀信号。",
    careAdvice:
      "她最近在减重，明天天气转凉，这周有点忙和紧张，纪念日在下周，同时可能进入生理期前的舒适关怀窗口。",
    recommendedAction: "明早发一条降温关怀，把明后天安排调轻一点，并提前准备一个小纪念日心意。",
    keyAction: {
      label: "生成关怀话术",
      message: "明天好像会降温，出门记得穿暖一点。要是你白天太忙，我可以顺手给你带杯热的。",
      gift: "低糖热饮加一张小纪念日手写卡片。",
    },
    urgency: "high",
    urgencyLabel: "高",
    memories: [
      ["偏好", "喜欢奶茶", "忙的时候会想喝奶茶，但现在希望选择低糖、低负担一点的版本。"],
      ["目标", "当前健康目标", "正在慢慢减重，所以建议需要避免说教、评价身材或制造压力。"],
      ["情绪", "近期状态", "最近比较忙，也有一点压力；适合轻柔、低要求的支持。"],
      ["日期", "纪念日下周到来", "小而有准备的心意，会比临时的大动作更打动人。"],
      ["天气", "明天天气转凉", "气温下降提供了一个自然的关心机会。"],
      ["生理期", "预计 4 天后开始", "如果她有疲惫或不适，舒适型关心会更合适。"],
    ],
    suggestions: [
      {
        type: "天气",
        title: "明早发一条降温关怀",
        urgency: "high",
        urgencyLabel: "高",
        reason: "明天会明显降温并且有风。这个时间点发关心，会显得你有留意她的生活。",
        action: "明天好像会降温，出门记得穿暖一点。要是你白天太忙，我可以顺手给你带杯热的。",
      },
      {
        type: "生理期",
        title: "把近期安排调轻一点",
        urgency: "medium",
        urgencyLabel: "中",
        reason: "她的生理期可能在几天后开始。现在更适合提供实际舒适感，而不是过度关注。",
        action: "明天要不要简单一点？我可以点点清淡的，如果你累的话我们就轻松待着。",
      },
      {
        type: "饮食",
        title: "推荐一杯更轻负担的奶茶",
        urgency: "medium",
        urgencyLabel: "中",
        reason: "她喜欢奶茶，但现在也在减重。低糖选择可以支持她的目标，又不会像是在管她。",
        action: "晚点想喝奶茶吗？我可以找一杯低糖一点的，不加奶盖，还是有点小奖励的感觉。",
      },
    ],
    weather: {
      today: "温和，18 C",
      tomorrow: "转凉，11 C，有风",
      change: "明天气温下降 7 C",
      care: "明早发一条提醒她多穿一点的消息，会显得及时、自然，而不是突兀。",
    },
    cycle: {
      phase: "黄体后期",
      nextPeriod: "预计 4 天后开始",
      careWindow: "今天到未来 5 天",
      note:
        "这个信息要谨慎使用：适合提供舒适、保暖、轻量安排和情绪空间。避免开玩笑、施压，或把她的情绪都归因到生理期。",
    },
  },
  {
    id: "wang",
    name: "王总",
    relation: "核心客户",
    category: "client",
    status: "项目发布，高压",
    score: 85,
    initials: "王",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80",
    icon: "🎉",
    tags: ["高尔夫", "不喝烈酒", "效率优先"],
    hobbies: "高尔夫、登山",
    detailNote: "更喜欢简短、有用、没有销售压力的信息。",
    briefing: "王总负责的项目预计今天正式发布。",
    careAdvice: "一条简短祝贺可以体现你一直关注进展，同时不带业务推销感。",
    recommendedAction: "发一条祝贺微信，提到一个具体进展点，不在同一条消息里提出需求。",
    keyAction: {
      label: "查看祝贺草稿",
      message: "恭喜今天项目正式发布。记得这一路推进很不容易，祝首日上线顺利。",
      gift: "暂时不建议送礼；一条简短、真诚、不推销的祝贺更合适。",
    },
    urgency: "medium",
    urgencyLabel: "中",
    memories: [
      ["里程碑", "项目今日发布", "上月跟进的重点项目预计今天正式对外发布。"],
      ["偏好", "效率优先", "消息要短、尊重时间，并且有实际信息价值。"],
      ["避雷", "不喝烈酒", "避免酒局或烈酒类礼物。"],
      ["兴趣", "高尔夫和登山", "相关话题可以轻轻带到，但不要硬聊。"],
    ],
    suggestions: [
      {
        type: "消息",
        title: "发送项目发布祝贺",
        urgency: "medium",
        urgencyLabel: "中",
        reason: "今天是自然的联系时机，而且不会显得突兀。",
        action: "恭喜今天项目正式发布。记得这一路推进很不容易，祝首日上线顺利。",
      },
    ],
  },
  {
    id: "chen",
    name: "陈老师",
    relation: "导师",
    category: "mentor",
    status: "生日在下周",
    score: 90,
    initials: "陈",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    icon: "🍵",
    tags: ["龙井茶", "书法", "早睡早起"],
    hobbies: "书法、太极",
    detailNote: "比起贵重礼物，更看重登门探望；腿脚不太好，避免长距离安排。",
    briefing: "陈老师下周迎来 70 岁生日。",
    careAdvice: "在正日子之前安静拜访，会比当天热闹问候更显得用心。",
    recommendedAction: "本周约一个周日上午去探望，带两盒他喜欢的明前龙井。",
    keyAction: {
      label: "生成拜访安排",
      message: "陈老师，您这周日上午方便吗？我想在您生日前先去看看您，简单聊聊天。",
      gift: "两盒明前龙井，加一张简短生日卡片。",
    },
    urgency: "medium",
    urgencyLabel: "中",
    memories: [
      ["日期", "下周 70 岁生日", "上次登门拜访是半年前。"],
      ["偏好", "明前龙井", "茶叶是稳妥且个人化的礼物。"],
      ["健康", "腿脚不太好", "避免安排长途出行或拥挤活动。"],
      ["作息", "早睡早起", "上午电话或拜访更自然。"],
    ],
    suggestions: [
      {
        type: "拜访",
        title: "提前安排一次安静探望",
        urgency: "medium",
        urgencyLabel: "中",
        reason: "避开生日当天的喧闹，更能体现认真和温度。",
        action: "这周先打电话问周日上午是否方便，带上明前龙井，探望时间不用太久。",
      },
    ],
  },
  {
    id: "mom",
    name: "妈妈",
    relation: "亲人",
    category: "family",
    status: "这周膝盖复查",
    score: 96,
    initials: "妈",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    icon: "🩺",
    tags: ["膝盖不适", "早上通话", "清淡饮食"],
    hobbies: "小区散步、家庭照片",
    detailNote: "更喜欢实际帮忙和规律问候，不需要夸张惊喜。",
    briefing: "妈妈这周有膝盖复查。",
    careAdvice: "她可能更需要交通和时间安排上的实际帮助，而不是泛泛地问一句。",
    recommendedAction: "确认复查时间，并主动提出帮她安排出行。",
    keyAction: {
      label: "生成复查提醒",
      message: "妈，你这周膝盖复查是几点？我帮你把车安排好，你不用赶。",
      gift: "热敷贴或舒适护膝，但前提是她真的会用。",
    },
    urgency: "medium",
    urgencyLabel: "中",
    memories: [
      ["健康", "这周膝盖复查", "交通和时间安排是最实际的帮助。"],
      ["偏好", "喜欢实用关心", "有用的帮助比贵重礼物更容易被接受。"],
      ["习惯", "早上通话", "上午联系更自然。"],
    ],
    suggestions: [
      {
        type: "健康",
        title: "确认复查安排",
        urgency: "medium",
        urgencyLabel: "中",
        reason: "具体帮忙能减少她的麻烦，也不会显得小题大做。",
        action: "问清复查时间，并提出帮她安排出行。",
      },
    ],
  },
  {
    id: "mei",
    name: "Mei",
    relation: "同事",
    category: "colleague",
    status: "明天重要汇报",
    score: 78,
    initials: "M",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    icon: "☕",
    tags: ["汇报", "咖啡", "直接反馈"],
    hobbies: "设计系统、咖啡",
    detailNote: "更喜欢简洁、有用、不打扰节奏的支持。",
    briefing: "Mei 明天有一次重要汇报。",
    careAdvice: "一条简短的帮忙提议或顺手带咖啡，会比长篇鼓励更实用。",
    recommendedAction: "主动提出帮她快速过一遍最终 slides，或彩排前顺手带咖啡。",
    keyAction: {
      label: "生成支持话术",
      message: "如果有用的话，我今天可以帮你快速过一遍最终 slides。不需要的话也完全没关系。",
      gift: "彩排前一杯咖啡，保持轻松、职场边界清晰。",
    },
    urgency: "low",
    urgencyLabel: "低",
    memories: [
      ["工作", "明天重要汇报", "她今天可能在打磨最终 slides。"],
      ["偏好", "直接反馈", "她喜欢简短、可执行的建议。"],
      ["关心", "赶工时咖啡有帮助", "一个实际小动作就够。"],
    ],
    suggestions: [
      {
        type: "工作",
        title: "提供快速过稿",
        urgency: "low",
        urgencyLabel: "低",
        reason: "有帮助，但不打扰。",
        action: "提出快速看一遍最终 slides，并让她很容易拒绝。",
      },
    ],
  },
];

const categoryLabels = {
  romantic: "恋人",
  family: "亲人",
  colleague: "同事",
  client: "客户",
  mentor: "导师",
};

function render() {
  const app = document.querySelector("#app");
  const personId = location.hash.replace("#person-", "");
  const person = people.find((item) => item.id === personId);
  app.innerHTML = person ? detailView(person) : homeView();
  bindEvents();
}

function topbar(active = "signals") {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark">回</div>
          <div>
            <h1>${t.brand}</h1>
            <p>${t.brandSub}</p>
          </div>
        </div>
        <div class="tabbar" data-tabs>
          <button class="${active === "signals" ? "active" : ""}" data-tab="signals">${t.suggestionsTab}</button>
          <button class="${active === "contacts" ? "active" : ""}" data-tab="contacts">${t.contactsTab}</button>
        </div>
      </div>
    </header>`;
}

function homeView() {
  const highCount = people.filter((person) => person.urgency === "high").length;
  return `
    ${topbar()}
    <section class="shell">
      <div class="briefing-strip" data-home-hero>
        <div>
          <p class="label">今日简报</p>
          <h2>今天有 ${people.length} 个人值得你留意。</h2>
          <p class="muted">${t.homeCopy}</p>
        </div>
        <div class="metric-grid">
          <div class="metric"><span class="mini-label">联系人</span><strong>${people.length}</strong></div>
          <div class="metric"><span class="mini-label">锦囊卡</span><strong>${people.length}</strong></div>
          <div class="metric"><span class="mini-label">高优先级</span><strong>${highCount}</strong></div>
        </div>
      </div>
      <section data-panel="signals">
        <div class="suggestion-list">${people.map(personBriefingCard).join("")}</div>
      </section>
      <section data-panel="contacts" class="hidden">
        <div class="section-head">
          <div><p class="label">${t.contactsTab}</p><h2>核心关系</h2></div>
          <span class="muted">共 ${people.length} 人</span>
        </div>
        <div class="contact-list">${relationshipMap().join("")}</div>
      </section>
    </section>
    <button class="fab" data-capture title="${t.record}">+</button>`;
}

function detailView(person) {
  const isLin = person.id === "lin";
  return `
    ${topbar("contacts")}
    <section class="shell">
      <a class="back-link" href="#">${t.back}</a>
      <div class="hero">
        <div class="hero-main">
          <p class="kicker">回响详情页</p>
          <h2>${person.name} 的关系简报</h2>
          <p>${person.careAdvice}</p>
        </div>
        <aside class="hero-side panel">
          <p class="label">今日重点</p>
          <h2>${person.briefing}</h2>
          <div class="metric-grid">
            <div class="metric"><span class="mini-label">亲密度</span><strong>${person.score}</strong></div>
            <div class="metric"><span class="mini-label">优先级</span><strong>${person.urgencyLabel}</strong></div>
            <div class="metric"><span class="mini-label">动作</span><strong>${person.suggestions.length}</strong></div>
          </div>
        </aside>
      </div>
      <div class="two-col">
        <section class="main-stack">
          <section class="panel">
            <p class="label">行动建议</p>
            <h2>下一步最合适的行动</h2>
            <div class="suggestion-list">${person.suggestions.map(suggestionCard).join("")}</div>
          </section>
          <section class="panel">
            <p class="label">降低输入成本</p>
            <h2>用最顺手的方式补充关系上下文</h2>
            <div class="input-grid">
              <div class="input-tile"><strong>语音记录</strong><p>通话或见面后，直接说一句新的线索。</p><button class="secondary" data-mock="voice">录音</button></div>
              <div class="input-tile"><strong>聊天截图</strong><p>上传截图，让回响提取日期、情绪、偏好和待办。</p><input type="file" accept="image/*" /></div>
              <div class="input-tile"><strong>粘贴聊天</strong><p>把一段聊天或备忘粘贴进来，快速沉淀为记忆。</p><button class="secondary" data-mock="paste">分析</button></div>
            </div>
            <div class="capture-box">
              <textarea placeholder="${t.capturePlaceholder}"></textarea>
              <button data-mock="saved">保存并分析</button>
            </div>
          </section>
          ${isLin ? weatherPanel(person.weather) : ""}
        </section>
        <aside class="side-stack">
          <section class="panel">
            <p class="label">人物档案</p>
            <h2>${person.name}</h2>
            <dl class="profile-list">
              <div><dt>关系</dt><dd>${person.relation}</dd></div>
              <div><dt>状态</dt><dd>${person.status}</dd></div>
              <div><dt>兴趣</dt><dd>${person.hobbies}</dd></div>
              <div><dt>沟通语气</dt><dd>${person.detailNote}</dd></div>
            </dl>
          </section>
          ${isLin ? cyclePanel(person.cycle) : ""}
          <section class="panel">
            <p class="label">记忆 / 上下文</p>
            <h2>已记住的重要信息</h2>
            <div class="memory-list">${person.memories.map(memoryItem).join("")}</div>
          </section>
          <section class="panel">
            <p class="label">聊天助手</p>
            <h2>帮你润色下一步</h2>
            <div class="chat-log" id="chat-log">
              <div class="chat-message"><span>回响</span>我可以帮你为 ${person.name} 润色消息、选择行动，或者把一句关心改得更自然。</div>
            </div>
            <form class="chat-form" id="chat-form">
              <input id="chat-input" placeholder="${t.chatPlaceholder}" />
              <button type="submit">发送</button>
            </form>
          </section>
        </aside>
      </div>
    </section>`;
}

function personBriefingCard(person) {
  return `
    <article class="suggestion-card brief-card">
      <div class="brief-content">
        <a class="person-link" href="#person-${person.id}">
          <div class="brief-person">
            <div class="avatar">${avatarMarkup(person)}</div>
            <div>
              <h3>${person.name}</h3>
              <p>${person.relation}</p>
            </div>
            <div class="brief-icon">${person.icon}</div>
          </div>
        </a>
        <div class="scenario-box">
          <strong>${person.briefing}</strong>
          <span>${person.careAdvice}</span>
        </div>
        <div class="action-box">
          <p>${person.recommendedAction}</p>
          <button type="button" class="inline-action" data-generate="${person.id}">${person.keyAction.label}</button>
        </div>
      </div>
      <div class="generated-box hidden" id="generated-${person.id}">
        <div><strong>💬 推荐话术</strong><br />${person.keyAction.message}</div>
        <div><strong>🎁 礼物 / 行动建议</strong><br />${person.keyAction.gift}</div>
      </div>
    </article>`;
}

function relationshipMap() {
  return Object.entries(categoryLabels)
    .map(([category, label]) => {
      const members = people.filter((person) => person.category === category);
      if (!members.length) return "";
      return `
        <section class="category-section">
          <div class="category-heading">
            <h3>${label}</h3>
            <span class="muted">${members.length}</span>
          </div>
          ${members.map(contactCard).join("")}
        </section>`;
    })
    .filter(Boolean);
}

function suggestionCard(item) {
  return `
    <article class="suggestion-card">
      <div class="suggestion-topline">
        <span class="pill">${item.type}</span>
        <span class="urgency ${item.urgency}">${item.urgencyLabel}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.reason}</p>
      <div class="action-box">
        <p>${item.action}</p>
        <button data-copy="${escapeAttr(item.action)}">${t.copy}</button>
      </div>
    </article>`;
}

function contactCard(person) {
  return `
    <article class="contact-card" data-person-link="${person.id}">
      <a class="avatar-button" href="#person-${person.id}" aria-label="${t.openDetail}: ${person.name}">
        <div class="avatar">${avatarMarkup(person)}</div>
      </a>
      <div>
        <div class="contact-topline">
          <h3>${person.name}</h3>
          <span class="pill">亲密度 ${person.score}</span>
        </div>
        <p>${person.relation} · ${person.status}</p>
        <div class="contact-meta">${person.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <p class="muted">${person.hobbies} · ${person.detailNote}</p>
      </div>
      <div class="contact-actions">
        <button class="secondary" data-mock="edit" title="编辑">✎</button>
      </div>
    </article>`;
}

function weatherPanel(weather) {
  return `
    <section class="panel weather-panel">
      <p class="label">天气感知关怀</p>
      <h2>明天降温，是一个自然的关心时机</h2>
      <div class="weather-grid">
        <div><span class="mini-label">今天</span><strong>${weather.today}</strong></div>
        <div><span class="mini-label">明天</span><strong>${weather.tomorrow}</strong></div>
        <div><span class="mini-label">变化</span><strong>${weather.change}</strong></div>
      </div>
      <p>${weather.care}</p>
    </section>`;
}

function avatarMarkup(person) {
  return person.avatar ? `<img src="${person.avatar}" alt="${person.name}" />` : person.initials;
}

function cyclePanel(cycle) {
  return `
    <section class="panel cycle-card">
      <p class="label">生理期关怀</p>
      <h2>周期信号</h2>
      <div class="cycle-row">
        <div><span class="mini-label">阶段</span><strong>${cycle.phase}</strong></div>
        <div><span class="mini-label">预计开始</span><strong>${cycle.nextPeriod}</strong></div>
        <div><span class="mini-label">关怀窗口</span><strong>${cycle.careWindow}</strong></div>
      </div>
      <p class="muted">${cycle.note}</p>
    </section>`;
}

function memoryItem(item) {
  return `<article class="memory-item"><span class="pill">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`;
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.add("hidden"));
      document.querySelector(`[data-panel="${button.dataset.tab}"]`)?.classList.remove("hidden");
      document.querySelector("[data-home-hero]")?.classList.toggle("hidden", button.dataset.tab === "contacts");
    });
  });

  document.querySelectorAll("[data-generate]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(`#generated-${button.dataset.generate}`)?.classList.toggle("hidden");
    });
  });

  document.querySelectorAll("[data-person-link]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.closest("a")) return;
      location.hash = `#person-${card.dataset.personLink}`;
    });
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => navigator.clipboard?.writeText(button.dataset.copy));
  });

  document.querySelectorAll("[data-mock], [data-capture]").forEach((button) => {
    button.addEventListener("click", () => alert("回响 MVP mock：这里预留给语音、截图识别、聊天导入和编辑能力。"));
  });

  document.querySelector("#chat-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chat-input");
    const text = input.value.trim();
    if (!text) return;
    const log = document.querySelector("#chat-log");
    log.insertAdjacentHTML("beforeend", `<div class="chat-message user"><span>你</span>${escapeHtml(text)}</div>`);
    log.insertAdjacentHTML("beforeend", `<div class="chat-message"><span>回响</span>${replyTo(text)}</div>`);
    input.value = "";
    log.scrollTop = log.scrollHeight;
  });
}

function replyTo(input) {
  const text = input.toLowerCase();
  if (text.includes("period") || text.includes("cycle") || text.includes("生理期") || text.includes("经期")) {
    return "建议温柔、具体、不过度强调周期：可以提供清淡晚餐、热饮、轻一点的安排，或者给她休息空间。";
  }
  if (text.includes("weather") || text.includes("cold") || text.includes("天气") || text.includes("降温")) {
    return "可以这样说：明天好像会降温，出门记得穿暖一点。要是你白天太忙，我可以顺手给你带杯热的。";
  }
  if (text.includes("项目") || text.includes("客户") || text.includes("发布")) {
    return "给客户建议简短、不推销：祝贺发布，提一个你记得的具体进展，不要在同一条消息里提出需求。";
  }
  if (text.includes("生日") || text.includes("导师") || text.includes("老师")) {
    return "给导师更适合安静拜访和记住偏好。比起贵重礼物，一次提前安排好的探望更有温度。";
  }
  return "建议保持具体、温柔、低压力：先提一个你观察到的上下文，再给一个很容易接受或拒绝的小行动。";
}

function escapeAttr(value) {
  return value.replaceAll('"', "&quot;");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

window.addEventListener("hashchange", render);
render();
