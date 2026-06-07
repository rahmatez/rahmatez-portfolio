import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SEO, seoConfigs } from './SEO';
import { StructuredData, structuredDataConfigs } from './StructuredData';
import { getProjectBySlug } from '../data/projects';

const SITE_URL = 'https://www.rahmatez.me';

export function SEOManager() {
  const location = useLocation();

  const getSEOConfig = () => {
    const path = location.pathname;

    if (path.startsWith('/projects/')) {
      const slug = path.split('/')[2];
      const project = slug ? getProjectBySlug(slug) : undefined;
      if (project) {
        return {
          title: `${project.title} - Rahmat Ashari`,
          description: project.description,
          url: `${SITE_URL}/projects/${project.slug}`,
        };
      }
    }

    switch (path) {
      case '/':
        return seoConfigs.home;
      case '/about':
        return seoConfigs.about;
      case '/projects':
        return seoConfigs.projects;
      case '/certifications':
        return seoConfigs.certifications;
      case '/contact':
        return seoConfigs.contact;
      case '/resume':
        return seoConfigs.resume;
      case '/404':
        return {
          title: '404 - Page Not Found | Rahmat Ashari',
          description: 'The page you are looking for could not be found.',
          url: `${SITE_URL}/404`,
        };
      default:
        return seoConfigs.home;
    }
  };

  const getStructuredData = () => {
    const path = location.pathname;

    switch (path) {
      case '/':
        return structuredDataConfigs.person;
      case '/projects':
        return structuredDataConfigs.projects;
      default:
        return structuredDataConfigs.portfolio;
    }
  };

  const getBreadcrumbData = () => {
    const path = location.pathname;
    const breadcrumbs = [{ name: 'Home', url: `${SITE_URL}/` }];

    if (path.startsWith('/projects/')) {
      const slug = path.split('/')[2];
      const project = slug ? getProjectBySlug(slug) : undefined;
      breadcrumbs.push({ name: 'Projects', url: `${SITE_URL}/projects` });
      if (project) {
        breadcrumbs.push({
          name: project.title,
          url: `${SITE_URL}/projects/${project.slug}`,
        });
      }
    } else if (path !== '/') {
      const segment = path.replace(/^\//, '');
      const pageName = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        name: pageName,
        url: `${SITE_URL}${path}`,
      });
    }

    return structuredDataConfigs.breadcrumb(breadcrumbs);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  const seoConfig = getSEOConfig();

  return (
    <>
      <SEO {...seoConfig} />
      <StructuredData data={getStructuredData()} id="page-data" />
      <StructuredData data={getBreadcrumbData()} id="breadcrumb-data" />
    </>
  );
}
