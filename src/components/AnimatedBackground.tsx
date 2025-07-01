
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create floating dots
    const createDots = () => {
      const dotCount = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'animated-dot';
        
        // Random positioning
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        dot.style.animationDelay = Math.random() * 6 + 's';
        dot.style.animationDuration = (4 + Math.random() * 4) + 's';
        
        // Random size
        const size = 2 + Math.random() * 3;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        
        container.appendChild(dot);
      }
    };

    createDots();

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 animated-background"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
