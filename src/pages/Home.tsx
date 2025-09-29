import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <main 
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      role="main"
      aria-label="Rahmat Ashari Portfolio Homepage"
    >
      <Hero />
      <Footer />
    </main>
  );
}