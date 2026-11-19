import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morel Wagala | Projets personnels",
  description:
    "Portfolio de Morel Wagala, étudiant en informatique à l'Université Laval et développeur logiciel full-stack à Québec.",
};

const projects = [
  {
    title: "Réservation de lavage auto à domicile",
    type: "Application d'affaires full-stack",
    status: "Déployée",
    year: "2025",
    summary:
      "Plateforme web pour réserver des services de lavage auto à domicile, avec parcours client, prestataire et administration technique.",
    impact:
      "Celery et Redis traitent les événements de réservation en arrière-plan, sans bloquer le parcours utilisateur.",
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
      "Vue.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Pytest",
      "JWT",
    ],
    links: [
      {
        label: "Démo live",
        href: "https://lavage-auto-web.onrender.com/",
      },
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
    title: "YabaImmo",
    type: "Application de gestion immobilière",
    status: "Fonctionnel",
    year: "2026",
    summary:
      "Application web full-stack conçue pour gérer des immeubles locatifs, leurs logements, leurs locataires et leurs baux.",
    impact:
      "Le tableau de bord rapproche les loyers attendus, les paiements reçus et les dépenses par immeuble et par période.",
    highlights: [
      "Suivi des baux, historique d'occupation, paiements partiels et alertes de retard.",
      "Gestion des dépenses récurrentes, des interventions de maintenance et des fournisseurs.",
      "Import Excel avec prévisualisation, rapports financiers et exports CSV/PDF.",
      "Gestion de plusieurs pays et devises, droits d'accès par rôle et par pays, et journal d'audit.",
      "Contrôles qualité automatisés avec GitHub Actions et environnement portable avec Docker.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Vitest",
      "Playwright",
    ],
    links: [],
    accent: "blue",
    previewTitle: "Gestion locative",
    previewLines: ["Immeubles", "Baux et loyers", "Maintenance", "Rapports"],
  },
  {
    title: "Tic-tac-toe de révélation",
    type: "Jeu web événementiel",
    status: "Prototype jouable",
    year: "2026",
    summary:
      "Jeu de tic-tac-toe autonome conçu pour annoncer le sexe d'un bébé lors d'un événement.",
    impact:
      "L'organisateur configure la révélation à l'avance. Les invités découvrent le résultat dans une animation finale.",
    highlights: [
      "Grille interactive et affichage public qui garde le résultat secret jusqu'à la révélation.",
      "Annonces vocales, musique de fond et effets sonores avec réglages de volume indépendants.",
      "Import facultatif d'une liste d'invités pour personnaliser les remerciements.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Web Audio API"],
    links: [],
    accent: "coral",
    previewTitle: "Jeu de révélation",
    previewLines: ["Grille", "Annonces vocales", "Révélation", "Remerciements"],
  },
];

const skills = [
  "C#",
  "Java",
  "JavaScript",
  "TypeScript",
  ".NET",
  "React",
  "Angular",
  "Vue.js",
  "Next.js",
  "Flask/Jinja",
  "NUnit",
  "JUnit",
  "Git/GitHub",
  "Docker",
  "Visual Studio",
  "VS Code",
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
          <h1>Développeur logiciel full-stack</h1>
          <p className="hero-lede">
            J'étudie en informatique à l'Université Laval et je prévois obtenir
            mon diplôme en avril 2027. À l'automne 2026, je contribue à la
            modernisation d'une application interne avec Angular et .NET dans
            le cadre de mon stage au ministère des Ressources naturelles et des
            Forêts.
          </p>
          <div className="hero-actions" aria-label="Actions principales">
            <a className="button primary" href="#projets">
              Voir les projets
            </a>
            <a className="button" href="/cv-morel-wagala.pdf" download>
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
            Québec, QC
          </div>
          <div className="profile-card">
            <div>
              <span className="profile-label">Profil</span>
              <strong>Développement web</strong>
            </div>
            <p>
              Angular et .NET en stage. Next.js, React, Python et Vue.js en
              projets personnels.
            </p>
          </div>
          <div className="metrics-grid" aria-label="Résumé des projets">
            <div>
              <strong>{projects.length}</strong>
              <span>projets présentés</span>
            </div>
            <div>
              <strong>Next.js</strong>
              <span>gestion immobilière</span>
            </div>
            <div>
              <strong>Python</strong>
              <span>réservation et traitements asynchrones</span>
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
            <h2>Répertoire des projets</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
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
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        className="text-link"
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="competences">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Compétences</span>
            <h2>Compétences techniques</h2>
          </div>
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
            <h2>Formation, expérience et compétitions</h2>
          </div>
        </div>
        <div className="timeline">
          <article>
            <span>Diplôme prévu en avril 2027</span>
            <h3>Baccalauréat en informatique</h3>
            <p>Université Laval, Québec.</p>
          </article>
          <article>
            <span>Automne 2026</span>
            <h3>Stage en développement logiciel full-stack</h3>
            <p>Ministère des Ressources naturelles et des Forêts, Québec.</p>
            <p>
              Refonte d'écrans Oracle Forms en pages web Angular et .NET,
              documentation technique et optimisation des requêtes en base de
              données.
            </p>
          </article>
          <article>
            <span>Depuis 2024</span>
            <h3>Agent administratif au CHUL</h3>
            <p>
              À temps partiel à Québec. Service aux usagers, gestion des
              dossiers médicaux aux admissions et aux départs, et priorisation
              des demandes et des appels.
            </p>
          </article>
          <article>
            <span>Octobre 2026</span>
            <h3>Hackathon de Québec International</h3>
            <p>
              Développement en équipe d'une application pour faciliter la
              collaboration entre les organismes et les commerces du quartier
              Saint-Roch. Présentation de la solution au jury.
            </p>
          </article>
          <article>
            <span>Janvier 2027 (prévu)</span>
            <h3>Coveo Blitz</h3>
            <p>Compétition d'algorithmique en équipe à Montréal.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Me joindre</h2>
          <p>
            Français langue maternelle et anglais fonctionnel.
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
            href="https://www.linkedin.com/in/morel-wagala-1b5025235"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
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
