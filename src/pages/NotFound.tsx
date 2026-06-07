import { Link } from 'react-router-dom';
import { Home, FolderKanban } from 'lucide-react';
import { Footer } from '../components/Footer';
import { AnimateIn } from '../components/ui/AnimateIn';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20 pb-16 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <AnimateIn immediate delay={0}>
          <p className="text-7xl font-bold text-slate-200 dark:text-slate-800 mb-4">404</p>
        </AnimateIn>
        <AnimateIn immediate delay={100}>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Page not found
          </h1>
        </AnimateIn>
        <AnimateIn immediate delay={200}>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
            The page you are looking for does not exist or may have been moved.
          </p>
        </AnimateIn>
        <AnimateIn immediate delay={300}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 font-medium transition-all duration-300 hover:scale-105"
            >
              <FolderKanban className="w-4 h-4" />
              View Projects
            </Link>
          </div>
        </AnimateIn>
      </div>
      <Footer />
    </div>
  );
}
