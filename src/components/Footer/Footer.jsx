import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__top">
          <div className="footer__info">
            <h2 className="footer__title">Контактная информация</h2>
          </div>

          <div className="footer__contacts">
            <a
              className="footer__contact"
              href="https://t.me/AlexeyParfenov2776"
              target="_blank"
              rel="noreferrer"
            >
              Связаться в Telegram
            </a>

            <a className="footer__contact" href="mailto:Alexey@ad-parfenov.ru">
              Написать на почту
            </a>

            <a
              className="footer__contact"
              href="https://max.ru/https://max.ru/u/f9LHodD0cOJrw3YRW6lSz8IQXZKUNfG2_Qu9EeWBaaToUDTwj-TJZGYYJD8"
              target="_blank"
              rel="noreferrer"
            >
              Связаться в MAX
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__brand">
            ALEXEY <span>PARFENOV</span>
          </div>

          <nav className="footer__nav" aria-label="Навигация в подвале">
            <a href="#home">Главная</a>
            <a href="#teaching">Обо мне</a>
            <a href="#technologies">Навыки</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
