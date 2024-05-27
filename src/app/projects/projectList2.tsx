import {
  AppWindow,
  Book,
  FileEditIcon,
  GanttChartSquare,
  LucideIcon,
  Pizza,
  Youtube,
} from "lucide-react";

export interface Project {
  name: string;
  icon: LucideIcon; // Assuming you're using TypeScript with React
  shortDescription: string;
  techstack: {
    backend: string[];
    frontend: string[];
  };
  longDescription: string;
  features: string[];
  livePreviewLink: string;
  youtubeDemoLink: string;
  GithubRepoLink: string;
}

export const projects: Project[] = [
  {
    name: "Pearl",
    icon: FileEditIcon,
    shortDescription: "Mean stack blog website inspired by Medium.com",
    techstack: {
      backend: ["Express.JS", "JavaScript", "MongoDB", "Firebase"],
      frontend: ["React", "Tailwind", "ContextAPI"],
    },
    longDescription:
      "Pearl is a full-stack blog website clone of Medium. It utilizes Editor JS for a modern blog editing experience and implements Google Authentication for user convenience. The search functionality allows exploration of blogs and user profiles, which include social links and authored content. Pearl's design is mobile-responsive and enhanced with sleek fade-in page animations.",
    features: [
      "Utilizing Editor JS for a modern blog editing experience.",
      "Google Authentication implemented for user convenience.",
      "Search functionality enables exploration of blogs and users, with dedicated profiles featuring social links and authored content.",
      "Mobile responsiveness and sleek design complemented by fade-in page animations.",
    ],
    livePreviewLink: "",
    youtubeDemoLink: "",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/Pearl",
  },
  {
    name: "eLib",
    icon: Book,
    shortDescription: "Full stack e-library website",
    techstack: {
      backend: ["Express.js", "Typescript", "MongoDB", "Cloudinary"],
      frontend: ["Next.js", "TypeScript", "shadcn UI"],
    },
    longDescription:
      "A full-stack e-library website that provides users with a beautiful UI for a better experience. Users can submit digital books with title, author, genre, description, and file. Cloudinary Integration is used to store digital book files securely and accessibly. The website also includes authentication and authorization mechanisms to ensure data security and privacy. Robust APIs are developed for book submission, metadata management, and retrieval, along with comprehensive error handling and system logging.",
    features: [
      "Beautiful UI for a better experience",
      "Enable users to submit digital books with title, author, genre, description, and file.",
      "Cloudinary Integration to store digital book files securely and accessibly.",
      "Authentication and Authorization to ensure data security and privacy.",
      "Develop robust APIs for book submission, metadata management, and retrieval.",
      "Implement comprehensive mechanisms for error handling and system logging.",
    ],
    livePreviewLink: "https://elib-demo.vercel.app/",
    youtubeDemoLink: "",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/elib-client",
  },
  {
    name: "Portfolio",
    icon: AppWindow,
    shortDescription: "Portfolio website built with Next.js and Tailwind CSS.",
    techstack: {
      backend: [],
      frontend: ["Next.js", "Tailwind", "TypeScript"],
    },
    longDescription:
      "Portfolio site built with React and Tailwind CSS. Catppuccin color theme adds vibrancy. Utilizes Next.js for SSR and prefetching assets. Lucide-react icons enhance design.",
    features: [
      "Portfolio site built with React and Tailwind CSS.",
      "Catppuccin color theme adds vibrancy.",
      "Utilizes Next.js for SSR and prefetching assets.",
      "Lucide-react icons enhance design.",
    ],
    livePreviewLink: "https://nikhar-savaliya.vercel.app",
    youtubeDemoLink: "",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/nikhar.dev",
  },
  {
    name: "Youtube Clone",
    icon: Youtube,
    shortDescription: "A YouTube homepage clone project.",
    techstack: {
      backend: [],
      frontend: ["HTML", "CSS", "JavaScript"],
    },
    longDescription:
      "A YouTube homepage clone project crafted during my journey of learning pure HTML, CSS, and JS. HTML and CSS were employed to replicate the design of the YouTube homepage. JavaScript was utilized to implement the necessary functionality.",
    features: [
      "A YouTube homepage clone project crafted during my journey of learning pure HTML, CSS, and JS.",
      "HTML and CSS were employed to replicate the design of the YouTube homepage.",
      "JavaScript was utilized to implement the necessary functionality.",
    ],
    livePreviewLink: "https://you-tube-clone-nikhar-savaliya.vercel.app",
    youtubeDemoLink: "",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/YouTube-Clone",
  },
  {
    name: "SkillSensei",
    icon: GanttChartSquare,
    shortDescription: "A Landing page for a EduTech company.",
    techstack: {
      backend: [],
      frontend: ["HTML", "CSS", "JavaScript"],
    },
    longDescription:
      "Crafted a landing page for a self-improvement course company. Utilized HTML and CSS to design the layout and style elements. Implemented JavaScript for interactive functionality.",
    features: [
      "Crafted a landing page for a self-improvement course company.",
      "Utilized HTML and CSS to design the layout and style elements.",
      "Implemented JavaScript for interactive functionality.",
    ],
    livePreviewLink: "https://skill-sensei.vercel.app",
    youtubeDemoLink: "fsfsfs",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/SkillSensei",
  },
  {
    name: "Pizza menu",
    icon: Pizza,
    shortDescription: "A restaurant menu using React.js.",
    techstack: {
      backend: [],
      frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    longDescription:
      "Developed a restaurant menu using React.js. Styled the page using React with CSS. Implemented functionality using JavaScript.",
    features: [
      "Developed a restaurant menu using React.js.",
      "Styled the page using React with CSS.",
      "Implemented functionality using JavaScript.",
    ],
    livePreviewLink: "https://pizza-menu-nine.vercel.app",
    youtubeDemoLink: "",
    GithubRepoLink: "https://github.com/Nikhar-savaliya/pizza-menu",
  },
];
