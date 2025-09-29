import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SEO, seoConfigs } from './SEO';
import { StructuredData, structuredDataConfigs } from './StructuredData';

export function SEOManager() {
  const location = useLocation();
  
  const getSEOConfig = () => {
    const path = location.pathname;
    
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
    const breadcrumbs = [
      { name: 'Home', url: 'https://www.rahmatez.me/' }
    ];
    
    if (path !== '/') {
      const pageName = path.substring(1).charAt(0).toUpperCase() + path.substring(2);
      breadcrumbs.push({
        name: pageName,
        url: `https://www.rahmatez.me${path}`
      });
    }
    
    return structuredDataConfigs.breadcrumb(breadcrumbs);
  };

  useEffect(() => {
    // Send page view to analytics (if Google Analytics is configured)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
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