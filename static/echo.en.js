const t = {
  brand: "ECHO 回响",
  brandSub: "让每份心意，都有归处。",
  homeTitle: "Today, Echo found care opportunities across your key relationships.",
  homeCopy:
    "Each card shows what Echo noticed, why it matters, and the next action you can take.",
  suggestionsTab: "Today's signals",
  contactsTab: "Relationship map",
  openDetail: "Open profile",
  record: "Record new context",
  back: "Back to Echo home",
  copy: "Copy",
  chatPlaceholder: "Ask about weather, period care, milk tea, stress, launch, or birthday...",
  capturePlaceholder:
    "Paste a note, transcript, or chat context here. Example: Lin said she may feel tired before her period and wants lighter dinners.",
};

const people = [
  {
    id: "lin",
    name: "Lin",
    relation: "Romantic partner",
    category: "romantic",
    status: "Busy, slightly stressed",
    score: 98,
    initials: "L",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    icon: "🧣",
    tags: ["Loves milk tea", "Losing weight", "Anniversary soon", "Cycle-aware care"],
    hobbies: "Reading, light walks, quiet cafes",
    detailNote: "Prefers care that is specific, gentle, and not controlling.",
    briefing: "Lin has multiple near-term care signals.",
    careAdvice:
      "She is balancing a weight-loss goal, colder weather tomorrow, a stressful week, an upcoming anniversary, and a possible pre-period comfort window.",
    recommendedAction:
      "Send a warm cold-weather note tomorrow morning, keep plans light, and prepare a small anniversary gesture this week.",
    keyAction: {
      label: "Generate care message",
      message:
        "It looks colder tomorrow. Wear something warm when you head out. If your day gets packed, I can bring you a hot drink.",
      gift: "A low-sugar warm drink plus a small handwritten anniversary card.",
    },
    urgency: "high",
    memories: [
      ["Preference", "Likes milk tea", "Enjoys milk tea when busy, but wants lower-calorie options."],
      ["Goal", "Weight-loss goal", "Support should avoid diet policing or body comments."],
      ["Mood", "Recent mood", "Busy and slightly stressed; low-demand care works best."],
      ["Date", "Anniversary next week", "A small planned gesture will matter more than a rushed grand surprise."],
      ["Weather", "Temperature drops tomorrow", "Creates a natural care opportunity."],
      ["Cycle", "Period may start in 4 days", "Comfort-focused care may be useful if she has cramps or fatigue."],
    ],
    suggestions: [
      {
        type: "Weather",
        title: "Send a cold-weather care note",
        urgency: "high",
        reason: "Tomorrow is forecast to be cooler and windy, so the care will feel timely.",
        action:
          "It looks colder tomorrow. Wear something warm when you head out, and tell me if you want me to bring you a hot drink.",
      },
      {
        type: "Cycle care",
        title: "Keep plans lighter before her period",
        urgency: "medium",
        reason: "Practical comfort and emotional space are more useful than over-attention.",
        action: "Want to keep tomorrow simple? I can order something light, and we can just rest if you are tired.",
      },
      {
        type: "Food",
        title: "Suggest a lighter milk tea option",
        urgency: "medium",
        reason: "A lighter option supports her goal without making weight the center of the message.",
        action:
          "Want a milk tea later? I can look for a lighter one, less sugar and no cream topping, so it still feels like a treat.",
      },
    ],
    weather: {
      today: "Mild, 18 C",
      tomorrow: "Cooler, 11 C with wind",
      change: "Temperature drops by 7 C",
      care: "A warmth reminder tomorrow morning will feel timely and natural.",
    },
    cycle: {
      phase: "Late luteal phase",
      nextPeriod: "Expected in 4 days",
      careWindow: "Today to next 5 days",
      note:
        "Use this sensitively: offer comfort, lighter plans, warmth, or space. Avoid jokes, pressure, or treating it as the reason for every feeling.",
    },
  },
  {
    id: "wang",
    name: "Wang",
    relation: "Key client",
    category: "client",
    status: "High-pressure launch",
    score: 85,
    initials: "W",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80",
    icon: "🎉",
    tags: ["Golf", "No hard liquor", "Efficiency first"],
    hobbies: "Golf, hiking",
    detailNote: "Prefers concise, useful messages without sales pressure.",
    briefing: "Wang's project is likely launching today.",
    careAdvice:
      "A short congratulatory message will show that you remembered the milestone without turning it into a pitch.",
    recommendedAction:
      "Send a brief congratulations note and mention one concrete detail about the project progress.",
    keyAction: {
      label: "View congratulations draft",
      message:
        "Congratulations on the launch today. I remember how much work went into getting this over the line. Hope the first day goes smoothly.",
      gift: "No gift needed now; a concise note is more appropriate than a business-looking gesture.",
    },
    urgency: "medium",
    memories: [
      ["Milestone", "Project launch", "A project followed last month is expected to launch today."],
      ["Preference", "Efficiency first", "Messages should be short, respectful, and useful."],
      ["Dislike", "No hard liquor", "Avoid alcohol-related gifts or dinner suggestions."],
      ["Interest", "Golf and hiking", "Light outdoor references can work if relevant."],
    ],
    suggestions: [
      {
        type: "Message",
        title: "Send a launch congratulations note",
        urgency: "medium",
        reason: "The timing is relevant and non-intrusive.",
        action:
          "Congratulations on the launch today. I remember how much work went into getting this over the line. Hope the first day goes smoothly.",
      },
    ],
  },
  {
    id: "chen",
    name: "Chen",
    relation: "Mentor",
    category: "mentor",
    status: "Birthday next week",
    score: 90,
    initials: "C",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    icon: "🍵",
    tags: ["Longjing tea", "Calligraphy", "Early riser"],
    hobbies: "Calligraphy, tai chi",
    detailNote: "Visits matter more than expensive gifts. Avoid long walking plans.",
    briefing: "Chen's 70th birthday is next week.",
    careAdvice:
      "A calm visit before the birthday rush would feel more thoughtful than a crowded same-day greeting.",
    recommendedAction:
      "Schedule a weekend visit and bring two boxes of Mingqian Longjing tea.",
    keyAction: {
      label: "Generate visit plan",
      message:
        "Teacher Chen, are you free Sunday morning? I would like to visit before your birthday and have a relaxed chat.",
      gift: "Two boxes of Mingqian Longjing tea and a short handwritten birthday note.",
    },
    urgency: "medium",
    memories: [
      ["Date", "70th birthday next week", "Last visit was about half a year ago."],
      ["Preference", "Mingqian Longjing", "Tea is a safe and personal gift choice."],
      ["Health", "Legs are not great", "Avoid long walking or crowded trips."],
      ["Routine", "Early riser", "Morning calls or visits are more natural."],
    ],
    suggestions: [
      {
        type: "Visit",
        title: "Plan a quiet birthday visit",
        urgency: "medium",
        reason: "Visiting before the actual birthday avoids noise and shows intention.",
        action:
          "Call this week to ask whether Sunday morning works, then bring Mingqian Longjing and keep the visit relaxed.",
      },
    ],
  },
  {
    id: "mom",
    name: "Mom",
    relation: "Family",
    category: "family",
    status: "Knee check-up soon",
    score: 96,
    initials: "M",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    icon: "🩺",
    tags: ["Knee pain", "Morning calls", "Light meals"],
    hobbies: "Neighborhood walks, family photos",
    detailNote: "She likes practical care and regular check-ins more than big surprises.",
    briefing: "Mom has a knee check-up coming this week.",
    careAdvice:
      "She may appreciate practical help with transport and a low-pressure reminder before the appointment.",
    recommendedAction: "Confirm the appointment time and offer to arrange transportation.",
    keyAction: {
      label: "Generate check-up reminder",
      message:
        "Mom, what time is your knee check-up this week? I can help arrange the ride so you do not have to rush.",
      gift: "A heat patch pack or a comfortable knee support, only if she actually uses them.",
    },
    urgency: "medium",
    memories: [
      ["Health", "Knee check-up this week", "Transport and timing may be the most useful help."],
      ["Preference", "Practical care", "Useful help lands better than expensive gifts."],
      ["Routine", "Morning calls", "Morning is the natural time to check in."],
    ],
    suggestions: [
      {
        type: "Health",
        title: "Confirm appointment logistics",
        urgency: "medium",
        reason: "A concrete offer reduces friction without making her feel dependent.",
        action: "Ask for the appointment time and offer to arrange the ride.",
      },
    ],
  },
  {
    id: "mei",
    name: "Mei",
    relation: "Colleague",
    category: "colleague",
    status: "Presentation tomorrow",
    score: 78,
    initials: "M",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    icon: "☕",
    tags: ["Presentation", "Coffee", "Direct feedback"],
    hobbies: "Design systems, coffee",
    detailNote: "She appreciates concise support and useful prep notes.",
    briefing: "Mei has an important presentation tomorrow.",
    careAdvice:
      "A short prep offer or coffee run can be supportive without interrupting her focus.",
    recommendedAction: "Offer to review her final slides or bring coffee before rehearsal.",
    keyAction: {
      label: "Generate support note",
      message:
        "If useful, I can give your final slides one quick pass today. No pressure if you already have it handled.",
      gift: "Coffee before rehearsal, kept casual and work-appropriate.",
    },
    urgency: "low",
    memories: [
      ["Work", "Presentation tomorrow", "She may be polishing final slides today."],
      ["Preference", "Direct feedback", "She values concise, actionable notes."],
      ["Care", "Coffee helps during crunch time", "A small practical offer is enough."],
    ],
    suggestions: [
      {
        type: "Work",
        title: "Offer a quick slide review",
        urgency: "low",
        reason: "It is useful but not intrusive.",
        action: "Offer one quick pass on final slides and make it easy to decline.",
      },
    ],
  },
];

const categoryLabels = {
  romantic: "Romantic partner",
  family: "Family",
  colleague: "Colleagues",
  client: "Clients",
  mentor: "Mentors",
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
          <div class="brand-mark">E</div>
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
          <p class="label">Briefing</p>
          <h2>${people.length} people have relationship signals today.</h2>
          <p class="muted">${t.homeCopy}</p>
        </div>
        <div class="metric-grid">
          <div class="metric"><span class="mini-label">People</span><strong>${people.length}</strong></div>
          <div class="metric"><span class="mini-label">Cards</span><strong>${people.length}</strong></div>
          <div class="metric"><span class="mini-label">Hot</span><strong>${highCount}</strong></div>
        </div>
      </div>
      <section data-panel="signals">
        <div class="suggestion-list">${people.map(personBriefingCard).join("")}</div>
      </section>
      <section data-panel="contacts" class="hidden">
        <div class="section-head">
          <div><p class="label">${t.contactsTab}</p><h2>Core relationships</h2></div>
          <span class="muted">${people.length} people</span>
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
          <p class="kicker">Echo detail page</p>
          <h2>Relationship briefing for ${person.name}</h2>
          <p>${person.careAdvice}</p>
        </div>
        <aside class="hero-side panel">
          <p class="label">Focus</p>
          <h2>${person.briefing}</h2>
          <div class="metric-grid">
            <div class="metric"><span class="mini-label">Affinity</span><strong>${person.score}</strong></div>
            <div class="metric"><span class="mini-label">Urgency</span><strong>${person.urgency}</strong></div>
            <div class="metric"><span class="mini-label">Actions</span><strong>${person.suggestions.length}</strong></div>
          </div>
        </aside>
      </div>
      <div class="two-col">
        <section class="main-stack">
          <section class="panel">
            <p class="label">Action suggestions</p>
            <h2>Next best moves</h2>
            <div class="suggestion-list">${person.suggestions.map(suggestionCard).join("")}</div>
          </section>
          <section class="panel">
            <p class="label">Lower-friction input</p>
            <h2>Capture context from whatever is easiest</h2>
            <div class="input-grid">
              <div class="input-tile"><strong>Voice note</strong><p>Record a quick memory after a call or meeting.</p><button class="secondary" data-mock="voice">Record</button></div>
              <div class="input-tile"><strong>Chat screenshot</strong><p>Upload a screenshot and let Echo extract mood, dates, preferences, and promises.</p><input type="file" accept="image/*" /></div>
              <div class="input-tile"><strong>Paste chat</strong><p>Paste a message thread or quick note for memory extraction.</p><button class="secondary" data-mock="paste">Analyze</button></div>
            </div>
            <div class="capture-box">
              <textarea placeholder="${t.capturePlaceholder}"></textarea>
              <button data-mock="saved">Save and analyze</button>
            </div>
          </section>
          ${isLin ? weatherPanel(person.weather) : ""}
        </section>
        <aside class="side-stack">
          <section class="panel">
            <p class="label">Person profile</p>
            <h2>${person.name}</h2>
            <dl class="profile-list">
              <div><dt>Relationship</dt><dd>${person.relation}</dd></div>
              <div><dt>Status</dt><dd>${person.status}</dd></div>
              <div><dt>Interests</dt><dd>${person.hobbies}</dd></div>
              <div><dt>Tone</dt><dd>${person.detailNote}</dd></div>
            </dl>
          </section>
          ${isLin ? cyclePanel(person.cycle) : ""}
          <section class="panel">
            <p class="label">Memory / context</p>
            <h2>Remembered details</h2>
            <div class="memory-list">${person.memories.map(memoryItem).join("")}</div>
          </section>
          <section class="panel">
            <p class="label">Chat assistant</p>
            <h2>Refine the next move</h2>
            <div class="chat-log" id="chat-log">
              <div class="chat-message"><span>Echo</span>I can help refine a message or choose a thoughtful action for ${person.name}.</div>
            </div>
            <form class="chat-form" id="chat-form">
              <input id="chat-input" placeholder="${t.chatPlaceholder}" />
              <button type="submit">Send</button>
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
        <div><strong>💬 Suggested words</strong><br />${person.keyAction.message}</div>
        <div><strong>🎁 Gift / action idea</strong><br />${person.keyAction.gift}</div>
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
        <span class="urgency ${item.urgency}">${item.urgency}</span>
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
          <span class="pill">Affinity ${person.score}</span>
        </div>
        <p>${person.relation} · ${person.status}</p>
        <div class="contact-meta">${person.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <p class="muted">${person.hobbies} · ${person.detailNote}</p>
      </div>
      <div class="contact-actions">
        <button class="secondary" data-mock="edit" title="Edit">✎</button>
      </div>
    </article>`;
}

function weatherPanel(weather) {
  return `
    <section class="panel weather-panel">
      <p class="label">Weather-aware care</p>
      <h2>Tomorrow creates a natural check-in moment</h2>
      <div class="weather-grid">
        <div><span class="mini-label">Today</span><strong>${weather.today}</strong></div>
        <div><span class="mini-label">Tomorrow</span><strong>${weather.tomorrow}</strong></div>
        <div><span class="mini-label">Change</span><strong>${weather.change}</strong></div>
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
      <p class="label">Cycle-aware care</p>
      <h2>Menstrual cycle signal</h2>
      <div class="cycle-row">
        <div><span class="mini-label">Phase</span><strong>${cycle.phase}</strong></div>
        <div><span class="mini-label">Next period</span><strong>${cycle.nextPeriod}</strong></div>
        <div><span class="mini-label">Window</span><strong>${cycle.careWindow}</strong></div>
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
    button.addEventListener("click", () => alert("Echo MVP mock: this input path is reserved for voice, screenshot, chat import, and profile editing."));
  });

  document.querySelector("#chat-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chat-input");
    const text = input.value.trim();
    if (!text) return;
    const log = document.querySelector("#chat-log");
    log.insertAdjacentHTML("beforeend", `<div class="chat-message user"><span>You</span>${escapeHtml(text)}</div>`);
    log.insertAdjacentHTML("beforeend", `<div class="chat-message"><span>Echo</span>${replyTo(text)}</div>`);
    input.value = "";
    log.scrollTop = log.scrollHeight;
  });
}

function replyTo(input) {
  const text = input.toLowerCase();
  if (text.includes("period") || text.includes("cycle")) {
    return "Keep it gentle and practical: offer a lighter plan, warm drink, or space to rest. Do not over-explain that you are tracking her cycle.";
  }
  if (text.includes("weather") || text.includes("cold")) {
    return "Try: 'It looks colder tomorrow. Wear something warm, and I can bring a hot drink if your day gets packed.'";
  }
  if (text.includes("launch") || text.includes("client")) {
    return "Keep it concise and non-salesy. Mention the launch, acknowledge the work, and avoid asking for anything in the same message.";
  }
  if (text.includes("birthday") || text.includes("mentor")) {
    return "For a mentor, a calm visit and remembered preference will feel warmer than an expensive gift.";
  }
  return "Make it specific, low-pressure, and easy to accept or decline. One observed context plus one small action is enough.";
}

function escapeAttr(value) {
  return value.replaceAll('"', "&quot;");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

window.addEventListener("hashchange", render);
render();
