import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertificationItemProps {
  title: string;
  index: number;
  className?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ 
  title, 
  index, 
  className 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 80); // Staggered animation with 80ms delay
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className={cn(
        "certification-item flex items-start gap-4 py-3 transition-all duration-600",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: isVisible ? '0ms' : `${index * 80}ms`
      }}
    >
      {/* Gold Checkmark Icon */}
      <div className={cn(
        "certification-icon flex-shrink-0 mt-1 transition-all duration-300",
        isVisible && "certification-icon-glow"
      )}>
        <CheckCircle 
          size={20} 
          className={cn(
            "text-gold transition-all duration-300",
            isHovered && "certification-icon-hover"
          )} 
        />
      </div>
      
      {/* Certification Text */}
      <div className={cn(
        "certification-text flex-1 transition-all duration-300",
        isVisible && "certification-text-glow",
        isHovered && "certification-text-hover"
      )}>
        <p className="text-gray-300 font-inter font-medium leading-relaxed">
          {title}
        </p>
      </div>
    </div>
  );
};

export { CertificationItem };