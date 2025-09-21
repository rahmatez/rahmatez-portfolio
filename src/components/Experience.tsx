import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Communication and Information Service of Banyumas Regency",
    period: "October 2024 - December 2024",
    description: `Led the rebuild and modernization of the Saka Milenial web platform to improve youth-friendly access to information and services for the Banyumas Regency community. 
Developed and optimized the platform using Laravel framework, modernizing the legacy system with improved security, performance, and user experience. 
Implemented comprehensive features including user authentication, dynamic content management, and responsive design. 
Collaborated effectively with stakeholders to translate community needs into technical solutions and requirements. 
Successfully delivered a modern, secure, and user-friendly web platform that significantly enhanced the digital experience for local youth community.`,
    skills: [
      "Laravel",
      "PHP",
      "Web Development",
      "User Authentication",
      "Content Management",
      "System Modernization",
      "Security Implementation",
      "Performance Optimization",
      "Stakeholder Collaboration",
      "Community Solutions"
    ],
  },
  {
    title: "Content Creator & Digital Marketing",
    company: "PKM-K \"Nypahcans\"",
    period: "February 2024 - August 2024",
    description: `Developed and executed creative content strategies for product/service promotion across social media platforms. 
Designed comprehensive marketing materials to increase brand awareness and reach target audiences effectively. 
Created detailed content guidelines including posting schedules, content themes, and brand consistency standards. 
Analyzed market response and audience engagement metrics to continuously adjust and improve content based on audience feedback. 
Successfully secured national funding for the business proposal through effective presentation and marketing strategies.`,
    skills: [
      "Digital Marketing",
      "Content Strategy",
      "Social Media Marketing",
      "Brand Awareness",
      "Market Analysis",
      "Content Creation",
      "Audience Engagement",
      "Project Management",
      "Business Proposal",
      "Creative Design"
    ],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Building modern web solutions and driving digital innovation through internships and projects">
            Experience
          </SectionTitle>

          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
