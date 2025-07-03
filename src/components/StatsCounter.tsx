import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
  color: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: 'experience',
    value: 8,
    label: 'Years Experience',
    suffix: '+',
    color: 'hsl(var(--primary))',
    description: 'Transforming lives through coaching'
  },
  {
    id: 'clients',
    value: 150,
    label: 'Lives Transformed',
    suffix: '+',
    color: 'hsl(var(--accent))',
    description: 'Clients who found their breakthrough'
  },
  {
    id: 'success',
    value: 95,
    label: 'Success Rate',
    suffix: '%',
    color: 'hsl(var(--primary))',
    description: 'Client satisfaction and growth'
  },
  {
    id: 'programs',
    value: 4,
    label: 'Programs Offered',
    suffix: '',
    color: 'hsl(var(--accent))',
    description: 'Comprehensive coaching solutions'
  }
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const CircularProgress = ({ 
  value, 
  max, 
  color, 
  size = 120,
  strokeWidth = 8,
  isVisible 
}: {
  value: number;
  max: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  isVisible: boolean;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (value / max) * 100;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))' }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={isVisible ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
      </svg>

      {/* Animated particles */}
      {isVisible && (
        <>
          <motion.div
            className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  
  const displayValue = useCountUp(stat.value, 2000, isInView);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: index * 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <div className="relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/30 transition-all duration-500 hover:bg-white/10">
        {/* Floating background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Circular progress indicator */}
        <div className="flex justify-center mb-4">
          <motion.div
            variants={pulseVariants}
            animate={isInView ? "pulse" : ""}
          >
            <CircularProgress
              value={displayValue}
              max={stat.value}
              color={stat.color}
              isVisible={isInView}
            />
          </motion.div>
        </div>

        {/* Animated number display */}
        <div className="text-center space-y-2">
          <motion.div
            className="text-3xl sm:text-4xl font-bold gradient-text"
            animate={isInView ? {
              textShadow: [
                "0 0 0px rgba(212, 175, 55, 0)",
                "0 0 20px rgba(212, 175, 55, 0.5)",
                "0 0 0px rgba(212, 175, 55, 0)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {displayValue}{stat.suffix}
          </motion.div>

          <h3 className="text-lg font-semibold text-foreground">
            {stat.label}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {stat.description}
          </p>
        </div>

        {/* Achievement badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.2 + 1, type: "spring", stiffness: 200 }}
        >
          <span className="text-xs">✨</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`
          }}
          animate={isInView ? {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          } : {}}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Proven Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that tell the story of transformation and growth
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Floating particles */}
        {isInView && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [10, -10, 10],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full"
              animate={{
                x: [-5, 5, -5],
                y: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default StatsCounter;