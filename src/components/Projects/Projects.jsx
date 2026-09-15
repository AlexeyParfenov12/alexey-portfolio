import projects from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="projects__label">Мои проекты</p>
        <h2 className="projects__title">Проекты и эксперименты</h2>

        <p className="projects__description">
          Здесь собраны как более крупные проекты, так и небольшие технические
          эксперименты. Для черновых работ статус указан отдельно.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__top">
                <p className="project-card__category">{project.category}</p>

                <span
                  className={`project-card__status project-card__status--${project.statusType}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <li
                    className="project-card__technology"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="project-card__footer">
                {project.links.map((link) => (
                  <a
                    className="project-card__link"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    key={link.url}
                  >
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ))}

                {project.privateRepository && (
                  <span className="project-card__private">
                    Репозиторий пока приватный
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
