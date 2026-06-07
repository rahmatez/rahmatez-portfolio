# 🚀 Rahmat Ashari - Portfolio Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rahmatez/rahmatez-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.5-purple)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.13-blue)](https://tailwindcss.com/)

> Modern, responsive, and interactive portfolio website showcasing skills, projects, and professional experience in Frontend & Backend Development.

## 🌟 Live Demo

🔗 **[https://rahmatez.vercel.app](https://rahmatez.vercel.app)**

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This is a modern, fully responsive portfolio website built with React, TypeScript, and TailwindCSS. The website showcases my professional skills, projects, certifications, and experience as a Frontend & Backend Developer. It features smooth animations, dark/light mode toggle, PDF resume viewer, and contact form integration.

## ✨ Features

### 🎨 **Design & UX**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean, professional design with TailwindCSS
- **Custom Cursor** - Interactive cursor effects

### 📄 **Content Sections**
- **Hero Section** - Dynamic introduction with typewriter effect
- **About** - Professional background and personal information
- **Skills & Tools** - Interactive skill cards with authentic brand colors
- **Experience** - Professional work history and achievements
- **Projects** - Featured projects with live demos and GitHub links
- **Certifications** - Professional certifications and achievements
- **Resume** - Integrated PDF viewer with download functionality
- **Contact** - Working contact form with email integration

### ⚡ **Performance & Technical**
- **Fast Loading** - Optimized build with Vite
- **SEO Optimized** - Meta tags and semantic HTML
- **Analytics Integration** - Vercel Analytics for insights
- **Type Safety** - Full TypeScript implementation
- **Code Quality** - ESLint and Stylelint configuration
- **Progressive Web App** - PWA capabilities

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with Hooks and functional components
- **TypeScript 5.6.3** - Type-safe development
- **Vite 6.2.5** - Fast build tool and development server

### **Styling & UI**
- **TailwindCSS 3.4.13** - Utility-first CSS framework
- **Framer Motion 11.15.0** - Smooth animations and transitions
- **React Icons 5.4.0** - Comprehensive icon library
- **Lucide React 0.344.0** - Beautiful SVG icons

### **Routing & Navigation**
- **React Router DOM 7.9.1** - Client-side routing

### **PDF Integration**
- **React PDF 6.2.2** - PDF document rendering
- **PDF.js 5.4.149** - PDF processing engine

### **Form Handling**
- **Formspree React 2.5.1** - Contact form backend

### **Analytics & Monitoring**
- **Vercel Analytics 1.4.1** - Performance and user analytics

### **Additional Features**
- **React GitHub Calendar 4.5.5** - GitHub contribution visualization
- **React Slick 0.30.3** - Carousel/slider components

### **Development Tools**
- **ESLint 9.9.1** - Code linting and quality
- **Stylelint 16.24.0** - CSS/SCSS linting
- **PostCSS 8.4.47** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahmatez/rahmatez-portfolio.git
   cd rahmat-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Building
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:css     # Run Stylelint for CSS

# Deployment
npm run deploy       # Deploy to GitHub Pages (if configured)
```

## 📁 Project Structure

```
rahmat-portfolio/
├── public/                 # Static assets
│   ├── assets/            # Images, PDFs, certificates
│   │   ├── *.jpg          # Project screenshots
│   │   ├── *.pdf          # Resume and certificates
│   │   └── favicon-*      # Favicon files
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Skills.tsx    # Skills & tools
│   │   └── ...           # Other components
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx  # Dark/light mode
│   ├── hooks/            # Custom React hooks
│   │   ├── useTheme.ts   # Theme management
│   │   └── ...           # Other hooks
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage
│   │   ├── Resume.tsx    # Resume page
│   │   └── ...           # Other pages
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .vscode/              # VS Code settings
├── .stylelintrc.json     # Stylelint configuration
├── eslint.config.js      # ESLint configuration
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── vercel.json           # Vercel deployment config
└── package.json          # Dependencies and scripts
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub** (already done)
2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     ```
     Framework: Vite
     Build Command: npm run build
     Output Directory: dist
     Install Command: npm install
     ```
3. **Deploy** - Automatic deployment on every push to main branch

### Manual Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# The built files will be in the 'dist' directory
```

## 🎨 Customization

### **Personal Information**
Update your personal details in:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section information
- `src/components/Contact.tsx` - Contact information
- `public/assets/` - Replace photos and resume PDF

### **Skills & Technologies**
Modify skills in `src/components/Skills.tsx`:
```typescript
const skills = [
  { 
    name: "Your Skill", 
    icon: YourIcon, 
    color: "#HexColor", 
    url: "https://skill-website.com" 
  },
  // Add more skills...
];
```

### **Projects**
Update projects in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/assets/project-image.jpg",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-username/project"
  },
  // Add more projects...
];
```

### **Theme Colors**
Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-primary-color',
      secondary: '#your-secondary-color',
    }
  }
}
```

### **Contact Form**
Set up contact form with Formspree:
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update in `src/components/Contact.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rahmat Ashari**
- 📧 Email: [rahmatez@example.com](mailto:rahmatez@example.com)
- 💼 LinkedIn: [linkedin.com/in/rahmat-ashari](https://www.linkedin.com/in/rahmat-ashari)
- 🐱 GitHub: [github.com/rahmatez](https://github.com/rahmatez)
- 🌐 Website: [https://rahmatez.vercel.app](https://rahmatez.vercel.app)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vercel** - For excellent deployment platform
- **TailwindCSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **React Icons** - For the comprehensive icon library

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Rahmat Ashari](https://github.com/rahmatez)

</div>
