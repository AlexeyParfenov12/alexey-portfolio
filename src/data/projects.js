const projects = [
  {
    id: 1,
    title: "GradeHub",
    category: "Fullstack",
    status: "В разработке",
    statusType: "progress",
    description:
      "Система для работы с учебными группами, студентами, курсами, занятиями, тестами, посещаемостью и задолженностями. Для доступа на сайт.  - логин: 'demo'- пароль: 'GradeHubDemo2026'",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML", "CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/GradeHubStudent",
      },
      {
        label: "Site",
        url: "https://gradehub-demo.infy.click/"
      },
    ],
  },
  {
    id: 2,
    title: "TestSalon",
    category: "Desktop / C#",
    status: "Учебный проект",
    statusType: "study",
    description:
      "Desktop-приложение на Windows Forms для работы с данными салона красоты. В проекте используются формы, Entity Framework и база данных.",
    technologies: ["C#", "Windows Forms", "Entity Framework", "SQL"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/TestSalon",
      },
    ],
  },
  {
    id: 3,
    title: "Nintendo Switch CSS Art",
    category: "CSS Art",
    status: "Готовый эксперимент",
    statusType: "ready",
    description:
      "Детализированная отрисовка Nintendo Switch средствами HTML и CSS без Canvas и SVG.",
    technologies: ["HTML", "CSS", "CSS Art"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/nintendoSwitch.git",
      },
    ],
  },
  {
    id: 4,
    title: "Taro Landing Page",
    category: "Frontend",
    status: "Учебный проект",
    statusType: "study",
    description:
      "Многоэкранный frontend-проект с адаптивной вёрсткой, навигацией, карточками услуг и интерактивными элементами.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/taro",
      },
    ],
  },
  {
    id: 5,
    title: "Cursor Image Preview",
    category: "Vanilla JavaScript",
    status: "Эксперимент",
    statusType: "experiment",
    description:
      "Изображение появляется рядом с курсором и меняется в зависимости от элемента списка, на который наведён пользователь.",
    technologies: ["JavaScript", "DOM", "Mouse Events", "HTML", "CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/items-track",
      },
    ],
  },
  {
    id: 6,
    title: "Custom Slider",
    category: "Vanilla JavaScript",
    status: "Эксперимент",
    statusType: "experiment",
    description:
      "Самописный слайдер без готовых библиотек: переключение элементов и изменение поведения в зависимости от ширины окна.",
    technologies: ["JavaScript", "DOM", "HTML", "CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/slider",
      },
    ],
  },
  {
    id: 7,
    title: "Mouse Perspective Effect",
    category: "Vanilla JavaScript",
    status: "Эксперимент",
    statusType: "experiment",
    description:
      "Интерактивный эффект: положение курсора используется для формирования CSS-трансформации matrix3d().",
    technologies: ["JavaScript", "DOM", "CSS 3D", "Mouse Events"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/sectionPerspective",
      },
    ],
  },
  {
    id: 8,
    title: "Interactive Gallery",
    category: "Vanilla JavaScript",
    status: "Черновик",
    statusType: "draft",
    description:
      "Эксперимент с большой генерируемой сеткой изображений. Генерация и центрирование готовы, перемещение мышью ещё дорабатывается.",
    technologies: ["JavaScript", "CSS Grid", "DOM", "HTML", "CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AlexeyParfenov12/galerey",
      },
    ],
  },
  {
    id: 9,
    title: "UI Components",
    category: "HTML / CSS",
    status: "Наработки",
    statusType: "experiment",
    description:
      "Небольшие интерфейсные эксперименты: анимированные карточки и варианты навигации без использования JavaScript.",
    technologies: ["HTML", "CSS", "Flexbox", "Transitions"],
    links: [
      {
        label: "Animated Cards",
        url: "https://github.com/AlexeyParfenov12/menu_animated",
      },
      {
        label: "Navbar",
        url: "https://github.com/AlexeyParfenov12/navbar",
      },
    ],
  },
  {
    id: 10,
    title: "WEB — демонстрационный экзамен",
    category: "ПРОЕКТ / ВИДЕО",
    status: "Частичная демонстрация",
    statusType: "Видео",
    description:
      "Практический проект для подготовки студентов к демонстрационному экзамену по Web-дизайну и разработке. В видео показана основная часть разработки приложения. Некоторые этапы намеренно не разбираются полностью, чтобы студенты самостоятельно находили решения и закрепляли материал.",
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
    links: [
      {
        label: "Смотреть проект",
        url: "https://disk.yandex.ru/i/ZexClqW3-bDu6Q",
      },
    ],
  },
  {
    id: 11,
    title: "WinForms — демонстрационный экзамен",
    category: "ПРОЕКТ / ВИДЕО",
    status: "Частичная демонстрация",
    statusType: "Видео",
    description:
      "Практический проект по разработке информационной системы для подготовки к демонстрационному экзамену «Программные решения для бизнеса». В материалах показаны разработка приложения, работа с базой данных и реализация авторизации. Часть функционала намеренно оставлена студентам для самостоятельной реализации.",
    technologies: ["C#", "Windows Forms", "Entity Framework", "SQL"],
    links: [
      {
        label: "Разработка проекта",
        url: "https://disk.yandex.ru/i/Vnp8MavA6azvRg",
      },
      {
        label: "Авторизация",
        url: "https://disk.yandex.ru/i/_ml5RqTbZk6IDA",
      },
    ],
  },
];

export default projects;
