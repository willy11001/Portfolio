export interface ProjectFeature {
  label: string;
  implemented: boolean;
  note?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  myRole: string;
  contribution: string;
  technologies: string[];
  features: ProjectFeature[];
  challenges: string[];
  learnings: string[];
  screenshots: { src: string; alt: string; caption?: string }[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: "completed" | "in-progress" | "academic" | "placeholder";
  featured: boolean;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    id: "co-nest",
    name: "Co_Nest",
    tagline: "Cameroonian Real Estate Trust App",
    description:
      "A mobile real estate search and trust-oriented application designed to address property fraud, improve transparency, and help users evaluate property listings in Cameroon.",
    problem:
      "Property seekers in Cameroon can face significant difficulties assessing the reliability of listings, understanding land-title information, and evaluating access to basic services such as water and electricity. There is limited digital infrastructure to support transparent property transactions. Co_Nest was designed to address these challenges by aggregating property information, surfacing utility-access data, and providing a structured verification workflow.",
    myRole:
      "As the lead developer on this academic project, I was responsible for requirements analysis, system design, frontend mobile development with React Native, backend API development with Express.js, database design with MySQL, JWT authentication implementation, API documentation with Swagger UI, and application testing.",
    contribution:
      "I designed the overall application architecture, built the mobile frontend screens, developed the REST API endpoints, structured the MySQL database schema, implemented user authentication with JWT, and documented the API using Swagger UI. I also conducted requirements gathering and produced UML diagrams for the system design phase.",
    technologies: [
      "React Native",
      "Express.js",
      "MySQL",
      "JWT",
      "Swagger UI",
      "Node.js",
    ],
    features: [
      { label: "Property listings for rent and sale", implemented: true },
      { label: "Property search and filtering", implemented: true },
      { label: "Property information management", implemented: true },
      { label: "User registration and login", implemented: true },
      { label: "JWT-based authentication", implemented: true },
      { label: "API documentation (Swagger UI)", implemented: true },
      { label: "Water and electricity availability indicators", implemented: true },
      {
        label: "Land-title verification workflow (simulated)",
        implemented: false,
        note:
          "This workflow was designed as a transparent simulated check rather than a live government registry integration.",
      },
      {
        label: "Real-time messaging (Socket.IO)",
        implemented: false,
        note: "Planned feature for a future version of the application.",
      },
    ],
    challenges: [
      "Designing a trust model for property verification without access to a live government API by creating a clear and transparent verification workflow.",
      "Structuring a relational MySQL schema to support properties, users, listings, and utility metadata while keeping queries efficient.",
      "Implementing secure JWT authentication across a mobile React Native client and an Express.js API.",
      "Managing state and navigation across multiple screens without a dedicated state management library.",
    ],
    learnings: [
      "How to translate real-world domain problems into technical product requirements.",
      "Full API lifecycle development from schema design to Swagger-based documentation.",
      "The importance of clearly separating implemented functionality from planned features in product documentation.",
      "Handling cross-platform mobile development constraints in React Native.",
    ],
    screenshots: [
      {
        src: "/images/conest-mobile.jpg",
        alt: "Co_Nest property listing screen showing apartments in Yaoundé",
        caption: "Property Listings — Rent & Sale",
      },
      {
        src: "/images/conest-detail.jpg",
        alt: "Co_Nest property detail screen with verification status",
        caption: "Property Details & Verification Status",
      },
      {
        src: "/images/conest-architecture.jpg",
        alt: "Co_Nest system architecture diagram",
        caption: "System Architecture",
      },
    ],
    githubUrl: "https://github.com/willy11001",
    liveUrl: null,
    status: "academic",
    featured: true,
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    tagline: "Personal portfolio and project showcase",
    description:
      "A responsive portfolio website built with Next.js to showcase my background, project experience, and software engineering work in a clean, modern layout.",
    problem:
      "I needed a professional online presence to present my work, academic background, and contact information without relying on scattered links or disconnected profile pages.",
    myRole:
      "I designed and built the front-end experience, structured the portfolio content, and created reusable UI components for the project sections and interactions.",
    contribution:
      "I implemented the landing page, project case studies, educational timeline, contact flow, and the overall visual system using Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      { label: "Responsive portfolio layout", implemented: true },
      { label: "Project case study sections", implemented: true },
      { label: "Animated transitions and UI polish", implemented: true },
      { label: "Contact form with mailto fallback", implemented: true },
      { label: "SEO and metadata setup", implemented: true },
    ],
    challenges: [
      "Keeping the interface polished and performant while staying lightweight and easy to maintain.",
      "Creating reusable sections that scale with project data without hardcoding the content.",
      "Balancing layout quality and responsiveness across mobile, tablet, and desktop.",
    ],
    learnings: [
      "How to structure a portfolio as a product rather than just a static page.",
      "The value of reusable UI sections and data-driven content structures.",
      "How to improve perceived quality with motion, spacing, and consistency.",
    ],
    screenshots: [
      {
        src: "/images/hero-illustration.jpg",
        alt: "Portfolio landing page illustration",
        caption: "Hero section preview",
      },
      {
        src: "/images/conest-mobile.jpg",
        alt: "Portfolio project card section",
        caption: "Project showcase layout",
      },
      {
        src: "/images/conest-detail.jpg",
        alt: "Portfolio contact and experience sections",
        caption: "Experience and contact sections",
      },
    ],
    githubUrl: "https://github.com/willy11001",
    liveUrl: "https://willy11001-portfolio.vercel.app",
    status: "completed",
    featured: false,
  },
  {
    id: "campus-connect",
    name: "Campus Connect",
    tagline: "Student information and resource platform",
    description:
      "A concept project focused on centralizing student notices, academic resources, and event updates in a simple interface for campus communities.",
    problem:
      "Students often lose track of important academic information because notices, schedules, and shared resources are scattered across different channels.",
    myRole:
      "I conceptualized the product, designed the user flow, and built the front-end interface with a focus on usability and information hierarchy.",
    contribution:
      "I created the dashboard structure, resource cards, and responsive information panels to present notices and academic updates in a clear, accessible format.",
    technologies: ["React", "Node.js", "MongoDB", "REST API"],
    features: [
      { label: "Student notices dashboard", implemented: true },
      { label: "Academic resource directory", implemented: true },
      { label: "Event and update feed", implemented: true },
      { label: "Search and filtering", implemented: false, note: "Planned enhancement for a future version." },
    ],
    challenges: [
      "Designing a practical information architecture that keeps campus updates easy to scan.",
      "Balancing feature richness with a simple user experience for students and administrators.",
    ],
    learnings: [
      "The importance of information hierarchy in user-facing products.",
      "How product clarity improves adoption even when the platform is simple.",
    ],
    screenshots: [
      {
        src: "/images/hero-illustration.jpg",
        alt: "Campus Connect dashboard mockup",
        caption: "Dashboard concept",
      },
    ],
    githubUrl: null,
    liveUrl: null,
    status: "in-progress",
    featured: false,
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const otherProjects = projects.filter((p) => !p.featured);
