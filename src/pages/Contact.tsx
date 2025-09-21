import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}