import { SectionTitle } from './ui/SectionTitle'; 
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiPython,
  SiStreamlit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGooglecolab,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiApachespark,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiBootstrap,
  SiJquery,
  SiTailwindcss
} from 'react-icons/si';
import { FaChartBar, FaProjectDiagram } from 'react-icons/fa';

// Define tech stack icons & colors
const techStacks = {
  python: { icon: SiPython, name: 'Python', color: '#3776AB' },
  scikit: { icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
  streamlit: { icon: SiStreamlit, name: 'Streamlit', color: '#FF4B4B' },
  pandas: { icon: SiPandas, name: 'Pandas', color: '#150458' },
  numpy: { icon: SiNumpy, name: 'NumPy', color: '#013243' },
  seaborn: { icon: FaProjectDiagram, name: 'Seaborn', color: '#4C9A91' },
  powerbi: { icon: FaChartBar, name: 'Power BI', color: '#F2C811' },
  jupyter: { icon: SiJupyter, name: 'Jupyter Notebook', color: '#F37626' },
  colab: { icon: SiGooglecolab, name: 'Google Colab', color: '#F9AB00' },
  tensorflow: { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  pytorch: { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  html: { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
  css: { icon: SiCss3, name: 'CSS', color: '#1572B6' },
  js: { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  react: { icon: SiReact, name: 'React.js', color: '#61DAFB' },
  node: { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  express: { icon: SiExpress, name: 'Express.js', color: '#000000' },
  mongodb: { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  postgresql: { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  spark: { icon: SiApachespark, name: 'Apache Spark', color: '#E25A1C' },
  php: { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  laravel: { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
  codeigniter: { icon: SiCodeigniter, name: 'CodeIgniter', color: '#EF4223' },
  mysql: { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  bootstrap: { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  jquery: { icon: SiJquery, name: 'jQuery', color: '#0769AD' },
  tailwind : { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38B2AC' }, // Using CSS icon for Tailwind
};

// Define projects
const projects = [
  {
    title: 'e-Ticketing System Brigata Curva Sud',
    description: `As a full-stack developer for the Brigata Curva Sud e-Ticketing System. This web-based application was developed using Laravel 10
    to facilitates online match ticket booking for BCS supporters. The application is integrated with Midtrans for secure payments, 
    generates tickets with unique QR codes for validation, and features match management, sales reporting, notifications, and contact support.`,
    image: '/assets/project/project1.png',
    link: 'https://github.com/rahmatez/',
    github: 'https://github.com/rahmatez/',
    techStack: [
      techStacks.php,
      techStacks.laravel,
      techStacks.mysql,
      techStacks.bootstrap,
      techStacks.js,
      techStacks.css
    ],
  },

  {
    title: 'PTIP Logistics System',
    description: `Developed and added a cancellation feature to all menus in the PTIP Logistics System. 
    This application is a comprehensive logistics management application with features 
    covering the entire procurement and inventory management cycle. Built with a solid 
    MVC architecture using CodeIgniter, this system demonstrates a strong understanding 
    of business processes in the construction logistics sector.`,
    image: '/assets/project/project2.png',
    link: 'https://github.com/rahmatez/',
    github: 'https://github.com/rahmatez/',
    techStack: [
      techStacks.php,
      techStacks.codeigniter,
      techStacks.mysql,
      techStacks.jquery,
      techStacks.bootstrap,
      techStacks.js
    ],
  },

  {
    title: 'Member Information System Application',
    description: `As a full-stack developer for the Member Information System Application
    for the Saka Millennial organization in Banyumas Regency, this application is a modern
    digital solution designed to support effectiveness and efficiency in community management.
    By providing features such as member management, activities, and articles in one centralized platform`,
    image: '/assets/project/project3.png',
    link: 'https://github.com/rahmatez/',
    github: 'https://github.com/rahmatez/',
    techStack: [
      techStacks.php,
      techStacks.laravel,
      techStacks.mysql,
      techStacks.tailwind,
      techStacks.js,
      techStacks.css
    ],
  },

  {
    title: 'Rahmatez-Portfolio',
    description: `Built an AI-powered analyzer for financial news using semantic search. 
Implemented document chunking, vector embeddings, and FAISS similarity search. 
Integrated with an LLM to answer queries contextually. 
Simulates an equity research assistant for investors. 
Designed for efficient retrieval of relevant financial information. 
Provides actionable insights using AI techniques.`,
    image: '/assets/project/project4.png',
    link: 'https://rahmatez.vercel.app/',
    github: 'https://github.com/rahmatez/rahmatez-portfolio',
    techStack: [
      techStacks.python,
      techStacks.tensorflow,
      techStacks.pytorch,
      techStacks.jupyter,
      techStacks.pandas
    ],
  },

  {
    title: 'Counter App',
    description: `Built an AI-powered analyzer for financial news using semantic search. 
Implemented document chunking, vector embeddings, and FAISS similarity search. 
Integrated with an LLM to answer queries contextually. 
Simulates an equity research assistant for investors. 
Designed for efficient retrieval of relevant financial information. 
Provides actionable insights using AI techniques.`,
    image: '/assets/project/project5.png',
    link: 'https://rahmatez.github.io/counter-app/',
    github: 'https://github.com/rahmatez/counter-app',
    techStack: [
      techStacks.python,
      techStacks.tensorflow,
      techStacks.pytorch,
      techStacks.jupyter,
      techStacks.pandas
    ],
  },

  {
    title: 'Story App',
    description: `Built an AI-powered analyzer for financial news using semantic search. 
Implemented document chunking, vector embeddings, and FAISS similarity search. 
Integrated with an LLM to answer queries contextually. 
Simulates an equity research assistant for investors. 
Designed for efficient retrieval of relevant financial information. 
Provides actionable insights using AI techniques.`,
    image: '/assets/project/project6.png',
    link: 'https://story-app-dicoding-1313c.web.app/',
    github: 'https://github.com/rahmatez/story-app-starter-project',
    techStack: [
      techStacks.python,
      techStacks.tensorflow,
      techStacks.pytorch,
      techStacks.jupyter,
      techStacks.pandas
    ],
  },
  
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Crafting code into solutions I’m proud of, from concept to creation">
            Projects
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
