import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { PageLoader } from './components/ui/PageLoader';
import { PageTransition } from './components/ui/PageTransition';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { SEOManager } from './components/SEOManager';

const AboutPage = lazy(() =>
  import('./pages/About').then((module) => ({ default: module.AboutPage }))
);
const ProjectsPage = lazy(() =>
  import('./pages/Projects').then((module) => ({ default: module.ProjectsPage }))
);
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetail').then((module) => ({ default: module.ProjectDetailPage }))
);
const CertificationsPage = lazy(() =>
  import('./pages/Certifications').then((module) => ({ default: module.CertificationsPage }))
);
const ResumePage = lazy(() =>
  import('./pages/Resume').then((module) => ({ default: module.ResumePage }))
);
const ContactPage = lazy(() =>
  import('./pages/Contact').then((module) => ({ default: module.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFound').then((module) => ({ default: module.NotFoundPage }))
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <SEOManager />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <main id="main-content">
          <AnimatedRoutes />
        </main>
      </Suspense>
      <ScrollToTop />
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
