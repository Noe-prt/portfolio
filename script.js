/* ============================================================
   Noé Pareti — Portfolio (EN/FR)
   ============================================================ */

const I18N = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Web Developer & Game Developer",
    "hero.sub": "I build polished web applications and immersive games — from raycasting mazes to real-time multiplayer worlds.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",
    "hero.ageLine": "20 years old · 42 School Student",
    "hero.expLine": "Game Developer Intern @ Adzap",
    "about.title": "About",
    "about.body": "I'm a 20-year-old web developer and game developer currently studying at 42 school since November 2024. I love building at the intersection of clean web engineering and game design — whether that's a 3D maze rendered with raycasting in C, a real-time multiplayer Pong, or a co-op simulation game launched on Steam.",
    "about.school": "School Student",
    "about.projects": "Projects",
    "about.steam": "Steam Launch",
    "about.langs": "Game Engines +",
    "projects.title": "Projects",
    "projects.sub": "A selection of my work — from 42 school projects to shipped games.",
    "projects.student": "42 School Project",
    "projects.personal": "Personal Project",
    "projects.game": "Game",
    "experience.title": "Experience",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.web": "Web Development",
    "skills.backend": "Backend & Data",
    "skills.gamedev": "Game Development",
    "skills.tools": "Tools",
    "hobbies.title": "Hobbies",
    "hobbies.sub": "Outside of code, you'll find me doing one of these.",
    "contact.title": "Let's connect",
    "contact.sub": "I'm always open to interesting projects and opportunities.",
    "footer.text": "© 2026 Noé Pareti. Built with vanilla HTML, CSS & JS.",
    "link.github": "GitHub",
    "link.video": "Watch Video",
    "link.live": "Live Demo",
    "link.steam": "Steam",
    "link.fab": "Fab"
  },
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "hero.greeting": "Bonjour, je suis",
    "hero.role": "Développeur Web & Développeur de Jeux Vidéo",
    "hero.sub": "Je crée des applications web soignées et des jeux immersifs — des labyrinthes en raycasting aux mondes multijoueurs en temps réel.",
    "hero.viewProjects": "Voir les projets",
    "hero.contact": "Contact",
    "hero.ageLine": "20 ans · Étudiant à l'école 42",
    "hero.expLine": "Stagiaire Game Developer @ Adzap",
    "about.title": "À propos",
    "about.body": "Je suis un développeur web et développeur de jeux vidéo de 20 ans, actuellement étudiant à l'école 42 depuis novembre 2024. J'aime créer à l'intersection de l'ingénierie web propre et du game design — que ce soit un labyrinthe 3D en raycasting en C, un Pong multijoueur en temps réel, ou un jeu de simulation coopératif lancé sur Steam.",
    "about.school": "Étudiant à 42",
    "about.projects": "Projets",
    "about.steam": "Lancement Steam",
    "about.langs": "Moteurs de jeu +",
    "projects.title": "Projets",
    "projects.sub": "Une sélection de mon travail — des projets de l'école 42 aux jeux publiés.",
    "projects.student": "Projet école 42",
    "projects.personal": "Projet personnel",
    "projects.game": "Jeu",
    "experience.title": "Expérience",
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.web": "Développement Web",
    "skills.backend": "Backend & Data",
    "skills.gamedev": "Développement de Jeux",
    "skills.tools": "Outils",
    "hobbies.title": "Passe-temps",
    "hobbies.sub": "En dehors du code, vous me trouverez en train de faire l'une de ces activités.",
    "contact.title": "Contactons-nous",
    "contact.sub": "Je suis toujours ouvert aux projets et opportunités intéressants.",
    "footer.text": "© 2026 Noé Pareti. Conçu avec du HTML, CSS & JS pur.",
    "link.github": "GitHub",
    "link.video": "Voir la vidéo",
    "link.live": "Démo en ligne",
    "link.steam": "Steam",
    "link.fab": "Fab"
  }
};

/* ============================================================
   Content data (per language)
   ============================================================ */

const DATA = {
  en: {
    projects: [
      {
        id: "electrofix",
        title: "ElectroFix Simulator",
        kind: "projects.game",
        desc: "Co-op simulation game I developed as the sole programmer during my internship. Built in 3 months and successfully launched on Steam.",
        tags: ["Unreal Engine", "C++", "Co-op", "Simulation"],
        image: "https://cdn.akamai.steamstatic.com/steam/apps/4194550/header.jpg",
        links: [
          { label: "link.steam", url: "https://store.steampowered.com/app/4194550/ElectroFix_Simulator/" }
        ]
      },
      {
        id: "umps",
        title: "UMPS",
        kind: "projects.game",
        desc: "Unreal Engine plugin that simulates a mobile phone, compatible with multiplayer. It replicates apps like video calls, messages, camera, web browser and more. Available on Fab.",
        tags: ["Unreal Engine", "C++", "Blueprint", "Plugin", "Multiplayer"],
        image: "",
        gradient: ["#3a2a5c", "#12101d"],
        links: [
          { label: "link.fab", url: "https://www.fab.com/listings/0da4dac5-8190-4b24-8a4c-5db19f417f56" }
        ]
      },
      {
        id: "fps",
        title: "Multiplayer FPS",
        kind: "projects.game",
        desc: "Multiplayer FPS inspired by CS:GO, built to learn C++ and Unreal Engine replication systems.",
        tags: ["Unreal Engine", "C++", "Networking", "Replication"],
        image: "https://img.youtube.com/vi/lxqgcCfjygo/hqdefault.jpg",
        links: [
          { label: "link.video", url: "https://www.youtube.com/watch?v=lxqgcCfjygo" }
        ]
      },
      {
        id: "transcendence",
        title: "ft_transcendence",
        kind: "projects.student",
        desc: "Web application featuring real-time multiplayer Pong with a modern UI, advanced user management and a modular architecture focused on security and accessibility.",
        tags: ["Next.js", "React", "WebSocket", "PostgreSQL", "Redis"],
        image: "https://img.youtube.com/vi/FeF9DL43HT0/hqdefault.jpg",
        links: [
          { label: "link.video", url: "https://www.youtube.com/watch?v=FeF9DL43HT0" },
          { label: "link.github", url: "https://github.com/Noe-prt/ft_transcendence" }
        ]
      },
      {
        id: "logotham",
        title: "Logotham",
        kind: "projects.personal",
        desc: "Web app for creating custom icons with AI tools, allowing random icon generation.",
        tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
        image: "",
        gradient: ["#14532d", "#0b1410"],
        links: [
          { label: "link.live", url: "https://logotham.vercel.app/" },
          { label: "link.github", url: "https://github.com/Noe-prt/logotham" }
        ]
      },
      {
        id: "cub3d",
        title: "Cub3D",
        kind: "projects.student",
        desc: "Graphic design project creating a 3D perspective in a maze using raycasting, similar to the famous Wolfenstein 3D.",
        tags: ["C", "Raycasting", "Graphics"],
        image: "",
        gradient: ["#1f3a5f", "#0c1020"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/42-Cub3D" }
        ]
      },
      {
        id: "minishell",
        title: "Minishell",
        kind: "projects.student",
        desc: "Simple Unix shell implementation emphasizing shell functionalities, process management and memory handling in C.",
        tags: ["C", "Processes", "Shell"],
        image: "",
        gradient: ["#2f2a3d", "#100e16"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/minishell" }
        ]
      },
      {
        id: "inception",
        title: "Inception",
        kind: "projects.student",
        desc: "System administration project using Docker to virtualize several images inside a personal virtual machine.",
        tags: ["Docker", "DevOps", "Linux"],
        image: "",
        gradient: ["#164e63", "#08121a"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/Inception" }
        ]
      }
    ],
    experience: [
      {
        period: "Feb 2026 — Jul 2026",
        role: "Game Developer Intern",
        org: "Adzap",
        desc: "Sole programmer of ElectroFix Simulator, a co-op simulation game built in 3 months and successfully launched on Steam. Worked on gameplay systems, replication and full game programming."
      },
      {
        period: "Nov 2024 — Present",
        role: "Student",
        org: "42 School",
        desc: "Intensive peer-to-peer programming curriculum covering C & C++, algorithms, Unix systems, Docker and web development — alongside self-taught game development with Unreal Engine."
      }
    ],
    skills: [
      { title: "skills.languages", list: ["C++", "Blueprint", "C", "C#", "GDScript", "TypeScript", "SQL"] },
      { title: "skills.gamedev", list: ["Unreal Engine", "Unity", "Godot", "Multiplayer Networking", "Replication Systems", "Plugin Development (Fab)", "Client-Server Architecture", "Game Systems Design"] },
      { title: "skills.web", list: ["React", "Next.js", "WebSocket", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "skills.backend", list: ["Redis", "PostgreSQL", "Stripe", "better-auth"] },
      { title: "skills.tools", list: ["Git", "Visual Studio", "Docker"] }
    ],
    hobbies: [
      { icon: "🎾", name: "Tennis", cls: "Tennis" },
      { icon: "⚽", name: "Football", cls: "Football" },
      { icon: "🎸", name: "Guitar", cls: "Guitar" },
      { icon: "🎮", name: "Video Games", cls: "Video Games" }
    ]
  },
  fr: {
    projects: [
      {
        id: "electrofix",
        title: "ElectroFix Simulator",
        kind: "projects.game",
        desc: "Jeu de simulation coopératif développé en tant que programmeur unique pendant mon stage. Créé en 3 mois et lancé avec succès sur Steam.",
        tags: ["Unreal Engine", "C++", "Coopératif", "Simulation"],
        image: "https://cdn.akamai.steamstatic.com/steam/apps/4194550/header.jpg",
        links: [
          { label: "link.steam", url: "https://store.steampowered.com/app/4194550/ElectroFix_Simulator/" }
        ]
      },
      {
        id: "umps",
        title: "UMPS",
        kind: "projects.game",
        desc: "Plugin Unreal Engine simulant un téléphone portable compatible multijoueur. Il reproduit des applis comme les appels vidéo, les messages, la caméra, le navigateur web et bien plus. Disponible sur Fab.",
        tags: ["Unreal Engine", "C++", "Blueprint", "Plugin", "Multijoueur"],
        image: "",
        gradient: ["#3a2a5c", "#12101d"],
        links: [
          { label: "link.fab", url: "https://www.fab.com/listings/0da4dac5-8190-4b24-8a4c-5db19f417f56" }
        ]
      },
      {
        id: "fps",
        title: "Multiplayer FPS",
        kind: "projects.game",
        desc: "FPS multijoueur inspiré de CS:GO, développé pour apprendre le C++ et les systèmes de réplication d'Unreal Engine.",
        tags: ["Unreal Engine", "C++", "Réseau", "Réplication"],
        image: "https://img.youtube.com/vi/lxqgcCfjygo/hqdefault.jpg",
        links: [
          { label: "link.video", url: "https://www.youtube.com/watch?v=lxqgcCfjygo" }
        ]
      },
      {
        id: "transcendence",
        title: "ft_transcendence",
        kind: "projects.student",
        desc: "Application web intégrant un Pong multijoueur en temps réel avec une interface moderne, une gestion avancée des utilisateurs et une architecture modulaire axée sur la sécurité et l'accessibilité.",
        tags: ["Next.js", "React", "WebSocket", "PostgreSQL", "Redis"],
        image: "https://img.youtube.com/vi/FeF9DL43HT0/hqdefault.jpg",
        links: [
          { label: "link.video", url: "https://www.youtube.com/watch?v=FeF9DL43HT0" },
          { label: "link.github", url: "https://github.com/Noe-prt/ft_transcendence" }
        ]
      },
      {
        id: "logotham",
        title: "Logotham",
        kind: "projects.personal",
        desc: "Application web pour la création d'icônes personnalisées avec des outils IA permettant la génération aléatoire d'icônes.",
        tags: ["Next.js", "TypeScript", "IA", "Tailwind"],
        image: "",
        gradient: ["#14532d", "#0b1410"],
        links: [
          { label: "link.live", url: "https://logotham.vercel.app/" },
          { label: "link.github", url: "https://github.com/Noe-prt/logotham" }
        ]
      },
      {
        id: "cub3d",
        title: "Cub3D",
        kind: "projects.student",
        desc: "Projet de design graphique créant une perspective 3D dans un labyrinthe grâce au raycasting, semblable au célèbre Wolfenstein 3D.",
        tags: ["C", "Raycasting", "Graphique"],
        image: "",
        gradient: ["#1f3a5f", "#0c1020"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/42-Cub3D" }
        ]
      },
      {
        id: "minishell",
        title: "Minishell",
        kind: "projects.student",
        desc: "Implémentation d'un shell Unix simple mettant l'accent sur les fonctionnalités du shell, la gestion des processus et la mémoire en C.",
        tags: ["C", "Processus", "Shell"],
        image: "",
        gradient: ["#2f2a3d", "#100e16"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/minishell" }
        ]
      },
      {
        id: "inception",
        title: "Inception",
        kind: "projects.student",
        desc: "Projet d'administration système utilisant Docker pour virtualiser plusieurs images dans une nouvelle machine virtuelle personnelle.",
        tags: ["Docker", "DevOps", "Linux"],
        image: "",
        gradient: ["#164e63", "#08121a"],
        links: [
          { label: "link.github", url: "https://github.com/Noe-prt/Inception" }
        ]
      }
    ],
    experience: [
      {
        period: "Fév 2026 — Jui 2026",
        role: "Développeur de jeux vidéo (stage)",
        org: "Adzap",
        desc: "Programmeur unique d'ElectroFix Simulator, un jeu de simulation coopératif créé en 3 mois et lancé avec succès sur Steam. Conception des systèmes de gameplay, de la réplication et de toute la programmation du jeu."
      },
      {
        period: "Nov 2024 — Aujourd'hui",
        role: "Étudiant",
        org: "École 42",
        desc: "Cursus de programmation intensif et peer-to-peer couvrant le C & C++, les algorithmes, les systèmes Unix, Docker et le développement web — en parallèle d'un apprentissage autodidacte du game development avec Unreal Engine."
      }
    ],
    skills: [
      { title: "skills.languages", list: ["C++", "Blueprint", "C", "C#", "GDScript", "TypeScript", "SQL"] },
      { title: "skills.gamedev", list: ["Unreal Engine", "Unity", "Godot", "Multijoueur / Réseau", "Systèmes de réplication", "Développement de plugins (Fab)", "Architecture Client-Serveur", "Game Systems Design"] },
      { title: "skills.web", list: ["React", "Next.js", "WebSocket", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "skills.backend", list: ["Redis", "PostgreSQL", "Stripe", "better-auth"] },
      { title: "skills.tools", list: ["Git", "Visual Studio", "Docker"] }
    ],
    hobbies: [
      { icon: "🎾", name: "Tennis", cls: "Tennis" },
      { icon: "⚽", name: "Football", cls: "Football" },
      { icon: "🎸", name: "Guitare", cls: "Guitare" },
      { icon: "🎮", name: "Jeux vidéo", cls: "Jeux vidéo" }
    ]
  }
};

/* ============================================================
   Render
   ============================================================ */

const initials = { electrofix: "EF", umps: "UMPS", fps: "FPS", transcendence: "P", logotham: "L", cub3d: "C", minishell: "$", inception: "I" };

function mediaHTML(p) {
  if (p.image) {
    const esc = p.image.replace(/"/g, "&quot;");
    return `<div class="project-media">
      <img src="${esc}" alt="${p.title}" loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=&quot;fallback&quot; style=&quot;--g1:${p.gradient ? p.gradient[0] : "#26263a"};--g2:${p.gradient ? p.gradient[1] : "#14141f"}&quot;>${initials[p.id]}</div>'"/>
    </div>`;
  }
  const g1 = p.gradient ? p.gradient[0] : "#26263a";
  const g2 = p.gradient ? p.gradient[1] : "#14141f";
  return `<div class="project-media"><div class="fallback" style="--g1:${g1};--g2:${g2}">${initials[p.id]}</div></div>`;
}

function linksHTML(links, t) {
  return links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${t[l.label]}</a>`).join("");
}

function renderProjects(lang) {
  const d = DATA[lang];
  const t = I18N[lang];
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = d.projects.map(p => `
    <article class="project-card">
      ${mediaHTML(p)}
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(x => `<span>${x}</span>`).join("")}</div>
        <div class="project-links">${linksHTML(p.links, t)}</div>
      </div>
    </article>`).join("");
}

function renderTimeline(lang) {
  const d = DATA[lang];
  document.getElementById("timeline").innerHTML = d.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-period">${e.period}</div>
      <div class="timeline-role">${e.role}</div>
      <div class="timeline-org">${e.org}</div>
      <p class="timeline-desc">${e.desc}</p>
    </div>`).join("");
}

function renderSkills(lang) {
  const d = DATA[lang];
  const t = I18N[lang];
  document.getElementById("skills-grid").innerHTML = d.skills.map(s => `
    <div class="skill-card">
      <h3>${t[s.title]}</h3>
      <div class="skill-chips">${s.list.map(x => `<span>${x}</span>`).join("")}</div>
    </div>`).join("");
}

function renderHobbies(lang) {
  const d = DATA[lang];
  document.getElementById("hobbies-list").innerHTML = d.hobbies.map(h => `
    <div class="hobby">
      <div class="hobby-icon">${h.icon}</div>
      <div class="hobby-name">${h.name}</div>
      <div class="hobby-class">${h.cls}</div>
    </div>`).join("");
}

/* ============================================================
   i18n wiring
   ============================================================ */

function applyLang(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  renderProjects(lang);
  renderTimeline(lang);
  renderSkills(lang);
  renderHobbies(lang);

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "en";
  try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
  applyLang(saved === "fr" ? "fr" : "en");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang === "fr" ? "fr" : "en"));
  });
});