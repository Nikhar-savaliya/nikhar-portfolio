import {
  AppWindow,
  FileEditIcon,
  GanttChartSquare,
  Pizza,
  Youtube,
} from "lucide-react";

// ****** Project Data ******
export const projects = [
  {
    img: FileEditIcon,
    projectName: "Pearl - Full stack Blog website",
    projectLink: "",
    repository: "https://github.com/Nikhar-savaliya/Pearl",
    projectDetail: [
      "Utilizing Editor JS for a modern blog editing experience.",
      "Google Authentication implemented for user convenience.",
      "Search functionality enables exploration of blogs and users, with dedicated profiles featuring social links and authored content.",
      "Mobile responsiveness and sleek design complemented by fade-in page animations.",
    ],
    techStack: [
      "React",
      "Tailwind",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    img: AppWindow,
    projectName: "Portfolio Website",
    projectLink: "https://nikhar-savaliya.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/nikhar.dev",
    projectDetail: [
      "Portfolio site built with React and Tailwind CSS.",
      "Catppuccin color theme adds vibrancy.",
      "Utilizes Next.js for SSR and prefetching assets.",
      "Lucide-react icons enhance design.",
    ],
    techStack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    img: Youtube,
    projectName: "Youtube Homepage Clone",
    projectLink: "https://you-tube-clone-nikhar-savaliya.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/YouTube-Clone",
    projectDetail: [
      "A YouTube homepage clone project crafted during my journey of learning pure HTML, CSS, and JS.",
      "HTML and CSS were employed to replicate the design of the YouTube homepage.",
      "JavaScript was utilized to implement the necessary functionality.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: GanttChartSquare,
    projectName: "SkillSensei",
    projectLink: "https://skill-sensei.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/SkillSensei",
    projectDetail: [
      "Crafted a landing page for a self-improvement course company.",
      "Utilized HTML and CSS to design the layout and style elements.",
      "Implemented JavaScript for interactive functionality.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: Pizza,
    projectName: "Pizza menu",
    projectLink: "https://pizza-menu-nine.vercel.app",
    repository: "https://github.com/Nikhar-savaliya/pizza-menu",
    projectDetail: [
      "Developed a restaurant menu using React.js.",
      "Styled the page using React with CSS.",
      "Implemented functionality using JavaScript.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];
