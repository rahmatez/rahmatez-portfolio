import { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
  id?: string;
}

export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data script if any
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new structured data script
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null;
}

// Structured data configurations for different pages
export const structuredDataConfigs = {
  portfolio: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Rahmat Ashari Portfolio",
    "author": {
      "@type": "Person",
      "name": "Rahmat Ashari",
      "jobTitle": "Full Stack Developer",
      "url": "https://rahmatez.me",
      "sameAs": [
        "https://github.com/rahmatez",
        "https://linkedin.com/in/rahmatez"
      ]
    },
    "description": "Professional portfolio showcasing full stack development projects and expertise",
    "url": "https://www.rahmatez.me",
    "dateCreated": "2024-01-01",
    "dateModified": "2025-09-29"
  },

  projects: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Rahmat Ashari Development Projects",
    "description": "Collection of full stack development projects by Rahmat Ashari",
    "numberOfItems": 20,
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "E-commerce Platform",
        "description": "Full stack e-commerce solution built with Laravel and React",
        "applicationCategory": "Web Application",
        "operatingSystem": "Web Browser",
        "programmingLanguage": ["PHP", "JavaScript", "TypeScript"]
      }
    ]
  },

  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahmat Ashari",
    "alternateName": "Rahmat",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer specializing in Laravel, React.js, Node.js, and modern web technologies",
    "url": "https://www.rahmatez.me",
    "image": "https://www.rahmatez.me/assets/rahmatez.png",
    "sameAs": [
      "https://github.com/rahmatez",
      "https://linkedin.com/in/rahmatez"
    ],
    "knowsAbout": [
      "Laravel",
      "React.js", 
      "Node.js",
      "JavaScript",
      "TypeScript",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Google Cloud",
      "DevOps",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Dicoding Indonesia"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AWS Solutions Architect",
        "credentialCategory": "Cloud Computing",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Amazon Web Services"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Cloud Certified",
        "credentialCategory": "Cloud Computing",
        "recognizedBy": {
          "@type": "Organization", 
          "name": "Google Cloud"
        }
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
};