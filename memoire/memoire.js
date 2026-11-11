/* The thesis summary in English and French: one source for the drawer on the site and for memoire.html, which prints the PDFs.
   Checked against the thesis defended on 14 December 2023. Figures that the thesis gives in two different ways are left out. */
(() => {
  "use strict";
  const MAIL = "alexislekieffre@outlook.fr";
  const DATA = {
    en: {
      kicker: "Master's thesis · IÉSEG School of Management · defended on 14 December 2023",
      title: "The impact of artificial intelligence on how sport is distributed and consumed",
      question: "How is artificial intelligence changing the way amateur athletes train?",
      not: "This is not a thesis about generative AI. It studies the AI that was already inside watches and training apps in 2023: machine learning, video analysis, sensors. Generative AI reached training apps soon after.",
      figs: [["226", "survey respondents"], ["76%", "want more AI in their training (159 answers)"], ["40%", "say AI improved their running technique"], ["~36%", "say it helps them manage their time and adapt their sessions"]],
      sections: [
        ["Method", "A literature review of 53 references, from the NBA's work with Second Spectrum and HomeCourt to GoMore and the Stade Toulousain. Then an anonymous online survey on Qualtrics: 20 questions in six parts, piloted first and shared in sports communities. Descriptive statistics, then analyses of variance and association in SPSS."],
        ["What holds people back", ["Cost.", "Data that is hard to read.", "A lack of information, and some fear of AI.", "Doubts about the reliability of some advice."]],
        ["Recommendations", ["Make AI affordable for amateur athletes.", "Explain how it works, to take the fear out of it.", "Personalise it to each athlete.", "Collect and share user stories."]],
        ["Limits", "No qualitative interviews, an online sample, 72% of respondents aged 18 to 24, and a possible social desirability bias."],
        ["Where it led", "Three years later, I built for myself what the respondents were asking for: an AI coach that reads my own watch data. And explaining how AI works became part of my job."],
      ],
      foot: "The full thesis, 81 pages in French, is online next to this summary. Questions:",
      ask: "The full thesis, 81 pages in French, is available on request:",
      full: "Read the full thesis (PDF, 81 pages, in French)",
    },
    fr: {
      kicker: "Mémoire de master · IÉSEG School of Management · soutenu le 14 décembre 2023",
      title: "L'impact de l'intelligence artificielle sur les modèles de distribution et de consommation du sport",
      question: "Comment l'intelligence artificielle est-elle en train de transformer la préparation physique des sportifs amateurs ?",
      not: "Ce n'est pas un mémoire sur l'IA générative. Il étudie l'IA qui était déjà dans nos montres et nos applis d'entraînement en 2023 : machine learning, analyse vidéo, capteurs. L'IA générative est arrivée dans les applis d'entraînement juste après.",
      figs: [["226", "répondants à l'enquête"], ["76 %", "veulent plus d'IA dans leur préparation (159 réponses)"], ["40 %", "disent que l'IA a amélioré leur technique de course"], ["~36 %", "disent qu'elle les aide à mieux gérer leur temps et à adapter leurs séances"]],
      sections: [
        ["Méthode", "Une revue de littérature de 53 références, de la NBA avec Second Spectrum et HomeCourt à GoMore et au Stade Toulousain. Puis une enquête en ligne anonyme sur Qualtrics : 20 questions en six parties, testée en pilote et diffusée dans des communautés sportives. Statistiques descriptives, puis analyses de variance et d'association sous SPSS."],
        ["Les freins", ["Le coût.", "Des données difficiles à lire.", "Le manque d'information, et une certaine crainte de l'IA.", "Des doutes sur la fiabilité de certains conseils."]],
        ["Les recommandations", ["Rendre l'IA abordable pour les sportifs amateurs.", "Expliquer son fonctionnement, pour la dédramatiser.", "La personnaliser à chaque sportif.", "Recueillir et diffuser des témoignages d'utilisateurs."]],
        ["Les limites", "Pas d'entretiens qualitatifs, un échantillon en ligne, 72 % de répondants âgés de 18 à 24 ans, et un possible biais de désirabilité sociale."],
        ["Ce que ça a donné", "Trois ans plus tard, j'ai construit pour moi ce que demandaient les répondants : un coach IA qui lit les données de ma propre montre. Et expliquer le fonctionnement de l'IA est devenu une partie de mon métier."],
      ],
      foot: "Le mémoire complet, 81 pages en français, est en ligne avec cette synthèse. Questions :",
      ask: "Le mémoire complet, 81 pages en français, est disponible sur demande :",
      full: "Lire le mémoire complet (PDF, 81 pages)",
    },
  };
  // French typography: a narrow no-break space before : ; ? ! so they never start a line.
  const fixFr = (s) => s.replace(/ ([?!:;])/g, " $1");
  // full: the link to the whole thesis, shown in the drawer on the site (the printed summary has no button).
  // ask: where the full thesis cannot be linked (a hosted frame), the footer says it is sent on request.
  function html(lang, full, ask) {
    const fr = lang === "fr", d = DATA[fr ? "fr" : "en"], fix = fr ? fixFr : (s) => s;
    const sec = ([t, body]) => `<section class="cv-sec"><h3>${t}</h3>${Array.isArray(body) ? `<ul>${body.map((x) => `<li>${x}</li>`).join("")}</ul>` : `<p>${body}</p>`}</section>`;
    return fix(`<p class="cv-head">${d.kicker}</p><p class="memo-title">${d.title}</p><p class="memo-q">${d.question}</p><p class="memo-not">${d.not}</p>`
      + (full ? `<p class="memo-full"><a class="dive-btn" href="${full}" target="_blank" rel="noopener">${d.full}</a></p>` : "")
      + `<div class="memo-figs">${d.figs.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join("")}</div>`
      + d.sections.map(sec).join("")
      + `<p class="memo-foot">${ask ? d.ask : d.foot} <a href="mailto:${MAIL}">${MAIL}</a></p>`);
  }
  window.MEMO = { html };
})();
