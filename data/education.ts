export interface EducationEntry {
  id: string;
  type: "degree" | "diploma" | "internship" | "experience";
  institution: string;
  degree: string;
  field: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
  highlights: string[];
}

export const educationTimeline: EducationEntry[] = [
  {
    id: "bsc",
    type: "degree",
    institution: "Siantou University Institute",
    degree: "Bachelor's Degree",
    field: "Software Engineering",
    location: "Yaoundé, Cameroon",
    startYear: "2025",
    endYear: "2026",
    description:
      "Completed a Bachelor's degree in Software Engineering, building on the technical foundation established during the HND program. Coursework covered advanced software design, system architecture, database management, software testing, and full-stack application development.",
    highlights: [
      "Software architecture and system design",
      "Advanced database management",
      "Full-stack application development",
      "Software testing and quality assurance",
      "Academic project: Co_Nest real estate mobile application",
    ],
  },
  {
    id: "hnd",
    type: "diploma",
    institution: "Siantou University Institute",
    degree: "Higher National Diploma (HND)",
    field: "Software Engineering",
    location: "Yaoundé, Cameroon",
    startYear: "2023",
    endYear: "2025",
    description:
      "Earned a Higher National Diploma in Software Engineering, covering core programming principles, web development, object-oriented design, and database fundamentals.",
    highlights: [
      "Programming fundamentals and OOP",
      "Web development (HTML, CSS, JavaScript, PHP)",
      "Database design and SQL",
      "UML and requirements analysis",
      "Introduction to software project management",
    ],
  },
];

export const experienceTimeline: EducationEntry[] = [
  {
    id: "internship",
    type: "internship",
    institution: "Software Development Team",
    degree: "Software Engineering Intern",
    field: "Software Engineering",
    location: "Cameroon",
    startYear: "June 2024",
    endYear: "August 2024",
    description:
      "Completed an internship focused on professional software engineering workflows, team collaboration, and practical implementation of development practices in a real-world project environment.",
    highlights: [
      "Worked within a professional software development environment",
      "Applied academic engineering knowledge to practical workflows",
      "Gained experience collaborating in a structured dev team",
    ],
  },
  {
    id: "personal-projects",
    type: "experience",
    institution: "Personal & Academic Projects",
    degree: "Independent Developer",
    field: "Full-Stack Development",
    location: "Yaoundé, Cameroon",
    startYear: "2023",
    endYear: "Present",
    description:
      "Independently designed, developed, and tested web and mobile applications as personal and academic projects. These projects demonstrate initiative, self-directed learning, and practical application of software engineering skills.",
    highlights: [
      "Built Co_Nest: a full-stack mobile real estate application using React Native and Express.js",
      "Designed and implemented REST APIs with JWT authentication",
      "Worked with relational databases (MySQL) and documented APIs with Swagger UI",
      "Applied UML modelling and requirements analysis on real-world-inspired problems",
      "Practiced version control workflows using Git and GitHub",
    ],
  },
];
