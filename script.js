/* ============================================================
   Noé Pareti | Portfolio (FR/EN)
   ============================================================ */

const I18N = {
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Parcours",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "hero.greeting": "Bonjour, je suis",
    "hero.role": "Développeur Web Full Stack",
    "hero.sub": "Je conçois des applications web complètes avec React, Next.js, TypeScript et PostgreSQL, du schéma de base de données jusqu'à l'interface.",
    "hero.viewProjects": "Voir les projets",
    "hero.ageLine": "20 ans · Étudiant à 42 Paris",
    "hero.location": "Courbevoie · Paris",
    "hero.caption": "Des produits web utiles, pensés pour durer.",
    "about.title": "À propos",
    "about.body": "Étudiant à 42 Paris depuis novembre 2024, je prépare le titre RNCP niveau 7 « Expert en architecture informatique ». Je développe des applications web full stack : interfaces React / Next.js, API typées en TypeScript, bases PostgreSQL et déploiement. Pendant mon stage de 6 mois chez Adzap, j'ai conçu et livré seul un produit multijoueur en production — une expérience qui m'a appris à gérer un projet de bout en bout, à tenir des délais et à penser architecture client-serveur.",
    "about.web": "Applications web",
    "about.intern": "Mois de stage en production",
    "about.degree": "Titre en cours à 42 Paris",
    "projects.title": "Projets choisis",
    "projects.sub": "Applications web full stack, projets d'infrastructure à 42 et produits livrés en production.",
    "projects.badgeSchool": "42 Paris",
    "projects.badgePersonal": "Perso",
    "projects.badgeProfessional": "Pro",
    "experience.title": "Parcours",
    "skills.title": "Compétences",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end & données",
    "skills.languages": "Langages",
    "skills.devops": "DevOps & outils",
    "skills.soft": "Soft skills",
    "skills.also": "Également",
    "filter.all": "Tous",
    "filter.web": "Applications web",
    "filter.systems": "Systèmes & DevOps",
    "filter.other": "Temps réel & autres",
    "projects.filters": "Catégories de projets",
    "hobbies.title": "En dehors du code",
    "contact.title": "Travaillons ensemble",
    "footer.text": "© 2026 Noé Pareti. Conçu avec du HTML, CSS & JS pur.",
    "link.github": "GitHub",
    "link.video": "Voir la vidéo",
    "link.live": "Démo en ligne",
    "link.steam": "Steam",
    "link.fab": "Fab"
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Background",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full Stack Web Developer",
    "hero.sub": "I build complete web applications with React, Next.js, TypeScript and PostgreSQL, from the database schema all the way to the UI.",
    "hero.viewProjects": "View projects",
    "hero.ageLine": "20 years old · 42 Paris student",
    "hero.location": "Courbevoie · Paris",
    "hero.caption": "Useful web products, built to last.",
    "about.title": "About",
    "about.body": "I've been studying at 42 Paris since November 2024, working towards the RNCP level 7 \"IT Architecture Expert\" degree (Master's equivalent). I build full stack web applications: React / Next.js interfaces, typed TypeScript APIs, PostgreSQL databases and deployment. During my 6-month internship at Adzap, I designed and shipped a multiplayer product to production on my own — which taught me to own a project end to end, meet deadlines and think in client-server architecture.",
    "about.web": "Web applications",
    "about.intern": "Month internship in production",
    "about.degree": "Degree I'm pursuing at 42 Paris",
    "projects.title": "Selected work",
    "projects.sub": "Full stack web applications, infrastructure projects at 42 and products shipped to production.",
    "projects.badgeSchool": "42 Paris",
    "projects.badgePersonal": "Personal",
    "projects.badgeProfessional": "Professional",
    "experience.title": "Background",
    "skills.title": "Skills",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end & data",
    "skills.languages": "Languages",
    "skills.devops": "DevOps & tools",
    "skills.soft": "Soft skills",
    "skills.also": "Also",
    "filter.all": "All",
    "filter.web": "Web apps",
    "filter.systems": "Systems & DevOps",
    "filter.other": "Real-time & other",
    "projects.filters": "Project categories",
    "hobbies.title": "Outside of code",
    "contact.title": "Let's work together",
    "footer.text": "© 2026 Noé Pareti. Built with vanilla HTML, CSS & JS.",
    "link.github": "GitHub",
    "link.video": "Watch video",
    "link.live": "Live demo",
    "link.steam": "Steam",
    "link.fab": "Fab"
  }
};

/* ============================================================
   Content data (per language)
   Order matters: web projects first.
   ============================================================ */

const LINKS = {
  coupletogether: [{ label: "link.live", url: "https://couple-schedule-navy.vercel.app/" }, { label: "link.github", url: "https://github.com/Noe-prt/CoupleSchedule" }],
  transcendence: [{ label: "link.video", url: "https://www.youtube.com/watch?v=FeF9DL43HT0" }, { label: "link.github", url: "https://github.com/Noe-prt/ft_transcendence" }],
  logotham: [{ label: "link.live", url: "https://logotham.vercel.app/" }, { label: "link.github", url: "https://github.com/Noe-prt/logotham" }],
  electrofix: [{ label: "link.steam", url: "https://store.steampowered.com/app/4194550/ElectroFix_Simulator/" }],
  inception: [{ label: "link.github", url: "https://github.com/Noe-prt/Inception" }],
  minishell: [{ label: "link.github", url: "https://github.com/Noe-prt/minishell" }],
  umps: [{ label: "link.fab", url: "https://www.fab.com/listings/0da4dac5-8190-4b24-8a4c-5db19f417f56" }],
  cub3d: [{ label: "link.github", url: "https://github.com/Noe-prt/42-Cub3D" }]
};

const IMAGES = {
  coupletogether: "assets/projects/CoupleTogether.svg",
  transcendence: "https://img.youtube.com/vi/FeF9DL43HT0/hqdefault.jpg",
  logotham: "assets/projects/Logotham.png",
  electrofix: "assets/projects/Electrofix.jpg",
  inception: "assets/projects/Inception.svg",
  minishell: "assets/projects/Minishell.svg",
  umps: "assets/projects/UMPS.jpg",
  cub3d: "assets/projects/Cub3D.jpg"
};

const META = {
  coupletogether: { title: "CoupleTogether", kind: "personal", tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod"] },
  transcendence: { title: "ft_transcendence", kind: "school", tags: ["Next.js", "React", "WebSocket", "PostgreSQL", "Redis"] },
  logotham: { title: "Logotham", kind: "personal", tags: ["Next.js", "TypeScript", "Tailwind", "AI APIs"] },
  electrofix: { title: "ElectroFix Simulator", kind: "professional", tags: ["C++", "Client-server", "Real-time sync", "Unreal Engine"] },
  inception: { title: "Inception", kind: "school", tags: ["Docker", "Docker Compose", "NGINX", "MariaDB", "Linux"] },
  minishell: { title: "Minishell", kind: "school", tags: ["C", "Unix", "Processes", "Pipes", "Signals"] },
  umps: { title: "UMPS", kind: "personal", tags: ["C++", "Plugin", "Multiplayer", "Unreal Engine"] },
  cub3d: { title: "Cub3D", kind: "school", tags: ["C", "Raycasting", "Graphics"] }
};

const DESC = {
  fr: {
    coupletogether: "Application web de planning partagé pour les couples : emplois du temps de chacun jour par jour, événements récurrents, duplication de journées ou de semaines. API REST validée avec Zod, migrations PostgreSQL, vues responsive et contrôles de version qui empêchent les conflits d'édition simultanée. Déployée sur Vercel.",
    transcendence: "Application web complète autour d'un Pong multijoueur en temps réel via WebSocket : authentification, gestion des utilisateurs, interface moderne et architecture modulaire pensée pour la sécurité et l'accessibilité.",
    logotham: "Application web de génération d'icônes personnalisées grâce à des outils d'IA, avec génération aléatoire. Développée en Next.js / TypeScript et déployée sur Vercel.",
    electrofix: "Produit livré en production pendant mon stage chez Adzap : seul développeur, de la conception à la sortie sur Steam en 3 mois. Architecture client-serveur et synchronisation temps réel entre joueurs.",
    inception: "Infrastructure web conteneurisée avec Docker Compose sur une VM Linux : NGINX en HTTPS (TLS), WordPress / php-fpm et MariaDB, chacun dans son conteneur, reliés par un réseau Docker dédié avec volumes persistants.",
    minishell: "Shell Unix inspiré de bash, écrit en C : parsing des commandes, pipes, redirections et heredoc, variables d'environnement, gestion des processus (fork / execve) et des signaux, sans fuite mémoire.",
    umps: "Plugin publié sur la marketplace Fab qui simule un smartphone en multijoueur (messages, appels vidéo, caméra, navigateur web…). Produit distribué à des utilisateurs réels.",
    cub3d: "Moteur de rendu 3D par raycasting en C, inspiré de Wolfenstein 3D."
  },
  en: {
    coupletogether: "Shared scheduling web app for couples: each partner's plans day by day, recurring events, day and week duplication. REST API validated with Zod, PostgreSQL migrations, responsive views and version checks that prevent concurrent-edit conflicts. Deployed on Vercel.",
    transcendence: "Full web application built around real-time multiplayer Pong over WebSocket: authentication, user management, modern UI and a modular architecture focused on security and accessibility.",
    logotham: "Web app that generates custom icons with AI tools, including random generation. Built with Next.js / TypeScript and deployed on Vercel.",
    electrofix: "Product shipped to production during my internship at Adzap: sole developer, from design to Steam release in 3 months. Client-server architecture and real-time synchronization between players.",
    inception: "Containerized web infrastructure with Docker Compose on a Linux VM: NGINX over HTTPS (TLS), WordPress / php-fpm and MariaDB, each in its own container, linked by a dedicated Docker network with persistent volumes.",
    minishell: "Bash-inspired Unix shell written in C: command parsing, pipes, redirections and heredoc, environment variables, process (fork / execve) and signal handling, with no memory leaks.",
    umps: "Plugin published on the Fab marketplace that simulates a smartphone in multiplayer (messages, video calls, camera, web browser…). A product distributed to real users.",
    cub3d: "3D raycasting renderer written in C, inspired by Wolfenstein 3D."
  }
};

const ORDER = ["coupletogether", "transcendence", "logotham", "electrofix", "inception", "minishell", "umps", "cub3d"];

const buildProjects = lang => ORDER.map(id => ({
  id, ...META[id], desc: DESC[lang][id], image: IMAGES[id], links: LINKS[id]
}));

const DATA = {
  fr: {
    projects: buildProjects("fr"),
    experience: [
      {
        period: "Fév. 2026 → Juil. 2026",
        role: "Développeur C++ (stage 6 mois)",
        org: "Adzap · studio de jeux vidéo",
        desc: "Seul développeur d'ElectroFix Simulator, de la conception à la mise en production sur Steam en 3 mois. Architecture client-serveur, synchronisation réseau temps réel, cycle de livraison complet (Git, builds, publication)."
      },
      {
        period: "Nov. 2024 → aujourd'hui",
        role: "Expert en architecture informatique · RNCP 7",
        org: "42 Paris",
        desc: "Tronc commun validé : C, C++, algorithmique, systèmes Unix, réseau, Docker et développement web. Pédagogie par projets et peer-learning, sans cours magistraux."
      }
    ],
    skills: [
      { title: "skills.frontend", list: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Responsive design", "Accessibilité"] },
      { title: "skills.backend", list: ["Node.js", "API REST", "WebSocket", "PostgreSQL", "Redis", "Drizzle ORM", "Migrations", "Zod", "better-auth", "Stripe"] },
      { title: "skills.languages", list: ["TypeScript", "JavaScript", "SQL", "C", "C++"] },
      { title: "skills.devops", list: ["Git / GitHub", "Docker", "Docker Compose", "Linux", "Vercel", "ESLint"] },
      { title: "skills.soft", list: ["Autonomie", "Peer-learning", "Code review", "Résolution de problèmes", "Respect des délais"] },
      { title: "skills.also", list: ["Architecture client-serveur", "Temps réel / réseau", "Unreal Engine"] }
    ],
    hobbies: [
      { icon: "🎮", name: "Création de jeux vidéo" },
      { icon: "🎾", name: "Tennis" },
      { icon: "⚽", name: "Football" },
      { icon: "🎸", name: "Guitare" }
    ]
  },
  en: {
    projects: buildProjects("en"),
    experience: [
      {
        period: "Feb 2026 → Jul 2026",
        role: "C++ Developer (6-month internship)",
        org: "Adzap · game studio",
        desc: "Sole developer of ElectroFix Simulator, from design to production release on Steam in 3 months. Client-server architecture, real-time network synchronization, full release cycle (Git, builds, publishing)."
      },
      {
        period: "Nov 2024 → present",
        role: "IT Architecture Expert · RNCP level 7",
        org: "42 Paris",
        desc: "Completed common core: C, C++, algorithms, Unix systems, networking, Docker and web development. Project-based, peer-to-peer learning with no lectures."
      }
    ],
    skills: [
      { title: "skills.frontend", list: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Responsive design", "Accessibility"] },
      { title: "skills.backend", list: ["Node.js", "REST APIs", "WebSocket", "PostgreSQL", "Redis", "Drizzle ORM", "Migrations", "Zod", "better-auth", "Stripe"] },
      { title: "skills.languages", list: ["TypeScript", "JavaScript", "SQL", "C", "C++"] },
      { title: "skills.devops", list: ["Git / GitHub", "Docker", "Docker Compose", "Linux", "Vercel", "ESLint"] },
      { title: "skills.soft", list: ["Autonomy", "Peer-learning", "Code review", "Problem solving", "Meeting deadlines"] },
      { title: "skills.also", list: ["Client-server architecture", "Real-time / networking", "Unreal Engine"] }
    ],
    hobbies: [
      { icon: "🎮", name: "Game development" },
      { icon: "🎾", name: "Tennis" },
      { icon: "⚽", name: "Football" },
      { icon: "🎸", name: "Guitar" }
    ]
  }
};

/* ============================================================
   Render
   ============================================================ */

const initials = { coupletogether: "CT", electrofix: "EF", umps: "UMPS", transcendence: "P", logotham: "L", cub3d: "C", minishell: "$", inception: "I" };

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

const badgeKeyFor = (kind) =>
  kind === "school" ? "projects.badgeSchool"
  : kind === "professional" ? "projects.badgeProfessional"
  : "projects.badgePersonal";

let activeFilter = "all";
let currentLang = "fr";
const categoryFor = id => ["coupletogether", "transcendence", "logotham"].includes(id) ? "web"
  : ["inception", "minishell", "cub3d"].includes(id) ? "systems" : "other";

function renderProjects(lang) {
  const d = DATA[lang];
  const t = I18N[lang];
  const grid = document.getElementById("projects-grid");
  document.getElementById("web-count").textContent = d.projects.filter(p => categoryFor(p.id) === "web").length;
  grid.innerHTML = d.projects.filter(p => activeFilter === "all" || categoryFor(p.id) === activeFilter).map(p => `
    <article class="project-card${categoryFor(p.id) === "web" ? " project-card--web" : ""}">
      <span class="badge badge-${p.kind}">${t[badgeKeyFor(p.kind)]}</span>
      ${mediaHTML(p)}
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(x => `<span>${x}</span>`).join("")}</div>
        ${p.links.length ? `<div class="project-links">${linksHTML(p.links, t)}</div>` : ""}
      </div>
    </article>`).join("");
}

function renderTimeline(lang) {
  const d = DATA[lang];
  document.getElementById("timeline").innerHTML = d.experience.map(e => `
    <div class="timeline-item${e.open ? " timeline-item--open" : ""}">
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
    </div>`).join("");
}

/* ============================================================
   i18n wiring
   ============================================================ */

function applyLang(lang) {
  currentLang = lang;
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

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t[el.dataset.i18nAria]);
  });
  renderProjects(lang);
  renderTimeline(lang);
  renderSkills(lang);
  renderHobbies(lang);

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (!saved) saved = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  applyLang(saved === "en" ? "en" : "fr");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach(filter => {
        filter.classList.toggle("active", filter === btn);
        filter.setAttribute("aria-pressed", String(filter === btn));
      });
      renderProjects(currentLang);
    });
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang === "en" ? "en" : "fr"));
  });
});
