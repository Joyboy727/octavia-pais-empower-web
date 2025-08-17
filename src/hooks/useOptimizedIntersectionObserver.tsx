import { useEffect, useRef } from 'react';

interface OptimizedIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useOptimizedIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: OptimizedIntersectionOptions = {}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If reduced motion is preferred, immediately show all elements
      requestAnimationFrame(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          el.classList.add('visible');
        });
      });
      return;
    }

    let observerTimeout: ReturnType<typeof setTimeout>;
    
    const observerOptions = {
      threshold,
      rootMargin
    };

    observerRef.current = new IntersectionObserver((entries) => {
      clearTimeout(observerTimeout);
      observerTimeout = setTimeout(() => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
            
            // Unobserve after animation to free resources
            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!triggerOnce && !entry.isIntersecting) {
            entry.target.classList.remove('visible');
          }
        });
      }, 10);
    }, observerOptions);

    // Use requestAnimationFrame for smooth initialization
    requestAnimationFrame(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observerRef.current?.observe(el);
      });
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(observerTimeout);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return observerRef.current;
};