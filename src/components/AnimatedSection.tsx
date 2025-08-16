import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  stagger?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  stagger = 0.1,
  duration = 0.6
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { y: 0, x: 40 };
      case 'right': return { y: 0, x: -40 };
      default: return { y: 40, x: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition()
  };

  const animate = {
    opacity: isIntersecting ? 1 : 0,
    y: isIntersecting ? 0 : getInitialPosition().y,
    x: isIntersecting ? 0 : getInitialPosition().x
  };

  return (
    <motion.div
      ref={elementRef}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for premium feel
        staggerChildren: stagger
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};

// Staggered children wrapper
export const StaggeredChildren: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0.1
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};