
import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'hover-lift';
  glowOnHover?: boolean;
  className?: string;
}

const PremiumCard = ({ 
  children, 
  variant = 'default', 
  glowOnHover = false, 
  className,
  ...props 
}: PremiumCardProps) => {
  const baseClasses = "rounded-xl transition-all duration-500 ease-out transform-gpu";
  
  const variants = {
    default: "bg-card/80 border border-gold/20 hover:border-gold/40 hover:bg-card/90",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20",
    gradient: "bg-gradient-to-br from-navy-light/50 to-navy/50 border border-gold/30 hover:from-navy-light/70 hover:to-navy/70",
    'hover-lift': "bg-card/60 border border-gold/20 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20"
  };

  const glowClass = glowOnHover ? "hover:shadow-lg hover:shadow-gold/30" : "";

  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        glowClass,
        "group cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default PremiumCard;
