import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

// ✅ Navbar Items
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/95 dark:bg-gray-950/95 border-b border-gray-200/20 dark:border-gray-700/20 motion-safe:animate-[nav-enter_0.4s_ease-out_forwards]">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Home">
          <img
            src="/assets/navbar-logo.png"
            alt="Rahmat Ashari"
            className="h-11 w-11 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-[15px] transition-colors duration-300 ${
                location.pathname === item.href
                  ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 dark:bg-gray-950/98 px-4 py-2 space-y-2 border-b border-gray-200/20 dark:border-gray-700/20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block py-2 transition-colors duration-300 ${
                location.pathname === item.href
                  ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
