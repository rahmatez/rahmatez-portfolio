import { Certifications } from '../components/Certifications';
import { Footer } from '../components/Footer';

export function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20" style={{ paddingTop: '4rem' }}>
        <Certifications />
      </div>
      <Footer />
    </div>
  );
}