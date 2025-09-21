import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { 
  SiJavascript, 
  SiPhp, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMysql, 
  SiLaravel, 
  SiReact, 
  SiCodeigniter, 
  SiNodedotjs,  
  SiBootstrap, 
  SiTailwindcss, 
  SiLinux, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiFigma, 
  SiWebpack,
  SiNextdotjs,
  SiSass,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiJira,
  SiUbuntu,
  SiNotion,
  SiCanva,
  SiPostman,
  SiMongodb,
  SiDigitalocean,
  SiHeroku,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaWindows } from "react-icons/fa";

const skills = [
  // Programming Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", url: "https://www.php.net/" },
  { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "SQL", icon: SiMysql, color: "#4479A1", url: "https://www.mysql.com/" },

  // Frameworks & Libraries
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", url: "https://laravel.com/" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", url: "https://reactjs.org/" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223", url: "https://codeigniter.com/" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", url: "https://getbootstrap.com/" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", url: "https://tailwindcss.com/" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
  { name: "Sass", icon: SiSass, color: "#CC6699", url: "https://sass-lang.com/" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", url: "https://webpack.js.org/" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://www.mongodb.com/" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", url: "https://supabase.com/" },

  // Cloud & Deployment
  { name: "Vercel", icon: SiVercel, color: "#000000", url: "https://vercel.com/" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", url: "https://www.netlify.com/" },

  // Tools & Platforms
  { name: "Windows", icon: FaWindows, color: "#0078D4", url: "https://www.microsoft.com/windows" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420", url: "https://ubuntu.com/" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", url: "https://www.linux.org/" },
  { name: "Git", icon: SiGit, color: "#F05032", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", url: "https://www.postman.com/" },
  { name: "Jira", icon: SiJira, color: "#0052CC", url: "https://www.atlassian.com/software/jira" },
  { name: "Notion", icon: SiNotion, color: "#000000", url: "https://www.notion.so/" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", url: "https://www.figma.com/" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC", url: "https://www.canva.com/" },
  { name: "VS Code", icon: DiVisualstudio, color: "#007ACC", url: "https://code.visualstudio.com/" },
  { name: "Digital Ocean", icon: SiDigitalocean, color: "#007ACC", url: "https://www.digitalocean.com/" },
  { name: "Heroku", icon: SiHeroku, color: "#430098", url: "https://www.heroku.com/" }
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Specialized in Frontend & Backend Development with modern web technologies and frameworks 💻�">
            Skills & Tools
          </SectionTitle>

          <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard 
                key={tech.name} 
                name={tech.name} 
                icon={tech.icon} 
                color={tech.color} 
                url={tech.url} 
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}