import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "Results-driven Informatics Engineering graduate specializing in Frontend & Backend Development.",
      "Proven experience in building and modernizing web applications using Laravel, React.js, and Node.js.",
      "A collaborative team player with strong project management and problem-solving skills.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop full-stack web applications with modern frameworks and technologies.",
      "Create responsive, user-friendly interfaces and robust backend systems.",
      "Lead project development with strong focus on performance and user experience.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Continuously advance as a Full-Stack Developer with expertise in modern web technologies.",
      "Build scalable web platforms that create real value for users and businesses.",
      "Contribute to innovative projects that shape the future of web development.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
    "Clean code is not just about functionality, but about maintainability and collaboration.",
    "Great applications should deliver exceptional user experience with optimal performance.",
    "Every project is an opportunity to learn, innovate, and make a positive impact.",
  ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Building modern web applications with expertise in Frontend & Backend Development.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Rahmat Ashari</span>, 
              an Informatics Engineering graduate with a GPA of 3.63, specializing in Frontend & Backend Development. 
              I have proven experience in building and modernizing web applications using Laravel, React.js, and Node.js, 
              demonstrated through academic projects and impactful internships. 
              My journey combines technical expertise with strong project management skills — all driven by a passion to create innovative web solutions that make a real difference.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 Turning ideas into exceptional web experiences
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}



