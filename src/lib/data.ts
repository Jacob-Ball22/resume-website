export const personalInfo = {
  name: "Jacob Ball",
  title: "Graduate Student & Aspiring Data Scientist",
  tagline: "Turning data into decisions",
  location: "Greenwich, CT, USA",
  email: "jeball22@gmail.com",
  phone: "203-321-7755",
  linkedin: "https://www.linkedin.com/in/jacob-ball22/",
  github: "https://github.com/Jacob-Ball22",
  portfolio: "",
  summary:
    "Marine Corps veteran and Fordham University Data Science Graduate student with expertise in Python, scikit-learn, SQL, and machine learning. Experienced in building predictive models, data preprocessing, and network infrastructure, with a background leading mission-critical IT operations for 100+ users. Seeking data science or analytics internship opportunities to further develop skills in predictive analytics and AI-driven insights.",
  availability: "Open to internship and job opportunities",
};

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp0",
    title: "AI Trainer",
    company: "Handshake",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "Contract",
    achievements: [
      "Evaluated and annotated multimodal AI outputs across text, image, audio, and video formats, maintaining strict quality benchmarks within a human-in-the-loop workflow.",
      "Analyzed AI failure cases, applied image transformations, and annotated objects in images and videos using coordinates and timestamps to improve model accuracy and consistency.",
      "Developed structured multimodal instructions for video style transfer tasks and provided feedback to support continuous AI learning and optimization.",
    ],
    technologies: ["Data Annotation", "Multimodal AI", "Quality Assurance", "Human-in-the-Loop", "Prompt Engineering"],
  },
  {
    id: "exp1",
    title: "Security Officer",
    company: "Westchester Country Club",
    startDate: "May 2024",
    endDate: "Oct 2025",
    location: "Rye, NY",
    achievements: [
      "Ensured safety and security of premises, enhancing operational efficiency by implementing new patrol logging procedures.",
      "Addressed member concerns with professionalism, demonstrating problem-solving and time management skills.",
      "Oversaw nightly closure procedures for the club, ensuring the safe departure of all members and staff before executing comprehensive lockdown protocols.",
    ],
    technologies: ["Problem Solving", "Attention to Detail", "Communication", "Time Management"],
  },
  {
    id: "exp2",
    title: "Network Administrator",
    company: "United States Marine Corps",
    startDate: "Jul 2019",
    endDate: "Jul 2023",
    location: "Okinawa, Japan",
    achievements: [
      "Designed and maintained local and campus area networks, ensuring 99.999% uptime for over 100 users during critical operations.",
      "As Platoon Network Chief, spearheaded IT operations for the Balikatan 2023 exercise, deploying LAN infrastructure to support over 200 personnel.",
      "Improved network efficiency by automating routine administrative tasks, reducing configuration time by 30%.",
    ],
    technologies: ["Linux", "IT", "Cybersecurity", "Leadership", "Continuous Improvement"],
  },
];

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  location: string;
  gpa?: string;
  coursework: string[];
  honors?: string[];
}

export const education: Education[] = [
  {
    id: "edu1",
    degree: "M.S. Data Science",
    school: "Fordham University",
    year: "2027",
    location: "New York, NY",
    coursework: ["Algorithms for Data Science"],
    honors: [],
  },
  {
    id: "edu2",
    degree: "B.S. Information Technology & Systems",
    school: "Fordham University",
    year: "2026",
    location: "New York, NY",
    gpa: "3.85",
    coursework: [
      "Computer Science I & II",
      "Data Structures",
      "Database Systems",
      "Web Programming",
      "Secure Cyber Networks",
      "Data Comm & Networks",
    ],
    honors: ["Dean's List 2024–2025"],
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "cert1",
    name: "Python Basics for Data Science",
    issuer: "IBM",
    year: "2023",
  },
];

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 100 },
      { name: "SQL", level: 90 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 50 },
      { name: "HTML", level: 50 },
    ],
  },
  {
    id: "datascience",
    name: "Data Science & ML",
    skills: [
      { name: "pandas", level: 90 },
      { name: "scikit-learn", level: 80 },
      { name: "NumPy", level: 80 },
      { name: "Feature Engineering", level: 65 },
      { name: "Time Series Analysis", level: 65 },
      { name: "yfinance API", level: 65 },
    ],
  },
  {
    id: "networking",
    name: "Networking & Infrastructure",
    skills: [
      { name: "LAN/WAN Design", level: 85 },
      { name: "TCP/IP", level: 85 },
      { name: "Network Architecture", level: 80 },
      { name: "Data Communications", level: 80 },
      { name: "Linux", level: 60 },
      { name: "Cybersecurity", level: 60 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 70 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Jupyter Notebook", level: 100 },
      { name: "Git", level: 95 },
      { name: "VS Code", level: 100 },
      { name: "Agile", level: 60 },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    name: "Stock Market Data Pipeline & Prediction Model",
    description:
      "End-to-end machine learning pipeline for predicting S&P 500 stock movements using historical market data.",
    technologies: ["Python", "scikit-learn", "pandas", "yfinance API", "Time Series Analysis"],
    features: [
      "Built a full data ingestion pipeline to collect, normalize, and clean historical market data using the yfinance API",
      "Developed a Random Forest classifier with a backtesting engine achieving 55.7% precision across 9,000+ historical trading days",
      "Implemented train-test splits and data leakage prevention for reliable model evaluation",
    ],
    github: "https://github.com/Jacob-Ball22/Stock-Prediction-Project",
  },
  {
    id: "proj2",
    name: "Directed Weighted Graph with BFS",
    description:
      "A C++ implementation of a directed weighted graph abstract data type with full traversal capabilities.",
    technologies: ["C++", "Graph Theory", "STL", "Dynamic Memory Management"],
    features: [
      "Implemented adjacency matrix representation using dynamic 2D arrays with full vertex and edge operation support",
      "Developed a breadth-first traversal algorithm achieving O(V+E) time complexity across 7+ vertices and 9+ weighted edges",
      "Utilized STL queue and vertex marking system for efficient graph exploration",
    ],
  },
  {
    id: "proj3",
    name: "Dynamic Sinusoidal Graphing Tool",
    description:
      "A C++ program that dynamically calculates and renders sinusoidal functions based on user-defined input.",
    technologies: ["C++", "Algorithm Design", "Graphical Outputs"],
    features: [
      "Designed dynamic sinusoidal function calculations with optimized iterative performance based on user input",
      "Applied modular programming techniques to improve code maintainability, reducing debugging time by 20%",
      "Produced clean graphical outputs directly from algorithmic computation",
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Jacob-Ball22", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jacob-ball22/", icon: "linkedin" },
  { name: "Email", url: "mailto:jeball22@gmail.com", icon: "mail" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
