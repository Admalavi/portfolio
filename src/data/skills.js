import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiChartdotjs,
  SiGooglegemini,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbBrain } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsDiagram3 } from "react-icons/bs";

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: FaJs },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "Machine Learning", icon: TbBrain },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Matplotlib", icon: BsDiagram3 },
    ],
  },
  {
    title: "APIs / Tools",
    skills: [
      { name: "OpenWeather API", icon: TbApi },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "OOP", icon: BsDiagram3 },
      { name: "CRUD Operations", icon: FaDatabase },
      { name: "JWT Authentication", icon: MdSecurity },
      { name: "Machine Learning Basics", icon: TbBrain },
    ],
  },
];
