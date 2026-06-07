import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  routeKey: string;
}

export function PageTransition({ children, routeKey }: PageTransitionProps) {
  return (
    <div key={routeKey} className="motion-safe:animate-page-enter">
      {children}
    </div>
  );
}
