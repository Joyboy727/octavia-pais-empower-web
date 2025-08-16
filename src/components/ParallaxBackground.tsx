import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxBackgroundProps {
  imageSrc: string;
  alt: string;
  speed?: number;
  overlay?: 'dark' | 'gradient' | 'none';
  className?: string;
  children?: React.ReactNode;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageSrc,
  alt,
  speed = 0.3,
  overlay = 'gradient',
  className,
  children
}) => {
  const parallaxRef = useParallax({ speed });

  const overlayClasses = {
    dark: 'bg-navy/60',
    gradient: 'bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90',
    none: ''
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Parallax Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '120%', // Extra height for parallax movement
          top: '-10%' // Offset to prevent gaps
        }}
        role="img"
        aria-label={alt}
      />
      
      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={cn("absolute inset-0 -z-5", overlayClasses[overlay])} />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};