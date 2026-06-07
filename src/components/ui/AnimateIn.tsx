import { useEffect, useRef, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  once?: boolean;
  immediate?: boolean;
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 650,
  once = true,
  immediate = false,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => {
      element.dataset.visible = 'true';
    };

    const hide = () => {
      delete element.dataset.visible;
    };

    if (immediate) {
      const timer = window.setTimeout(show, delay);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          hide();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate, delay, once]);

  return (
    <div
      ref={ref}
      data-direction={direction === 'none' ? undefined : direction}
      className={`animate-in ${className}`}
      style={{
        ['--animate-duration' as string]: `${duration}ms`,
        ['--animate-delay' as string]: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
