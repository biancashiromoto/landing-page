export type CourseType = "Remoto" | "Live" | "Live + Multimídia" | "Digital";

export type Course = {
  name: string;
  type: CourseType[];
  id: string;
};

export type CourseArea = {
  area: string;
  items: Course[];
  id: string;
};

export const courses: CourseArea[] = [
  {
    area: "Tecnologia",
    id: "TECH",
    items: [
      {
        name: "Big Data Ecosystem",
        type: ["Remoto", "Live"],
        id: "TECH1",
      },
      {
        name: "Creating Dashboards for BI",
        type: ["Remoto", "Live"],
        id: "TECH2",
      },
      {
        name: "Big Data Science - Machine Learning & Data Mining",
        type: ["Remoto", "Live + Multimídia"],
        id: "TECH3",
      },
      {
        name: "Storytelling",
        type: ["Remoto", "Live"],
        id: "TECH4",
      },
    ],
  },
  {
    area: "Inovação",
    id: "INOV",
    items: [
      {
        name: "UX",
        type: ["Digital"],
        id: "INOV1",
      },
      {
        name: "UX Writing",
        type: ["Live"],
        id: "INOV2",
      },
      {
        name: "Storytelling para Negócios",
        type: ["Live"],
        id: "INOV3",
      },
      {
        name: "Chatbots",
        type: ["Live"],
        id: "INOV4",
      },
    ],
  },
  {
    area: "Negócios",
    id: "NEGO",
    items: [
      {
        name: "Agile Culture",
        type: ["Digital"],
        id: "NEGO1",
      },
      {
        name: "DPO Data Protection Officer",
        type: ["Live"],
        id: "NEGO2",
      },
      {
        name: "IT Business Partner",
        type: ["Live"],
        id: "NEGO3",
      },
      {
        name: "Perícia Forense Computacional",
        type: ["Live"],
        id: "NEGO4",
      },
    ],
  },
];
