import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Got a project, want to collaborate, or looking for talent? Let's connect!">
            Get In Touch
          </SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Lets Connect
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interested in web development or looking for a dedicated developer? Whether its collaborating on a project, building something innovative, or exploring opportunities, I would love to hear from you!
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am open to freelance projects, full-time roles, and exciting collaborations. Lets create something amazing together.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Drop me a message and I will get back to you personally! 
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rahmatezdev@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>rahmatezdev@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/rahmatez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/rahmatez</span>
                </a>
                
                <a
                  href="https://id.linkedin.com/in/rahmat-ashari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/rahmat-ashari</span>
                </a>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
