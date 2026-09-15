import "./Technologies.css";
import technologies from "../../data/technologies";

function Technologies() {
  return (
    <section className="technologies" id="technologies">
      <div className="container">
        <div className="technologies__header">
          <div>
            <p className="technologies__label">Технологии который преподаю</p>
            <h2 className="technologies__title">Мои навыки</h2>
          </div>
          <a href="#about" className="technologies__more">
            Все технологии <span>→</span>
          </a>
        </div>
        <div className="technologies__grid">
          {technologies.map((tech) => (
            <article className="technologies__card" key={tech.id}>
              <div className="technologies-card__icon">
                <img src={tech.icon} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
