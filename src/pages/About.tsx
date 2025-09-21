import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Highlights } from '../components/Highlights';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <About />
        <Skills />
        <Experience />
        <Highlights />
      </div>
      <Footer />
    </div>
  );
}