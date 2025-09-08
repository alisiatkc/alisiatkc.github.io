export const Data = {
  profile: {
    name: "Alisa Tkachenko",
    ocupation: "FullStack Software Developer",
    location: "Russia, St. Petersburg",
    email: "kopavalex@yandex.ru",
    telephone: "+7 (981) 761-76-46",
    image: "images/IMG_5023.png",
  },
  aboutMe: {
    label: "Abut moe",
    description:
      "Fullstack programmer and designer proficient in many development tools.",
  },
  skills: {
    technicalLabel: "Hard skills",
    softLabel: "Soft skills",
    technicalSkills: [
      "C#",
      "Unity",
      "EntityFramework",
      "LINQ",
      "RabbitMQ",
      "NUnit",
      "Swagger",
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
      "Communicable",
      "Systems approach",
      "Proactive",
      "Creative",
      "Mentoring",
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
        label: "Pavel Kostin",
        name: "telegram",
        url: "https://t.me/PashaKostin",
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
          "Adapting the legacy React-native application for new tasks.", 
          "Frontend (React, Storybook, Three.js, Material UI) developer.",
          "Backend (C#, Entity Framework, SQL Server, NUnit, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions, Docker) developer.",
          "Maintaining technical documentation.",
        ],
      },
      {
        title: "CHILDREN'S PROGRAMMING TEACHER",
        period: "Feb. 2023 - Now",
        company: "uchi.ru",
        description: [
          "Trained Unity, Blender, Unreal Engine, Html, CSS, JavaScript, Java, Python, Scratch, ScratchJr, Kodu Game Lab.",
        ],
      },
    ],
    academic: [
      {
        career: "Herzen University",
        date: "2022-Now",
        institution: "Institute of Information Technology and Technology Education",
      },
      {
        career: "Saint Petersburg State University",
        date: "2019-2021",
        institution: "Faculty of Mathematics and Mechanics",
      },
    ],
    projects: [
      {
        name: "University Helper",
        company: "Student project",
        period: "Mar. 2023 - Dec. 2023",
        description: [
          "Microservice architecture",
          "Student assistant consisting of a server, website, mobile application, computer application, integrated with the Herzen University system",
          "Server stack: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions",
          "Website stack: React, i18next, storybook",
          "Mobile/computer application stack: C#, Unity",
        ],
      },
      {
        name: "Digital Office",
        company: "LANIT-TERCOM",
        period: "Jul. 2020 - Jun. 2021",
        description: [
          "Microservice architecture",
          "Second iteration of project. Developing a ASP.Net Core REST API Web Services for managing company structure: departments, projects, tasks, employers, roles, rights, vacations, files, images.",
          "Stack: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, RabbitMQ (MassTransit), ImageSharp, NuGet, GitHub Actions",
        ],
      },
      {
        name: "Office Map",
        company: "LANIT-TERCOM",
        period: "Jul. 2019 - May. 2020",
        description: [
          "Monolite architecture",
          "Developing a ASP.Net Core REST API Web Services for managing company structure: departments, projects, tasks, employers.",
          "Stack: C#, Entity Framework, SQL Server, NUnit, Postman, Swagger, AutoMappers, Identity Server 4, GitHub Actions",
        ],
      },
    ],
  },
};
