import React from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "./hero/SocialLinks";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link
      to={to}
      className="text-gray-500 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ to, label }) => (
              <FooterLink key={to} to={to}>
                {label}
              </FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Views Counter */}
          <div className="flex justify-center">
            <a
              href="https://github.com/rahmatez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://komarev.com/ghpvc/?username=rahmatez&label=Profile%20views&color=0e75b6&style=flat"
                alt="Views"
                className="rounded-lg"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>© {currentYear} Rahmat Ashari. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Built with{" "}
              <FaReact className="w-6 h-6 text-blue-500 animate-spin" /> and{" "}
              <SiVite className="w-6 h-6 text-yellow-500 animate-pulse" />
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
