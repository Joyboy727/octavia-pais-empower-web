
import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [performanceReduced, setPerformanceReduced] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;
    let fps = 60;

    const checkPerformance = () => {
      const now = performance.now();
      frameCount++;

      if (now >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;

        // Auto-adjust animations if performance drops
        if (fps < 45 && !performanceReduced) {
          setPerformanceReduced(true);
          document.documentElement.classList.add('reduced-performance');
          console.warn('Performance adjusted: Reduced animations for better experience');
        } else if (fps >= 55 && performanceReduced) {
          setPerformanceReduced(false);
          document.documentElement.classList.remove('reduced-performance');
        }
      }

      animationId = requestAnimationFrame(checkPerformance);
    };

    // Only monitor on client side
    if (typeof window !== 'undefined') {
      animationId = requestAnimationFrame(checkPerformance);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [performanceReduced]);

  return null;
};

export default PerformanceMonitor;
