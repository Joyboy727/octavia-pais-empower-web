import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CinematicButtonProps extends ButtonProps {
  children: React.ReactNode;
  urgencyText?: string;
}

const CinematicButton = React.forwardRef<HTMLButtonElement, CinematicButtonProps>(
  ({ className, children, urgencyText, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center gap-3">
        <Button
          ref={ref}
          className={cn(
            "cinematic-button-3d relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-navy font-semibold text-lg px-8 py-4 h-auto rounded-xl shadow-2xl border-2 border-gold/30 transition-all duration-500 hover:shadow-glow-lg hover:scale-105 hover:border-gold/60",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
            "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
        </Button>
        {urgencyText && (
          <div className="cinematic-urgency-tag bg-gold/20 text-gold text-sm px-4 py-1 rounded-full border border-gold/30 backdrop-blur-sm">
            {urgencyText}
          </div>
        )}
      </div>
    );
  }
);

CinematicButton.displayName = "CinematicButton";

export { CinematicButton };