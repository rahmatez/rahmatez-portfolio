import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const CIRCLE_RADIUS = 20;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const update = () => {
      rafRef.current = 0;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      const shouldShow = scrollTop > 300;

      if (progressRef.current) {
        progressRef.current.style.strokeDashoffset = `${CIRCLE_CIRCUMFERENCE * (1 - scrollPercent / 100)}`;
      }

      if (shouldShow !== visibleRef.current) {
        visibleRef.current = shouldShow;
        setIsVisible(shouldShow);
      }
    };

    const handleScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className="relative p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors group"
        aria-label="Scroll to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          <circle
            ref={progressRef}
            cx="24"
            cy="24"
            r={CIRCLE_RADIUS}
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${CIRCLE_CIRCUMFERENCE}`}
            strokeDashoffset={`${CIRCLE_CIRCUMFERENCE}`}
          />
        </svg>

        <ArrowUp className="w-5 h-5 relative z-10" />

        <span className="absolute right-full mr-2 px-2 py-1 text-sm text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Scroll to top
        </span>
      </button>
    </div>
  );
}
