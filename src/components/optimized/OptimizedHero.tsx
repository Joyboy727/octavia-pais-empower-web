import React from 'react';

interface OptimizedHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  backgroundImage?: string;
}

export const OptimizedHero: React.FC<OptimizedHeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundImage
}) => {
  return (
    <section className="hero-section">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-brand/80 via-primary-brand/60 to-primary-brand/90" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-subtitle mx-auto">
          {subtitle}
        </p>
        <button 
          className="cta-button animate-on-load mt-8"
          onClick={onCtaClick}
          style={{ animationDelay: '0.7s' }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};