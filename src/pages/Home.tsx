import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      aria-label="Rahmat Ashari Portfolio Homepage"
    >
      <Hero />
      <Footer />
    </div>
  );
}