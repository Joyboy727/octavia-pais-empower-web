import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  enabled?: boolean;
}

export const useParallax = ({ 
  speed = 0.3, 
  direction = 'up',
  enabled = true 
}: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll position changed significantly
      if (Math.abs(currentScrollY - lastScrollY) < 1) return;
      
      lastScrollY = currentScrollY;
      
      rafId = requestAnimationFrame(() => {
        if (elementRef.current) {
          const scrolled = currentScrollY * speed;
          const yPos = direction === 'up' ? -scrolled : scrolled;
          
          // Use transform3d for GPU acceleration
          elementRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    // Throttled scroll handler
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed, direction, enabled]);

  return elementRef;
};