/* The CV in English and French: one source for the CV panel on the site and for cv.html, which prints the PDFs.
   From the CV of 3 November 2026, with three changes for a public page: no phone number, no client name. */
(() => {
  "use strict";
  const MAIL = ["alexislekieffre@outlook.fr", "mailto:alexislekieffre@outlook.fr"];
  const LINKEDIN = ["linkedin.com/in/alexis-lekieffre", "https://www.linkedin.com/in/alexis-lekieffre/"];
  const DATA = {
    en: {
      headline: "Business Development | AI Deployment | French Market",
      contact: [MAIL, LINKEDIN, ["French, English"]],
      summary: "Almost three years across executive search and consulting. Consulting taught me how organisations decide and buy, and showed me that my real strength is commercial: talking to decision makers and turning those conversations into pipeline. Now moving into full-time sales to carry a quota in the French market and grow into an Account Executive role. Track record: 13 senior executives sourced and placed through outbound outreach, and a 70% response rate on B2B prospecting. My edge: 25+ AI agents built and ~200 employees trained, so I can talk data and AI with IT and business buyers.",
      sections: [
        { title: "Professional experience", entries: [
          { org: "Nexialog Consulting", place: "Paris, France", role: "Strategy Analyst | Corporate Strategy &amp; AI Transformation", dates: "Jan 2025 - Present",
            context: "Management consulting in banking and insurance risk (200+ consultants), regulated financial services environment",
            bullets: [
              ["Account research &amp; targeting", "built account intelligence dashboards with Claude Code, crossing Salesforce data, org charts and web signals, for a top-3 European insurer (381 stakeholders across 17 divisions, 35 use cases scored, next step per contact) and a CAC 40 energy major (25 named decision makers, 90-day outreach plan); validated by sales leadership"],
              ["Partnerships &amp; business development", "41-partner pipeline (Fintech, Insurtech, RegTech, software vendors) qualified and scored by stage; 20 active, 10 advanced, incl. a signed LOI (POC under way) and R&amp;D partnerships with 3 insurers"],
              ["AI deployment &amp; project management", "led the firm-wide AI programme end to end, from use-case qualification with business and IT stakeholders to rollout, training of ~200 employees and adoption tracking; built 25+ AI agents, incl. a RAG knowledge base used by 20 colleagues, a tender analysis agent and a Salesforce-connected sales assistant"],
              ["Corporate strategy &amp; market intelligence", "co-leading the 2026-2030 Strategic Plan with direct C-level exposure; created the firm's weekly market newsletter on banking and insurance risk (~200 recipients)"]],
            after: "Previously Intern (Jan.-Aug. 2025): Belgian subsidiary set-up, GenAI proposal-automation POC, M&amp;A due diligence" },
          { org: "Intys Consulting", place: "Brussels, Belgium", role: "Strategy Analyst Intern | AI-driven Performance Improvement", dates: "Jul 2024 - Dec 2024",
            bullets: [["", "Co-led the internal AI roll-out (NexusGPT); market analyses and competitive positioning for B2G clients"]] },
          { org: "Synapse Executive Search", place: "Paris, France", role: "Research Associate Intern | Executive Search", dates: "Jan 2024 - Jun 2024",
            bullets: [
              ["Outbound pipeline generation", "targeting senior executives on LinkedIn Recruiter, persona-specific cold outreach by InMail and phone, qualification call before handoff to the first interview; 13 placements across 5 sectors (Managing Director FMCG/Luxury, Biotech CFO, Medical Director, Stadium Project Director at a top-flight football club, etc.)"],
              ["Revenue impact", "placements on €120k-€200k+ packages billed at 20% of annual salary, est. €250k+ in fees"],
              ["Activity", "avg. 5 candidate interviews per day (phone, in person) plus extensive social selling (LinkedIn InMail)"],
              ["Recognition", "first intern offered a full-time position at the end of the internship"]] },
          { org: "Diomès", place: "Paris, France", role: "Business Developer Intern (B2B) | Corporate events start-up", dates: "Jan 2022 - Feb 2022",
            bullets: [
              ["", "Built an 8-touch, 25-day multichannel follow-up sequence (phone, email, LinkedIn) and a call script; about 70% response rate on my prospecting (CEO's recommendation letter)"],
              ["", "Handled inbound leads and the deal flow, followed each order through production and supervised a production team of 3"]] }] },
        { title: "Education", entries: [
          { org: "IÉSEG School of Management", place: "Lille, France", role: "Master in General Management &amp; Strategy Consulting", dates: "Sep 2022 - Jun 2025",
            bullets: [["", "Triple-accredited (AACSB, EQUIS, AMBA). Thesis: The Impact of AI on Sports Distribution and Consumption Models"]] },
          { org: "SKEMA Business School", place: "Lille, France", role: "Bachelor's Degree in Economics and Management with Preparation for PGE Exams", dates: "Sep 2018 - Jun 2022" }] },
        { title: "Extracurricular activities &amp; projects", bullets: [
          ["NexiaAngels investment club", "(Sep 2025 - Ongoing) fintech and insurtech deal screening and due diligence"],
          ["Running", "Paris Marathon 2026 (3h11), T24 (24h relay), GR20 crossing, 62 km mountain trail (11h04), 105 km ultra-trail in 16h53 (Oct 2026)"]] },
        { title: "Skills and interests", rows: [
          ["Sales", "outbound pipeline generation, multi-channel prospecting (phone, email, LinkedIn), ICP qualification, account-based targeting, stakeholder mapping, social selling, pipeline management"],
          ["Tools", "Salesforce CRM (account analysis), LinkedIn Recruiter, Excel (advanced), PowerPoint (advanced), Power BI"],
          ["AI / Data", "AI agents &amp; RAG (Dust, Claude Code), MCP integrations, process automation; personal builds: AI running coach on my own Coros data (open-source MCP server), stock-picking app with financial news watch"],
          ["Languages", "French (native), English (fluent)"],
          ["Interests", "Entrepreneurship, finance &amp; markets, technology, sport (tennis, running, football, F1), travel"]] }],
    },
    fr: {
      headline: "Business Development | Déploiement de l'IA | Marché français",
      contact: [MAIL, LINKEDIN, ["Français, anglais"]],
      summary: "Presque trois ans entre la chasse de têtes et le conseil. Le conseil m'a appris comment les organisations décident et achètent, et m'a montré que ma vraie force est commerciale : parler aux décideurs et transformer ces échanges en pipeline. Je passe désormais à la vente à plein temps, avec un objectif chiffré sur le marché français, pour évoluer vers un poste d'Account Executive. En chiffres : 13 dirigeants approchés en prospection directe et placés, et un taux de réponse de 70 % en prospection B2B. Mon atout : plus de 25 agents IA construits et environ 200 collaborateurs formés, de quoi parler data et IA avec les acheteurs métier comme avec l'IT.",
      sections: [
        { title: "Expérience professionnelle", entries: [
          { org: "Nexialog Consulting", place: "Paris, France", role: "Strategy Analyst | Stratégie corporate et transformation IA", dates: "Janv. 2025 - Aujourd'hui",
            context: "Conseil en management, risques banque et assurance (plus de 200 consultants), environnement régulé",
            bullets: [
              ["Ciblage et connaissance des comptes", "tableaux de bord d'intelligence de compte construits avec Claude Code, croisant données Salesforce, organigrammes et signaux web, pour un assureur européen du top 3 (381 interlocuteurs dans 17 directions, 35 cas d'usage notés, une prochaine étape par contact) et un groupe énergétique du CAC 40 (25 décideurs identifiés, plan d'approche à 90 jours) ; validés par la direction commerciale"],
              ["Partenariats et développement commercial", "pipeline de 41 partenaires (fintech, insurtech, RegTech, éditeurs) qualifiés et notés par étape ; 20 actifs, 10 avancés, dont une lettre d'intention signée (POC en cours) et des partenariats R&amp;D avec 3 assureurs"],
              ["Déploiement de l'IA et gestion de projet", "pilotage de bout en bout du programme IA du cabinet, de la qualification des cas d'usage avec les métiers et l'IT jusqu'au déploiement, à la formation d'environ 200 collaborateurs et au suivi de l'adoption ; plus de 25 agents IA, dont une base de connaissances RAG utilisée par 20 collègues, un agent d'analyse d'appels d'offres et un assistant commercial connecté à Salesforce"],
              ["Stratégie et veille de marché", "co-pilotage du Plan stratégique 2026-2030, en lien direct avec la direction générale ; création de la newsletter hebdomadaire du cabinet sur les risques banque et assurance (environ 200 destinataires)"]],
            after: "Auparavant en stage (janv. à août 2025) : filiale belge, POC GenAI sur les propositions commerciales, due diligence M&amp;A" },
          { org: "Intys Consulting", place: "Bruxelles, Belgique", role: "Strategy Analyst, stage | Amélioration de la performance par l'IA", dates: "Juil. 2024 - Déc. 2024",
            bullets: [["", "Co-pilotage du déploiement interne de l'IA (NexusGPT) ; analyses de marché et positionnement concurrentiel pour des clients B2G"]] },
          { org: "Synapse Executive Search", place: "Paris, France", role: "Research Associate, stage | Chasse de têtes", dates: "Janv. 2024 - Juin 2024",
            bullets: [
              ["Génération de pipeline", "ciblage de dirigeants sur LinkedIn Recruiter, approche directe adaptée à chaque persona par InMail et téléphone, appel de qualification avant le premier entretien client ; 13 placements dans 5 secteurs (directeur général FMCG et luxe, CFO biotech, directeur médical, directeur de projet stade pour un grand club de football, etc.)"],
              ["Chiffre d'affaires", "placements sur des rémunérations de 120 k€ à plus de 200 k€, facturés 20 % du salaire annuel, soit plus de 250 k€ d'honoraires estimés"],
              ["Activité", "5 entretiens candidats par jour en moyenne (téléphone, présentiel) et social selling soutenu (InMail LinkedIn)"],
              ["Reconnaissance", "CDI proposé à la fin du stage, une première pour un stage dans le cabinet"]] },
          { org: "Diomès", place: "Paris, France", role: "Business Developer B2B, stage | Start-up d'événementiel d'entreprise", dates: "Janv. 2022 - Févr. 2022",
            bullets: [
              ["", "Séquence de relance multicanale de 8 contacts sur 25 jours (téléphone, e-mail, LinkedIn) et script d'appel ; environ 70 % de taux de réponse en prospection (lettre du directeur général)"],
              ["", "Suivi des leads entrants, du deal flow et des commandes jusqu'à la production ; encadrement d'une équipe de 3 personnes"]] }] },
        { title: "Formation", entries: [
          { org: "IÉSEG School of Management", place: "Lille, France", role: "Master in General Management &amp; Strategy Consulting", dates: "Sept. 2022 - Juin 2025",
            bullets: [["", "Triple accréditation (AACSB, EQUIS, AMBA). Mémoire : l'impact de l'IA sur la distribution et la consommation du sport"]] },
          { org: "SKEMA Business School", place: "Lille, France", role: "Bachelor Économie et Management, préparation aux concours des Grandes Écoles", dates: "Sept. 2018 - Juin 2022" }] },
        { title: "Activités extra-professionnelles et projets", bullets: [
          ["Club d'investissement NexiaAngels", "(sept. 2025 - en cours) sélection et due diligence de dossiers fintech et insurtech"],
          ["Course à pied", "Marathon de Paris 2026 (3h11), T24 (relais 24 h), GR20, trail de 62 km (11 h 04), ultra-trail de 105 km en 16 h 53 (oct. 2026)"]] },
        { title: "Compétences et centres d'intérêt", rows: [
          ["Vente", "génération de pipeline en prospection directe, prospection multicanale (téléphone, e-mail, LinkedIn), qualification selon l'ICP, ciblage par compte, cartographie des interlocuteurs, social selling, gestion du pipeline"],
          ["Outils", "Salesforce CRM (analyse de comptes), LinkedIn Recruiter, Excel (avancé), PowerPoint (avancé), Power BI"],
          ["IA et data", "agents IA et RAG (Dust, Claude Code), intégrations MCP, automatisation ; projets personnels : coach running IA sur mes données Coros (serveur MCP open source), appli de stock picking avec veille financière"],
          ["Langues", "français (langue maternelle), anglais (courant)"],
          ["Centres d'intérêt", "entrepreneuriat, finance et marchés, technologie, sport (tennis, course à pied, football, F1), voyage"]] }],
    },
  };
  // French typography: a narrow no-break space before : ; ? ! so they never start a line.
  const fixFr = (s) => s.replace(/ ([?!:;])/g, " $1");
  function html(lang) {
    const fr = lang === "fr", cv = DATA[fr ? "fr" : "en"], fix = fr ? fixFr : (s) => s, sep = fr ? " : " : ": ";
    const li = ([b, t]) => `<li>${b ? `<b>${b}</b>${t.startsWith("(") ? " " : sep}` : ""}${t}</li>`;
    const contact = cv.contact.map(([t, h]) => (h ? `<a href="${h}"${h.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${t}</a>` : `<span>${t}</span>`)).join("");
    const sections = cv.sections.map((s) => {
      const entries = (s.entries || []).map((e) => `<div class="cv-entry"><p class="cv-org"><b>${e.org}</b><span>${e.place}</span></p><p class="cv-role"><span>${e.role}</span><span class="cv-dates">${e.dates}</span></p>${e.context ? `<p class="cv-ctx">${e.context}</p>` : ""}${e.bullets ? `<ul>${e.bullets.map(li).join("")}</ul>` : ""}${e.after ? `<p class="cv-after">${e.after}</p>` : ""}</div>`).join("");
      const bullets = s.bullets ? `<ul>${s.bullets.map(li).join("")}</ul>` : "";
      const rows = s.rows ? `<dl class="cv-rows">${s.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>` : "";
      return `<section class="cv-sec"><h3>${s.title}</h3>${entries}${bullets}${rows}</section>`;
    }).join("");
    return fix(`<p class="cv-head">${cv.headline}</p><p class="cv-contact">${contact}</p><p class="cv-sum">${cv.summary}</p>${sections}`);
  }
  window.CV = { html };
})();
