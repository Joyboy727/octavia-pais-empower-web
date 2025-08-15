import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CinematicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const CinematicCard: React.FC<CinematicCardProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "cinematic-card-container relative h-64 perspective-1000 cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={cn(
        "cinematic-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
        isFlipped && "rotate-y-180"
      )}>
        {/* Front Face */}
        <Card className="cinematic-card-face absolute inset-0 w-full h-full bg-black/80 border-gold/30 border-2 rounded-2xl backface-hidden overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-gold mb-4 cinematic-icon-glow">
              {icon}
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gold mb-2 tracking-tight">
              {title}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </CardContent>
        </Card>

        {/* Back Face */}
        <Card className="cinematic-card-face absolute inset-0 w-full h-full bg-gradient-to-br from-gold/10 to-black/90 border-gold/50 border-2 rounded-2xl backface-hidden rotate-y-180 overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {description}
            </p>
            <div className="mt-4 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { CinematicCard };