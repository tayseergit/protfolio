import heroImage from '../assets/hero.png';

export const portfolioData = {
  hero: {
    name: "Tayseer Matar",
    title: "Software Engineer | Mobile Engineer",
    tagline: "Building scalable mobile apps & real-time systems with high performance",
    availability: "Available for freelance & full-time opportunities",
    cvLink: "https://drive.google.com/drive/folders/1W22cMiG4GF1gUs5pcD-2yNKpCxczPRjh",
    image: heroImage
  },
  
  about: {
    description: "I am a skilled Software and Mobile Engineer with a strong focus on high-performance mobile development and real-time systems. My expertise lies in designing robust solutions using clean architecture principles, ensuring systems are both scalable and maintainable. I thrive on optimizing performance, whether it's managing low-latency audio streaming or architecting complex backend integrations."
  },

  skills: [
    { category: "Programming", items: ["Dart", "Python", "C++", "Java"] },
    { category: "Mobile", items: ["Flutter"] },
    { category: "Architecture", items: ["Clean Architecture", "MVC"] },
    { category: "State Management", items: ["Bloc", "Cubit", "GetX"] },
    { category: "Networking", items: ["UDP", "TCP", "WebSocket"] },
    { category: "Backend", items: ["REST APIs", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub"] }
  ],

  projects: [
    {
      id: 1,
      title: "Walkie Talkie App",
      description: "Real-time voice communication across Local Area Networks. Supports one-to-one, one-to-many, and broadcast functionalities with low latency audio streaming.",
      techStack: ["Flutter", "UDP/TCP", "Audio Streaming"],
      image: null, // Add your imported image here, similar to hero Image
      imagePlaceholder: "Walkie Talkie UI",
      github: "https://github.com/tayseergit/Walkie_Talkie" // To be updated by user
    },
    {
      id: 2,
      title: "E-Learning System",
      description: "A comprehensive role-based learning platform with real-time Firebase integration, featuring a responsive UI tailored for various user roles.",
      techStack: ["Flutter", "Firebase", "Cubit"],
      image: null,
      imagePlaceholder: "E-Learning Dashboard",
      github: "https://github.com/tayseergit/SCRIPTS" // To be updated by user
    },
    {
      id: 3,
      title: "E-Commerce App",
      description: "Scalable e-commerce application featuring product listing, advanced cart systems, and secure authentication flows.",
      techStack: ["Flutter", "Cubit"],
      image: null,
      imagePlaceholder: "E-Commerce Storefront",
      github: "https://github.com/tayseergit/flutter_app_E-commerce" // To be updated by user
    }
  ],

  contact: {
    email: "mailto:eng.tayseermatar@gmail.com", // To be updated by user
    github: "https://github.com/tayseergit", // Placeholder
    linkedin: "https://www.linkedin.com/in/tayseer-matar-7b3a83333" // Placeholder
  }
};
