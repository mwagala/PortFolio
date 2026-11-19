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
      "Application web qui centralise le suivi des immeubles, des logements, des locataires et des baux pour les gestionnaires immobiliers.",
    impact:
      "Le tableau de bord rapproche les loyers attendus, les paiements reçus et les dépenses par immeuble et par période.",
    highlights: [
      "Suivi des baux, historique d'occupation, paiements partiels et alertes de retard.",
      "Gestion des dépenses récurrentes, des interventions de maintenance et des fournisseurs.",
      "Import Excel avec prévisualisation, rapports financiers et exports CSV/PDF.",
      "Gestion de plusieurs pays et devises, droits d'accès par rôle et par pays, et journal d'audit.",
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
];

const skills = [
  "Java",
  "C#",
  ".NET",
  "Python",
  "Flask",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Vue.js",
  "Node.js",
  "SQL Server",
  "PostgreSQL",
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
              C#/.NET, SQL, TypeScript et Python, avec des applications web
              développées avec Flask et Next.js.
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
              <strong>Flask</strong>
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
