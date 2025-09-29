import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Rahmat Ashari - Expert Full Stack Developer | Laravel, React.js, Node.js Portfolio",
  description = "Professional Full Stack Developer specializing in Laravel, React.js, Node.js, and modern web technologies. View my portfolio with 20+ projects, certifications from AWS, Google Cloud, and comprehensive development experience.",
  keywords = "Rahmat Ashari, Full Stack Developer, Frontend Developer, Backend Developer, Laravel Expert, React.js Developer, Node.js Developer, JavaScript Expert, TypeScript Developer, Web Development, Portfolio",
  image = "https://www.rahmatez.me/assets/rahmatez.png",
  url = "https://www.rahmatez.me/",
  type = "website"
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      let selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = url;
    }
    
  }, [title, description, keywords, image, url, type]);

  return null;
}

// Pre-defined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: "Rahmat Ashari - Expert Full Stack Developer | Laravel, React.js, Node.js Portfolio",
    description: "Professional Full Stack Developer with 3+ years experience. Specialized in Laravel, React.js, Node.js. 20+ completed projects, AWS & Google Cloud certified. Available for freelance and full-time opportunities.",
    keywords: "Rahmat Ashari, Full Stack Developer, Laravel Developer, React Developer, Node.js Expert, JavaScript Developer, PHP Developer, Web Development Services, Portfolio, Freelancer",
    url: "https://www.rahmatez.me/"
  },
  about: {
    title: "About Rahmat Ashari - Full Stack Developer Experience & Skills",
    description: "Learn about Rahmat Ashari's journey as a Full Stack Developer. 3+ years experience, expertise in Laravel, React.js, Node.js, AWS, Google Cloud. Multiple certifications and proven track record.",
    keywords: "Rahmat Ashari About, Full Stack Developer Experience, Laravel Expert, React Developer Skills, Programming Background, Web Developer Bio",
    url: "https://www.rahmatez.me/about"
  },
  projects: {
    title: "Rahmat Ashari Projects - Full Stack Development Portfolio",
    description: "Explore 20+ full stack development projects by Rahmat Ashari. Laravel applications, React.js websites, Node.js APIs, e-commerce solutions, and modern web applications with source code.",
    keywords: "Rahmat Ashari Projects, Laravel Projects, React Projects, Node.js Applications, Full Stack Portfolio, Web Development Examples, GitHub Projects",
    url: "https://www.rahmatez.me/projects"
  },
  certifications: {
    title: "Rahmat Ashari Certifications - AWS, Google Cloud, Web Development",
    description: "View Rahmat Ashari's professional certifications including AWS Solutions Architect, Google Cloud, JavaScript, React, Laravel, and various web development credentials from reputable institutions.",
    keywords: "Rahmat Ashari Certifications, AWS Certified, Google Cloud Certified, Web Development Certificates, Programming Certifications, Professional Credentials",
    url: "https://www.rahmatez.me/certifications"
  },
  contact: {
    title: "Contact Rahmat Ashari - Hire Full Stack Developer",
    description: "Contact Rahmat Ashari for full stack development projects. Available for Laravel, React.js, Node.js development, web applications, API development, and consulting services.",
    keywords: "Contact Rahmat Ashari, Hire Full Stack Developer, Laravel Developer for Hire, React Developer Contact, Web Development Services, Freelance Developer",
    url: "https://www.rahmatez.me/contact"
  },
  resume: {
    title: "Rahmat Ashari Resume - Full Stack Developer CV Download",
    description: "Download Rahmat Ashari's professional resume. Full Stack Developer with Laravel, React.js, Node.js expertise. 3+ years experience, multiple certifications, and proven project portfolio.",
    keywords: "Rahmat Ashari Resume, Full Stack Developer CV, Laravel Developer Resume, React Developer CV, Web Developer Resume Download",
    url: "https://www.rahmatez.me/resume"
  }
};