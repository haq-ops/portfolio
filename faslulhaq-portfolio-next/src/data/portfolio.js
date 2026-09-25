// =============================================================
//  All site content lives here. Edit this file to update the site.
// =============================================================

export const profile = {
  name: "Faslulhaq Farees",
  firstName: "Faslulhaq",
  lastName: "Farees",
  initials: "FF",
  email: "fazlulhaqfaris076@gmail.com",
  location: "Sri Lanka",
  degree: "B.Sc. (Hons) in IT, SLIIT",
  lookingFor: "Software engineering internship",
  github: "https://github.com/haq-ops",
  linkedin: "https://linkedin.com/in/faslulhaqfarees",
  cv: "/faslulhaq-farees-cv.pdf",
  // Put a square photo in /public (e.g. public/profile.jpg) and set: photo: "/profile.jpg"
  photo: null,
  heroBlurb:
    "IT undergraduate at SLIIT who builds scalable web apps with the MERN stack and Spring Boot, and ships them with Docker and CI/CD. I'm looking for a software engineering internship.",
};

// Text cycled by the typing effect in the hero
export const roles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Spring Boot Developer",
  "Software Engineering Intern",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const about = {
  heading: "Full-stack developer who likes building things that scale",
  paragraphs: [
    "I'm a B.Sc. (Hons) IT undergraduate at the Sri Lanka Institute of Information Technology, specialising in full-stack development and software engineering. I build web applications with React, Node.js, Express and Spring Boot, design REST APIs, and work with both SQL and NoSQL databases.",
    "Recently I've been splitting systems into microservices, containerising them with Docker and automating deployments with GitHub Actions. I'm especially interested in using AI to solve real-world problems, like the matching engine behind my Lostiq project.",
  ],
};

export const stats = [
  { value: 5, suffix: "+", label: "client apps built as a freelancer" },
  { value: 5, suffix: "", label: "personal and team projects" },
  { value: 6, suffix: "", label: "certifications completed" },
  { value: 6, suffix: "", label: "month IT support internship" },
];

export const experience = [
  {
    date: "2025 – 2026",
    title: "Freelance Full-Stack Developer",
    place: "Fiverr & direct clients, remote",
    points: [
      "Delivered 5+ full-stack web applications for clients over one year.",
      "Built REST APIs and back-end services that cut average response time by 30%.",
      "Optimised queries and performance, improving load time by up to 40%.",
      "Worked with clients through requirements, code review, debugging and deployment.",
    ],
  },
  {
    date: "Nov 2025 – Apr 2026",
    title: "IT Support Trainee",
    place: "SuperValu Lanka (Pvt) Ltd, remote",
    points: [
      "Completed a 6-month internship supporting technical and operational work.",
      "Delivered support tasks on time, within company standards and confidentiality rules.",
    ],
  },
];

export const education = [
  {
    date: "Oct 2023 – Oct 2027",
    title: "B.Sc. (Hons) in Information Technology",
    place: "Sri Lanka Institute of Information Technology (SLIIT)",
    points: [
      "Specialising in full-stack development and software engineering.",
      "Team leader on several group projects run with Agile.",
    ],
  },
];

export const achievements = [
  { title: "Team leader", place: "Led multiple university group projects using Agile methodology." },
  { title: "Active GitHub portfolio", place: "Build and maintain real-world applications on GitHub." },
];

// "icon" must match a key in the iconMap in src/components/Skills.jsx
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Frameworks & libraries",
    items: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Spring Boot", icon: "spring" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQL Server", icon: "sqlserver" },
      { name: "PL/SQL", icon: "sql" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Git", icon: "git" },
      { name: "Maven", icon: "maven" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger", icon: "swagger" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

// Set each percentage honestly: be ready to back it up in an interview.
export const coreSkills = [
  { name: "Frontend (React)", value: 90 },
  { name: "Backend (Node.js, Express)", value: 85 },
  { name: "Spring Boot & Java", value: 80 },
  { name: "Databases (MySQL, MongoDB)", value: 85 },
  { name: "Docker & CI/CD", value: 75 },
  { name: "Problem solving", value: 90 },
  { name: "Team collaboration", value: 90 },
  { name: "Communication", value: 85 },
];

// image: put a screenshot in public/projects/ and set e.g. image: "/projects/eduflex.png"
// github / demo: set to the project's own links (demo can be null)
export const projects = [
  {
    title: "EduFlex: Microservice LMS",
    cover: "EduFlex",
    date: "Jan – Jun 2026",
    description:
      "A scalable learning management system built as 5+ microservices (assessment, discussion, notifications) behind an API gateway. CI/CD with GitHub Actions cut deployment time by 50%.",
    tech: ["Node.js", "React", "MySQL", "Docker", "Nginx", "GitHub Actions"],
    github: "https://github.com/haq-ops",
    demo: null,
    image: null,
    gradient: "from-blue-900 to-violet-700",
  },
  {
    title: "Smart Campus",
    cover: "Smart Campus",
    date: "Jan – Jun 2026",
    description:
      "A campus platform with a facilities catalogue, maintenance incident ticketing and role-based user management, built by a team across 7 feature branches.",
    tech: ["Spring Boot", "React", "Vite", "Docker", "Nginx", "Maven"],
    github: "https://github.com/haq-ops",
    demo: null,
    image: null,
    gradient: "from-emerald-800 to-cyan-700",
  },
  {
    title: "Lostiq: AI Lost & Found",
    cover: "Lostiq",
    date: "2026",
    description:
      "A platform to report and recover lost items. Its AI matching engine, built on the OpenAI API, reaches over 80% item-to-report match accuracy.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    github: "https://github.com/haq-ops",
    demo: null,
    image: null,
    gradient: "from-orange-800 to-pink-700",
  },
  {
    title: "Eco Bin: Smart Waste Management",
    cover: "Eco Bin",
    date: "Jun – Dec 2025",
    description:
      "Connects smart bin sensors to real-time dashboards for city-wide monitoring, cutting manual waste reporting effort by 60%.",
    tech: ["Express.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/haq-ops",
    demo: null,
    image: null,
    gradient: "from-green-800 to-lime-700",
  },
  {
    title: "QuickWay Car Rental",
    cover: "QuickWay",
    date: "Oct 2024",
    description:
      "A rental management system with booking, inventory and reporting. Optimised MySQL queries made admin dashboard data load 35% faster.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    github: "https://github.com/haq-ops/QuickWay-Car-Rental-System",
    demo: null,
    image: null,
    gradient: "from-slate-700 to-amber-700",
  },
];

// link: add a credential URL to show a "View credential" link
export const certifications = [
  { title: "Java Programming and Software Engineering Fundamentals", issuer: "Duke University", year: "2026", link: null },
  { title: "UI/UX Design", issuer: "Error Makes Clever", year: "2026", link: null },
  { title: "Gemini Certified Student", issuer: "Google for Education", year: "2026", link: null },
  { title: "Full-Stack Web Development", issuer: "Meta", year: "2025", link: null },
  { title: "Front End Development", issuer: "Great Learning", year: "2024", link: null },
  { title: "Programming Basics", issuer: "Great Learning", year: "2024", link: null },
];

// Contact form: create a free form at formspree.io and paste its URL here,
// e.g. "https://formspree.io/f/abcdwxyz". Leave empty to open the visitor's email app instead.
export const formspreeEndpoint = "";
