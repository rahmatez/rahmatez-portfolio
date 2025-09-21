import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { CertificationsPage } from './pages/Certifications';
import { ResumePage } from './pages/Resume';
import { ContactPage } from './pages/Contact';
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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