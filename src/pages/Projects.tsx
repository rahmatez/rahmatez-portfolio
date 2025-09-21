import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}