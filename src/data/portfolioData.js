// ============================================================
// portfolioData.js — Centralized configuration for Manas Mayank's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Manas Mayank",
  firstName: "Manas",
  brandName: "Manas Mayank",
  title: "Full Stack Developer",
  location: "Muzaffarpur, Bihar",
  phone: "+91 8709791448",
  emails: {
    primary: "mayank.manas.2801@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated Full Stack Developer with hands-on experience in React, Django, PostgreSQL and Python. Completed a 3-month Industrial Training in Python Web Development and built multiple real-world projects including a Smart Student Management System and a live portfolio website. Passionate about developing scalable applications and continuously learning modern technologies.",
  resumeUrl: "/MANAS_MAYANK_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/manas2801",
  linkedin: "https://www.linkedin.com/in/mayankmanas28",
};

export const heroContent = {
  greeting: "Hi, I'm Manas Mayank",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "Specializing in React, Django, PostgreSQL, and Python. Building scalable applications and modern web solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mayank.manas.2801@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Manas Mayank,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/MANAS_MAYANK_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Manas Mayank</span>, a motivated Full Stack Developer based in Muzaffarpur, Bihar, dedicated to designing clean, scalable, and highly functional web applications.`,
  techStack: ["React", "Django", "PostgreSQL", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding client specifications, model relationships, and relational database schemas to plan application structures.",
    },
    {
      number: "02",
      title: "Design",
      text: "Drafting REST API models, user session handlers, database query paths, and responsive frontend UI layout flows.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building robust backend backbones in Django and interactive web frontends using React and modern CSS systems.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Thorough testing, version tracking with Git, cloud deployment to Render, and asset hosting optimization.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 88 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 88 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Django", level: 88 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Render", level: 80 },
        { name: "Cloudinary", level: 75 }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP", level: 85 },
        { name: "DBMS", level: 82 },
        { name: "DSA Basics", level: 70 },
        { name: "Responsive Web Design", level: 90 }
      ]
    }
  ]
};

// Projects Data
export const projects = [
  {
    id: "student-management",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Smart Student Management System",
    description:
      "Developed a full-stack student management platform containing attendance, marks, fees, and secure user authentication modules. Built with a scalable Django backend and PostgreSQL database with a responsive Bootstrap frontend UI.",
    techTags: ["Django", "PostgreSQL", "Bootstrap", "Python"],
    links: {
      github: "https://github.com/manas2801/smart-student-management-system",
      demo: "https://smart-student-management-system-fnt2.onrender.com",
    },
    isFlagship: true,
  },
  {
    id: "portfolio-v2",
    number: "02",
    badge: "🌐 Front-End Project",
    title: "Portfolio Website (Portfolio V2)",
    description:
      "Designed and built a responsive professional portfolio website to showcase project experience, certifications, and skills. Implemented with React and Vite for fast performance, using optimized clean CSS layouts.",
    techTags: ["React", "Vite", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/manas2801/manas-portfolio-v2",
      demo: "https://manas-portfolio-v2.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "donation-app",
    number: "03",
    badge: "🤝 Full-Stack Web App",
    title: "Donation Web Application",
    description:
      "Developed a donation management platform designed with complex database modeling and user interface integrations, enabling seamless donation workflows. Powered by Django and PostgreSQL.",
    techTags: ["Django", "PostgreSQL", "Python", "HTML/CSS"],
    links: {
      github: "https://github.com/manas2801/donation-web-app",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data
export const certificates = {
  featured: [
    {
      name: "TCS iON Career Edge – Young Professional",
      issuer: "TCS iON",
      icon: "💼",
      link: "https://drive.google.com/file/d/1JgfAt1xK3V2EoZ0iFOgxwtwJhINYev8a/view?usp=drive_link",
      desc: "Comprehensive young professional certification validating key communication, presentation, business etiquette, and career planning skills."
    },
    {
      name: "Python for Data Science",
      issuer: "NPTEL (IIT Madras)",
      icon: "📊",
      link: "https://drive.google.com/file/d/1tBUrmPhTLzAhPK8ww2qXHQprYu12-ZSe/view?usp=drive_link",
      desc: "Advanced data science program validating expertise in Python coding, numerical analysis, data visualization, and ML workflows."
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      icon: "💻",
      link: "https://drive.google.com/file/d/1YlNN8aOdquMXRZ_YnyvDkUz8REo3i8gk/view?usp=drive_link",
      desc: "Full-stack software engineering certification covering frontend styling, DOM APIs, backend endpoints, and relational databases."
    },
    {
      name: "Web Development with Python",
      issuer: "Froyo Technologies",
      icon: "🐍",
      link: "https://drive.google.com/file/d/1J10mIyJoZX7s3-TpYOcLn9pO6r1gCFS5/view?usp=drive_link",
      desc: "Industrial trainee certification verifying hands-on web application building, Django backends, and Git version control workflows."
    },
    {
      name: "Introduction to MS Excel",
      issuer: "Microsoft",
      icon: "📈",
      link: "https://drive.google.com/file/d/1N66xpAMAwS7YaOJIKnnUKsD9ruTVWj0N/view?usp=drive_link",
      desc: "Microsoft certified program confirming practical proficiency in spreadsheet modeling, data analysis formulas, and charting tables."
    },
  ]
};

// Education Data
export const educationList = [
  {
    institution: "LN Mishra College of Business Management",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2023 – 2026",
    location: "Muzaffarpur, Bihar",
    gpa: "Marks: 75%"
  },
  {
    institution: "Holy Cross Public School",
    degree: "Senior Secondary (CBSE)",
    duration: "2023",
    location: "Muzaffarpur, Bihar",
    gpa: "Marks: 69%"
  },
  {
    institution: "Holy Cross Public School",
    degree: "Secondary (CBSE)",
    duration: "2021",
    location: "Muzaffarpur, Bihar",
    gpa: "Marks: 85%"
  }
];

// Experience Data
export const experienceList = [
  {
    organization: "Froyo Technologies Pvt. Ltd.",
    role: "Industrial Trainee – Python Web Development",
    duration: "Mar 2026 – Jun 2026",
    location: "Bhopal, India",
    responsibilities: [
      "Successfully completed a 3-month Industrial Training in Python Web Development.",
      "Developed a full-stack Smart Student Management System using Django backend, PostgreSQL database, and Bootstrap responsive layouts.",
      "Practiced secure authentication models, session handling, relational database migrations, and Git workflows."
    ],
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "Git", "GitHub"]
  }
];

export const footerContent = {
  taglines: [
    "React & Django Development",
    "BCA Student & Tech Trainee",
    "Full-Stack Web Architectures",
  ],
  credential: "BCA · Marks 75%",
  copyright: `© ${new Date().getFullYear()} Manas Mayank | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
