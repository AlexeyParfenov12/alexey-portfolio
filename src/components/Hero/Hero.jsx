import "./Hero.css";
import portrait from "../../assets/img/hero/alexey_parfenov.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div className="hero__left">
            <p className="hero__label">Преподаватель программирования</p>
            <h1 className="hero__title">Парфенов Алексей</h1>
            <p className="hero__description">
              Преподаю программирование и создаю практические проекты,
              уделяя внимание понятному коду, структуре и реальным проектам.
            </p>
            <div className="hero__action">
              <a href="#projects" className="hero__projects-link">
                Посмотреть проекты
              </a>
              <a href="#contacts" className="hero__contact-link">
                Связаться со мной
              </a>
            </div>
          </div>
          <div className="hero__center">
            <div className="hero__glow"></div>
            <img
              src={portrait}
              alt="Алексей Парфенов"
              className="hero__portrait"
            />
            <div className="hero__notes">
              <span>Обучение</span>
              <span>Развитие</span>
              <span>Практика</span>
              <span>Результат</span>
              <div className="hero__arrow">↘</div>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__code-card">
              <div className="hero__code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="hero__code">
                <p><strong>while</strong> (teaching) {"{"}</p>
                <p className="hero__code-indent">develop(students);</p>
                <p className="hero__code-indent">share(knowledge);</p>
                <p className="hero__code-indent">create(opportunities);</p>
                <p className="hero__code-indent">improve(education);</p>
                <p>{"}"}</p>
                <br />
                <p className="hero__comment">// Вместе создаем</p>
                <p className="hero__comment">// будущее в IT</p>
              </div>
            </div>
            <div className="hero__info-card">
              <div>
                <h3>Программирование</h3>
                <p>— это не просто код, это возможность менять жизни людей.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;