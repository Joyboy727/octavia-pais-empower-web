import React from 'react';

interface OptimizedServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export const OptimizedServiceCard: React.FC<OptimizedServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  ctaText,
  onCtaClick
}) => {
  return (
    <div className="service-card animate-on-scroll">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      {ctaText && onCtaClick && (
        <button 
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90"
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};