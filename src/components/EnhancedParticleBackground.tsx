
import { useEffect, useRef } from "react";

const EnhancedParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create optimized particle count for smooth performance
    const particleCount = window.innerWidth > 768 ? 25 : 12;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'enhanced-particle';
      
      // Optimized random properties
      const size = Math.random() * 5 + 2; // 2-7px
      const left = Math.random() * 100; // 0-100%
      const animationDuration = Math.random() * 8 + 18; // 18-26s
      const delay = Math.random() * 15; // 0-15s delay
      
      // Premium color variations
      const colors = ['primary', 'secondary', 'accent', 'neutral'];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      particle.classList.add(`particle-${colorClass}`);
      
      // Apply optimized styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.willChange = 'transform, opacity';
      particle.style.transform = 'translateZ(0)';
      particle.style.backfaceVisibility = 'hidden';
      
      container.appendChild(particle);
    }

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
      className="enhanced-particle-background fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default EnhancedParticleBackground;
