import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-10 relative ${className}`}>
      <div className="flex flex-col text-center items-center">        
        {/* Main Title */}
        <h2 className="relative group">
          <span className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 leading-tight tracking-tight">
            {children}
          </span>
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
            {subtitle}
          </p>
        )}          
        {/* Decorative elements */}
        <div className="flex items-center space-x-2 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}