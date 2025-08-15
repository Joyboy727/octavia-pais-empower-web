import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CinematicQuoteProps {
  children: React.ReactNode;
  className?: string;
}

const CinematicQuote: React.FC<CinematicQuoteProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={quoteRef}
      className={cn(
        "cinematic-quote-container relative my-16 py-12",
        className
      )}
    >
      {/* Background Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent rounded-3xl transition-all duration-1000",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )} />
      
      {/* Quote Content */}
      <div className={cn(
        "relative z-10 text-center px-8 transition-all duration-1000 delay-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="cinematic-quote-glow">
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gold leading-tight tracking-wide">
            {children}
          </blockquote>
        </div>
        
        {/* Decorative Elements */}
        <div className={cn(
          "flex justify-center mt-8 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </div>
  );
};

export { CinematicQuote };