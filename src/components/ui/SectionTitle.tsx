import { AnimateIn } from './AnimateIn';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <AnimateIn className={`mb-8 relative ${className}`}>
      <div className="flex flex-col text-center items-center">
        <h2 className="relative group">
          <span className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 leading-tight tracking-tight">
            {children}
          </span>
        </h2>

        {subtitle && (
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
            {subtitle}
          </p>
        )}

        <div className="flex items-center space-x-2 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
        </div>
      </div>
    </AnimateIn>
  );
}
