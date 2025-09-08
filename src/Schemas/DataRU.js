export const Data = {
  profile: {
    name: "Алиса Ткаченко",
    ocupation: "РГПУ им. А. И. Герцена",
    location: "Россия, Санкт-Петербург",
    email: "alisa.tkc@mail.ru",
    telephone: "+7 (952) 117-38-81",
    image: "images/IMG_5023.png",
  },
  aboutMe: {
    label: "Обо мне",
    description:
      `Заведующая лабораторией педагогического
      технопарка «Кванториум им. К. Д. Ушинского»,
  
  ассистент кафедры информационных систем ИИТТО`,
  },
  skills: {
    technicalLabel: "Hard skills",
    softLabel: "Soft skills",
    technicalSkills: [
      "Фундаментальная математика",
      "Разработка образовательных программ",
      "UX/UI-дизайн",
      "Базовые навыки веб-разработки (HTML,CSS)",
      "3D-моделирование и аддитивные технологии",
      "Работа с ЧПУ-оборудованием (лазерные станки)",
      "Фотограмметрия",
      "Postman",
      "React",
      "React-native",
      "Blender",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "SQL",
      "Docker",
      "Linux",
      "Git",
    ],
    softSkills: [
      "Коммуникабельный",
      "Системное мышление",
      "Проактивный",
      "Креативный",
      "Готов обучать других людей",
    ],
  },
  socialMedia: {
    label: "Contacts",
    social: [
      {
        label: "Pavel Kostin",
        name: "linkedin",
        url: "https://www.linkedin.com/in/pavel-kostin",
        className: "bxl-linkedin-square",
      },
      {
        label: "KostinP",
        name: "github",
        url: "https://github.com/KostinP",
        className: "bxl-github",
      },
      {
        label: "Tkachenko Alisa",
        name: "telegram",
        url: "https://t.me/alisatkc",
        className: "bxl-telegram",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "FULLSTACK DEVELOPER",
        period: "Oct. 2023 - Now",
        company: "Herzen University",
        description: [
          "Адаптировал легаси React-native проект под новые задачи.", 
          "Frontend (React, Storybook, Three.js, Material UI) developer.",
          "Backend (C#, Entity Framework, SQL Server, NUnit, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions, Docker) developer.",
          "Занимался написанием технической документации.",
        ],
      },
      {
        title: "УЧИТЕЛЬ ПРОГРАММИРОВАНИЯ У ДЕТЕЙ",
        period: "Feb. 2023 - Now",
        company: "uchi.ru",
        description: [
          "Учил детей Unity, Blender, Unreal Engine, Html, CSS, JavaScript, Java, Python, Scratch, ScratchJr, Kodu Game Lab.",
        ],
      },
    ],
    academic: [
      {
        career: "РГПУ им А.И. Герцена",
        date: "2022-Now",
        institution: "Институт информационных технологий и технологического образования",
      },
      {
        career: "Санкт-Петербургский государственный университет",
        date: "2019-2021",
        institution: "Математико-механический факультет",
      },
    ],
    projects: [
      {
        name: "University Helper (backend, mobile)",
        company: "Студенческий проект",
        period: "Mar. 2023 - Dec. 2023",
        description: [
          "Микросервисная архитектура",
          "Помошник для студента, который состоит из backend и мобильного приложения, интегрирован с системой университета",
          "Backend: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions",
          "Мобильное приложение: C#, Unity, UI Toolkit",
        ],
      },
      {
        name: "Digital Office (backend)",
        company: "LANIT-TERCOM, студенческий проект",
        period: "Jul. 2020 - Jun. 2021",
        description: [
          "Микросервисная архитектура",
          "Вторая итерация проекта. Разрабатывал backend при помощи ASP.Net Core REST API Web Services для оптимизации процессов компании: департаменты, проекты, задачи, сотрудники, роли, права, отпуска, файллы, картинки...",
          "Backend: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions",
        ],
      },
      {
        name: "Office Map (backend)",
        company: "LANIT-TERCOM, студенческий проект",
        period: "Jul. 2019 - May. 2020",
        description: [
          "Монолитная архитектура",
          "Разрабатывал backend при помощи ASP.Net Core REST API Web Services для оптимизации процессов компании: департаменты, проекты, задачи, сотрудники.",
          "Backend: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, AutoMappers, Identity Server 4, GitHub Actions",
        ],
      },
    ],
  },
};
