import type { Project, ProjectCategory, ProjectRecord } from '../types/project';
import { PROJECT_CATEGORY_LABELS } from '../types/project';
import { resolveTechStack } from './techStacks';

export { PROJECT_CATEGORY_LABELS };

export const projectRecords: ProjectRecord[] = [
  {
    slug: 'world-cup-2026-score',
    title: 'World Cup 2026 Score',
    description:
      'World Cup 2026 info hub with schedules and live updates in Indonesian time zones, built with Next.js 16 and TypeScript.',
    image: '/assets/project/project12.png',
    link: 'https://worldcup-2026-rahmatez.vercel.app/',
    github: 'https://github.com/rahmatez/worldcup2026-nextjs',
    techStackKeys: ['next', 'typescript', 'tailwind'],
    categories: ['typescript'],
    featured: true,
    year: 2026,
    status: 'live',
    problem:
      'Football fans needed a localized source for World Cup 2026 schedules and updates without relying on English-first platforms.',
    solution:
      'Built a TypeScript-first Next.js app with Indonesian language support, WIB-friendly scheduling, and a clean mobile-first UI.',
    features: [
      'Match schedules and tournament information',
      'Indonesian language interface',
      'Responsive layout with Tailwind CSS 4',
      'Type-safe codebase with TypeScript',
    ],
    results: [
      'Deployed production-ready demo on Vercel',
      'Improved readability for Indonesian users',
    ],
  },
  {
    slug: 'makan-bang',
    title: 'Makan Bang',
    description:
      'Full-stack food ordering app with Auth.js authentication, PostgreSQL, and Midtrans Snap payments.',
    image: '/assets/project/project11.png',
    link: 'https://makanbang-umber.vercel.app/',
    github: 'https://github.com/rahmatez/makanbang-fullstack-nextjs',
    techStackKeys: ['next', 'typescript', 'node', 'postgresql'],
    categories: ['typescript'],
    featured: true,
    year: 2025,
    status: 'live',
    problem:
      'Restaurants needed a digital ordering flow with secure login and payment without building everything from scratch.',
    solution:
      'Delivered an integrated Next.js platform covering menu browsing, user auth, order management, and Midtrans checkout.',
    features: [
      'User authentication with Auth.js',
      'PostgreSQL-backed menu and orders',
      'Midtrans Snap payment integration',
      'Admin-friendly order workflow',
    ],
    results: [
      'End-to-end ordering flow from browse to payment',
      'Production deployment on Vercel',
    ],
  },
  {
    slug: 'stockflow-go',
    title: 'StockFlow-Go',
    description:
      'SaaS inventory and order management dashboard built with Go, PostgreSQL, and Docker.',
    image: '/assets/project/project10.png',
    link: 'https://stock-flow-go.vercel.app/dashboard',
    github: 'https://github.com/rahmatez/stockFlow-go',
    techStackKeys: ['go', 'postgresql', 'node', 'docker', 'typescript', 'next'],
    categories: ['go'],
    featured: true,
    year: 2025,
    status: 'live',
    problem:
      'Small businesses struggled to track stock levels, orders, and reports across disconnected tools.',
    solution:
      'Created StockFlow as a centralized SaaS dashboard for products, inventory, orders, and business reporting.',
    features: [
      'Product and stock level management',
      'Order tracking dashboard',
      'Business report generation',
      'Containerized deployment with Docker',
    ],
    results: [
      'Unified inventory operations in one interface',
      'Scalable Go backend architecture',
    ],
  },
  {
    slug: 'indonesian-tour-travel',
    title: 'Indonesian Tour Travel',
    description:
      'Tour travel website and admin dashboard for content, gallery, MSME products, and complaint management.',
    image: '/assets/project/project9.png',
    github: 'https://github.com/rahmatez/',
    techStackKeys: ['next', 'react', 'typescript', 'node', 'express', 'postgresql'],
    categories: ['typescript'],
    featured: false,
    year: 2025,
    status: 'private',
    problem:
      'A travel operator needed both a public-facing site and an admin panel to manage diverse village tourism content.',
    solution:
      'Built a Next.js application with Express API integration and PostgreSQL for structured content management.',
    features: [
      'Public tour and travel pages',
      'News, gallery, and geography modules',
      'MSME product listings',
      'Complaint management system',
    ],
    results: [
      'Single platform for public content and admin operations',
    ],
  },
  {
    slug: '115-roots-cms',
    title: '115-roots CMS',
    description:
      'Laravel CMS and landing page for PSS Sleman supporters with blog, gallery, events, and online shop.',
    image: '/assets/project/project7.png',
    link: 'https://115roots.com/',
    github: 'https://github.com/rahmatez/115-roots',
    techStackKeys: ['php', 'laravel', 'mysql', 'tailwind', 'js', 'css'],
    categories: ['php'],
    featured: true,
    year: 2025,
    status: 'live',
    problem:
      'The supporter community needed one platform to publish news, events, media, and merchandise.',
    solution:
      'Developed a Laravel CMS with a modern landing page and admin dashboard tailored to community workflows.',
    features: [
      'Blog and photo gallery management',
      'Event publishing',
      'Integrated online shop',
      'Admin dashboard for content teams',
    ],
    results: [
      'Live at 115roots.com',
      'Streamlined content publishing for the community',
    ],
  },
  {
    slug: 'mindaka-village-portal',
    title: 'Mindaka Village Portal',
    description:
      'Village profile website and admin dashboard for news, budget transparency, MSME, and public services.',
    image: '/assets/project/project8.png',
    github: 'https://github.com/rahmatez/village-portal-nextjs',
    techStackKeys: ['next', 'react', 'typescript', 'node', 'express', 'postgresql'],
    categories: ['typescript'],
    featured: false,
    year: 2025,
    status: 'live',
    problem:
      'Village administration lacked a digital portal to share public information and manage citizen services.',
    solution:
      'Built a Next.js village portal with backend APIs for content, transparency data, and complaint handling.',
    features: [
      'Village profile and government info',
      'News and gallery modules',
      'Budget transparency section',
      'MSME and complaint management',
    ],
    results: [
      'Centralized digital presence for village services',
    ],
  },
  {
    slug: 'e-ticketing-bcs',
    title: 'e-Ticketing System Brigata Curva Sud',
    description:
      'Laravel 10 ticketing platform with Midtrans payments, QR validation, and match management for BCS supporters.',
    image: '/assets/project/project1.png',
    techStackKeys: ['php', 'laravel', 'mysql', 'bootstrap', 'js', 'css'],
    categories: ['php'],
    featured: false,
    year: 2024,
    status: 'private',
    problem:
      'Supporter groups needed secure online ticket sales with fraud-resistant validation on match day.',
    solution:
      'Implemented a Laravel ticketing system with Midtrans, unique QR tickets, reporting, and admin match controls.',
    features: [
      'Online ticket booking',
      'Midtrans payment integration',
      'QR code ticket validation',
      'Sales reporting and notifications',
    ],
    results: [
      'Reduced manual ticket handling',
      'Secure payment and validation workflow',
    ],
  },
  {
    slug: 'ptip-logistics',
    title: 'PTIP Logistics System',
    description:
      'CodeIgniter logistics system covering procurement, inventory cycles, and cancellation workflows.',
    image: '/assets/project/project2.png',
    techStackKeys: ['php', 'codeigniter', 'mysql', 'jquery', 'bootstrap', 'js'],
    categories: ['php'],
    featured: false,
    year: 2024,
    status: 'private',
    problem:
      'Construction logistics teams needed reliable procurement tracking and consistent cancellation handling.',
    solution:
      'Extended the PTIP system with cancellation support across modules using CodeIgniter MVC architecture.',
    features: [
      'Procurement and inventory management',
      'Cancellation flow across menus',
      'Reporting for logistics operations',
      'MVC-based maintainable codebase',
    ],
    results: [
      'More consistent inventory lifecycle management',
    ],
  },
  {
    slug: 'member-information-system',
    title: 'Member Information System Application',
    description:
      'Laravel platform for Saka Millennial Banyumas to manage members, activities, and articles.',
    image: '/assets/project/project3.png',
    techStackKeys: ['php', 'laravel', 'mysql', 'tailwind', 'js', 'css'],
    categories: ['php'],
    featured: false,
    year: 2024,
    status: 'private',
    problem:
      'Youth organization records were scattered across spreadsheets and manual processes.',
    solution:
      'Built a centralized Laravel app for member data, activities, and internal publishing.',
    features: [
      'Member database management',
      'Activity tracking',
      'Article publishing',
      'Responsive Tailwind UI',
    ],
    results: [
      'Improved organization data accuracy',
    ],
  },
  {
    slug: 'rahmatez-portfolio',
    title: 'rahmatez-portfolio',
    description:
      'Modern portfolio built with React, TypeScript, and TailwindCSS to showcase skills, projects, and experience.',
    image: '/assets/project/project4.png',
    link: 'https://rahmatez.vercel.app/',
    github: 'https://github.com/rahmatez/rahmatez-portfolio',
    techStackKeys: ['typescript', 'react', 'vite', 'tailwind'],
    categories: ['typescript', 'javascript'],
    featured: false,
    year: 2024,
    status: 'live',
    problem:
      'Needed a personal site that presents projects, certifications, and resume in one professional experience.',
    solution:
      'Developed a responsive SPA with routing, dark mode, SEO, analytics, and PDF resume viewing.',
    features: [
      'Multi-page portfolio with React Router',
      'Dark and light theme',
      'SEO metadata and structured data',
      'Contact form and resume viewer',
    ],
    results: [
      'Deployed on Vercel with automated builds',
      'Strong personal branding presence online',
    ],
  },
  {
    slug: 'stock-management',
    title: 'Stock Management',
    description:
      'Inventory monitoring app with real-time data integration and stock analysis visualization.',
    image: '/assets/project/project5.png',
    link: 'https://story-app-dicoding-1313c.web.app/',
    github: 'https://github.com/rahmatez/story-app-starter-project',
    techStackKeys: ['typescript', 'react', 'next', 'prisma', 'postgres', 'tailwind'],
    categories: ['typescript'],
    featured: false,
    year: 2024,
    status: 'live',
    problem:
      'Teams needed clearer visibility into stock movement and inventory trends.',
    solution:
      'Built a Next.js app with Prisma and PostgreSQL for structured inventory tracking and analysis views.',
    features: [
      'Stock monitoring dashboard',
      'Database-backed inventory records',
      'Analysis-friendly data presentation',
      'Modern React UI with Tailwind',
    ],
    results: [
      'More informed inventory decisions',
    ],
  },
  {
    slug: 'crypto-tracker',
    title: 'Crypto Tracker',
    description:
      'Production-ready crypto dashboard with live prices, watchlist, analytics, and USD/IDR switcher.',
    image: '/assets/project/project6.png',
    link: 'https://crypto-tracker-chi-pearl.vercel.app/',
    github: 'https://github.com/rahmatez/crypto-tracker',
    techStackKeys: ['typescript', 'react', 'next', 'tailwind'],
    categories: ['typescript'],
    featured: true,
    year: 2024,
    status: 'live',
    problem:
      'Crypto investors wanted a lightweight dashboard with localized currency support and watchlist persistence.',
    solution:
      'Created a Next.js dashboard integrated with CoinGecko for market data, watchlists, and coin analytics.',
    features: [
      'Live cryptocurrency market prices',
      'Persistent watchlist',
      'Detailed coin analytics pages',
      'USD and IDR currency switcher',
    ],
    results: [
      'Production deployment with real-time market data',
      'Improved monitoring workflow for active traders',
    ],
  },
];

function toProject(record: ProjectRecord): Project {
  const { techStackKeys, ...rest } = record;
  return {
    ...rest,
    techStack: resolveTechStack(techStackKeys),
  };
}

export const projects: Project[] = projectRecords.map(toProject);

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories: ProjectCategory[] = ['typescript', 'php', 'go', 'javascript'];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectSlugs = projectRecords.map((project) => project.slug);
