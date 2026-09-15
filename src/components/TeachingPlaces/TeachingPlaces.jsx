import "./TeachingPlaces.css";
import teachingPlaces from "../../data/teachingPlaces";

import { FiCheckCircle } from "react-icons/fi";

function TeachingPlaces() {
  return (
    <section className="teaching" id="teaching">
      <div className="container">
        <div className="teaching__header">
          <div>
            <p className="teaching__label">Где я преподаю</p>
            <h2 className="teaching__title">Места преподавания</h2>
          </div>
        </div>
        <div className="teaching__grid">
          {teachingPlaces.map((place) => (
            <article className="teaching__card" key={place.id}>
              <div className="teaching-card__header">
                <div className="teaching-card__icon">
                  <img src={place.icon} alt="" />
                </div>
                <div>
                  <h3 className="teaching-card__title">{place.title}</h3>
                </div>
                <ul className="teaching-card__list">
                  {place.directions.map((direction) => (
                    <li key={direction}>
                      <FiCheckCircle />
                      <span>{direction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeachingPlaces;
