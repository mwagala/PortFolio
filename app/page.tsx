import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morel Wagala | Projets personnels",
  description:
    "Portfolio de projets personnels pour candidatures de stage en génie logiciel.",
};

const projects = [
  {
    title: "Réservation de lavage auto à domicile",
    type: "Application d'affaires full-stack",
    className: "fullstack",
    status: "Fondations livrées",
    year: "2026",
    summary:
      "Plateforme web pour réserver des services de lavage auto à domicile, avec parcours client, prestataire et administration technique.",
    impact:
      "Le projet met en avant une architecture Flask structurée, une base PostgreSQL, des traitements asynchrones et une vraie discipline de qualité.",
    highlights: [
      "Authentification JWT, profils client/prestataire et validation des données.",
      "Réservations, disponibilités, services, commentaires et factures.",
      "Outbox transactionnelle, Celery, Redis, logs JSON et correlation_id.",
      "Tests pytest, Docker Compose, CI GitHub Actions et blueprint Render.",
    ],
    stack: [
      "Python",
      "Flask",
      "Jinja",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Pytest",
      "JWT",
    ],
    links: [
      {
        label: "Code GitHub",
        href: "https://github.com/mwagala/lavage_auto_h2026",
      },
    ],
    accent: "teal",
    previewTitle: "Booking platform",
    previewLines: ["Auth", "Reservations", "Outbox", "Health checks"],
  },
  {
    title: "Soumissions Agent",
    type: "Automatisation et mini-CRM",
    className: "automation",
    status: "MVP fonctionnel",
    year: "2026",
    summary:
      "Application Streamlit qui aide une entreprise d'entretien ménager à traiter les demandes de soumission reçues par courriel.",
    impact:
      "Le projet montre la capacité à transformer un processus manuel en workflow contrôlé avec validation humaine et intégrations prêtes à brancher.",
    highlights: [
      "Import de courriels via fournisseur interchangeable et mode démo local.",
      "Classification, extraction de données client et création de prospects.",
      "Mini-CRM SQLite avec statuts, rendez-vous, relances et pièces jointes.",
      "Adaptateur Microsoft Graph, rôles applicatifs et tests unitaires.",
    ],
    stack: [
      "Python",
      "Streamlit",
      "SQLite",
      "Microsoft Graph",
      "Docker",
      "Pytest",
      "OAuth",
    ],
    links: [],
    accent: "blue",
    previewTitle: "Lead workflow",
    previewLines: ["Inbox", "Extraction", "CRM", "Calendar"],
  },
  {
    title: "Tic-tac-toe de révélation",
    type: "Jeu web événementiel",
    className: "game",
    status: "Prototype jouable",
    year: "2026",
    summary:
      "Jeu web autonome pour révélation fille/garçon, avec logique tic-tac-toe, audio, écran public et animation finale.",
    impact:
      "Un projet plus créatif qui démontre l'attention à l'expérience utilisateur, à l'état d'interface et aux contraintes d'un événement réel.",
    highlights: [
      "Issue secrète configurée dans un champ admin masqué.",
      "Musique, effets sonores, voix et volumes séparés.",
      "Import optionnel d'invités en txt, csv, tsv ou xlsx.",
      "Règles de révélation adaptées pour éviter une fin anticlimatique.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Audio web", "ElevenLabs clips"],
    links: [],
    accent: "coral",
    previewTitle: "Reveal game",
    previewLines: ["Grid", "Secret", "Voice", "Finale"],
  },
  {
    title: "Application de gestion immobilière",
    type: "Projet à documenter",
    className: "upcoming",
    status: "Dossier détecté",
    year: "À préciser",
    summary:
      "Dossier présent dans l'espace de projets, mais sans fichiers lisibles localement au moment de générer ce portfolio.",
    impact:
      "La carte est prête pour accueillir le contexte fonctionnel, la stack et les liens dès que le contenu sera synchronisé ou documenté.",
    highlights: [
      "Ajouter le problème métier visé.",
      "Ajouter les principales fonctionnalités.",
      "Ajouter la stack et les décisions d'architecture.",
      "Ajouter un lien GitHub ou une démonstration si disponible.",
    ],
    stack: ["À compléter"],
    links: [],
    accent: "violet",
    previewTitle: "Next case study",
    previewLines: ["Domain", "Features", "Stack", "Demo"],
  },
];

const skills = [
  "Java",
  "C#",
  ".NET",
  "Python",
  "Flask",
  "JavaScript",
  "React",
  "Vue.js",
  "Node.js",
  "SQL Server",
  "MySQL",
  "Oracle",
  "Docker",
  "Git/GitHub",
  "API REST",
  "Tests",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="site-header" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Retour au début">
          <span>MW</span>
          <strong>Morel Wagala</strong>
        </a>
        <nav>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio de projets personnels</p>
          <h1>
            Développeur logiciel junior full-stack orienté applications
            d'affaires.
          </h1>
          <p className="hero-lede">
            Futur gradué en informatique à Québec, je construis des applications
            web, API, workflows automatisés et interfaces utiles avec une
            attention particulière à la qualité, aux bases de données et à la
            maintenabilité.
          </p>
          <div className="hero-actions" aria-label="Actions principales">
            <a className="button primary" href="#projets">
              Voir les projets
            </a>
            <a className="button" href="/cv-morel-wagala.pdf">
              Télécharger le CV
            </a>
            <a
              className="button ghost"
              href="https://github.com/mwagala"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Résumé professionnel">
          <div className="availability">
            <span className="signal" aria-hidden="true" />
            Ouvert aux stages en génie logiciel
          </div>
          <div className="profile-card">
            <div>
              <span className="profile-label">Profil</span>
              <strong>Full-stack junior</strong>
            </div>
            <p>
              C#/.NET, SQL, JavaScript et Python, avec projets concrets en
              Flask, Streamlit, Docker et intégrations API.
            </p>
          </div>
          <div className="metrics-grid" aria-label="Résumé des projets">
            <div>
              <strong>4</strong>
              <span>dossiers référencés</span>
            </div>
            <div>
              <strong>3</strong>
              <span>projets documentés</span>
            </div>
            <div>
              <strong>Python</strong>
              <span>backend et automatisation</span>
            </div>
            <div>
              <strong>SQL</strong>
              <span>données relationnelles</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section intro-band" aria-label="Ce que le portfolio montre">
        <div>
          <span className="section-kicker">Ce que je veux démontrer</span>
          <h2>Des projets qui ressemblent à du travail réel.</h2>
        </div>
        <p>
          Les projets ci-dessous couvrent des besoins métier, des workflows, de
          l'authentification, des bases relationnelles, des tests, de
          l'intégration Docker et des interfaces destinées à des utilisateurs non
          techniques.
        </p>
      </section>

      <section className="section projects-section" id="projets">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Projets personnels</span>
            <h2>Répertoire des projets du dossier</h2>
          </div>
          <p>
            Utilise les filtres pour lire le portfolio selon le type de
            compétence que tu veux mettre de l'avant dans une candidature.
          </p>
        </div>

        <fieldset className="filters" aria-label="Filtrer les projets">
          <legend>Filtrer</legend>
          <input defaultChecked id="filter-all" name="project-filter" type="radio" />
          <label htmlFor="filter-all">Tous</label>
          <input id="filter-fullstack" name="project-filter" type="radio" />
          <label htmlFor="filter-fullstack">Full-stack</label>
          <input id="filter-automation" name="project-filter" type="radio" />
          <label htmlFor="filter-automation">Automatisation</label>
          <input id="filter-game" name="project-filter" type="radio" />
          <label htmlFor="filter-game">Jeu web</label>
          <input id="filter-upcoming" name="project-filter" type="radio" />
          <label htmlFor="filter-upcoming">À documenter</label>
        </fieldset>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.className}`}
              key={project.title}
            >
              <div className={`project-visual ${project.accent}`} aria-hidden="true">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{project.previewTitle}</strong>
                <div className="preview-lines">
                  {project.previewLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div
                  className="stack-list"
                  aria-label={`Technologies utilisées pour ${project.title}`}
                >
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        className="text-link"
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="muted-link">Lien public à ajouter</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="competences">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Compétences</span>
            <h2>Stack technique</h2>
          </div>
          <p>
            Les compétences proviennent du CV et des projets locaux analysés dans
            ce dossier.
          </p>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section path-section" id="parcours">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Parcours</span>
            <h2>Formation et expérience</h2>
          </div>
          <p>
            Un profil construit à la jonction du service, des opérations et du
            développement logiciel.
          </p>
        </div>
        <div className="timeline">
          <article>
            <span>2023 - présent</span>
            <h3>BAC en informatique</h3>
            <p>Université Laval, avec spécialisation progressive en développement logiciel.</p>
          </article>
          <article>
            <span>2025</span>
            <h3>Certificat en informatique</h3>
            <p>Université Laval.</p>
          </article>
          <article>
            <span>Automne 2026</span>
            <h3>DEC - Programmation, bases de données et serveurs</h3>
            <p>Cégep de Ste-Foy.</p>
          </article>
          <article>
            <span>2024 - présent</span>
            <h3>Agent administratif - CHUL</h3>
            <p>
              Gestion de dossiers, coordination d'intervenants et suivi
              administratif avec Excel.
            </p>
          </article>
          <article>
            <span>2023 - 2024</span>
            <h3>Agent logistique - Bell Solutions Techniques</h3>
            <p>Gestion d'inventaire, coordination des équipements et des véhicules.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Disponible pour discuter d'un stage.</h2>
          <p>
            Français langue maternelle, anglais en lecture avancée et
            communication intermédiaire.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:wagala.morel@gmail.com">
            wagala.morel@gmail.com
          </a>
          <a className="button" href="tel:+14389924788">
            (438) 992-4788
          </a>
          <a
            className="button ghost"
            href="https://github.com/mwagala"
            target="_blank"
            rel="noreferrer"
          >
            github.com/mwagala
          </a>
        </div>
      </section>
    </main>
  );
}
