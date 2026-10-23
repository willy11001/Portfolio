// ============================================================
// SKILLS DATA — Organized by category. No fake percentages.
// ============================================================

export interface Skill {
  name: string;
  icon?: string; // Devicon class or SVG name
  category: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "Vue.js", category: "frontend" },
      { name: "Responsive Design", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: [{ name: "React Native", category: "mobile" }],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "PHP", category: "backend" },
      { name: "Java", category: "backend" },
      { name: "REST APIs", category: "backend" },
      { name: "JWT Authentication", category: "backend" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MySQL", category: "databases" },
      { name: "MongoDB", category: "databases" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", category: "languages" },
      { name: "TypeScript", category: "languages" },
      { name: "PHP", category: "languages" },
      { name: "Java", category: "languages" },
      { name: "C", category: "languages" },
      { name: "C++", category: "languages" },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    skills: [
      { name: "Git", category: "tools" },
      { name: "GitHub", category: "tools" },
      { name: "VS Code", category: "tools" },
      { name: "Swagger UI", category: "tools" },
      { name: "Postman", category: "tools" },
    ],
  },
  {
    id: "se",
    label: "Software Engineering",
    skills: [
      { name: "OOP", category: "se" },
      { name: "Database Design", category: "se" },
      { name: "API Integration", category: "se" },
      { name: "Debugging", category: "se" },
      { name: "Software Architecture", category: "se" },
      { name: "UML Diagrams", category: "se" },
      { name: "Requirements Analysis", category: "se" },
      { name: "Software Testing", category: "se" },
    ],
  },
];
