
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  withGlow?: boolean;
  withShimmer?: boolean;
}

const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withGlow = false,
  withShimmer = false,
  className,
  ...props 
}: PremiumButtonProps) => {
  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 ease-out transform-gpu";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold to-gold-light text-navy hover:from-gold-dark hover:to-gold hover:shadow-xl hover:scale-105",
    secondary: "bg-navy-light border-2 border-gold text-gold hover:bg-gold hover:text-navy hover:shadow-lg hover:scale-105",
    outline: "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-navy hover:shadow-lg hover:scale-105",
    cta: "bg-gradient-to-r from-gold via-gold-light to-gold text-navy hover:from-gold-dark hover:via-gold hover:to-gold-dark hover:shadow-2xl hover:scale-110 animate-pulse-subtle"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const glowClass = withGlow ? "shadow-lg hover:shadow-gold/50" : "";
  const shimmerClass = withShimmer ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClass,
        shimmerClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PremiumButton;
