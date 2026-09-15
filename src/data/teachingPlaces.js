import iconURTK from "../assets/img/teachingPlaces/urtk-popov-icon.svg";
import iconAvtomatica from "../assets/img/teachingPlaces/et-avtomatika.svg";
import iconTop from "../assets/img/teachingPlaces/top-academy-logo.svg"

const teachingPlaces = [
  {
    id: 1,
    icon: iconURTK,
    title: "Уральский радиотехнический колледж им. А.С. Попова",
    directions: [
      "Веб-разработка",
      "HTML, CSS, JavaScript, PHP",
      "Подготовка к демонстрационному экзамену по веб-дизайну и разработке"
    ],
  },
  {
    id: 2,
    icon: iconAvtomatica,
    title: "ЕТ Автоматика",
    directions: [
      "Веб-разработка",
      "C#, WinForms, WPF",
      "SQL Server, PostgreSQL",
      "Подготовка к демонстрационному экзамену по программным решениям для бизнеса"
    ],
  },
  {
    id: 3,
    icon: iconTop,
    title: "ТОП Академия",
    directions: [
      "Python: начальный уровень и основы алгоритмизации",
      "Основы программирования и разработка учебных проектов",
      "Подготовка к демонстрационному экзамену по программным решениям для бизнеса"
    ],
  },
];

export default teachingPlaces;