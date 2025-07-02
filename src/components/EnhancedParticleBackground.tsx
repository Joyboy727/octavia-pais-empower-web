
import { useEffect, useRef } from "react";

const EnhancedParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create 30 particles for rich effect
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'enhanced-particle';
      
      // Random properties
      const size = Math.random() * 6 + 2; // 2-8px
      const left = Math.random() * 100; // 0-100%
      const animationDuration = Math.random() * 10 + 15; // 15-25s
      const delay = Math.random() * 20; // 0-20s delay
      
      // Random color variations
      const colors = ['primary', 'secondary', 'accent', 'neutral'];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      particle.classList.add(`particle-${colorClass}`);
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${delay}s`;
      
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
    />
  );
};

export default EnhancedParticleBackground;
