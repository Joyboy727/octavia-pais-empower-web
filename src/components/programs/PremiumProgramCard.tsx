import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckIcon } from 'lucide-react';

interface ProgramCardProps {
  program: {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    duration: string;
    description: string;
    features: string[];
    image?: string;
    category: string;
    isPremium?: boolean;
  };
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

const PremiumProgramCard = ({ program, isExpanded, onToggle }: ProgramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth following
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  // 3D rotation based on mouse position
  const rotateX = useTransform(springY, [-100, 100], [15, -15]);
  const rotateY = useTransform(springX, [-100, 100], [-15, 15]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      ref={cardRef}
      className="premium-program-card"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isExpanded ? 1.02 : 1,
        boxShadow: isHovered 
          ? '0 25px 50px rgba(212, 175, 55, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.2)'
          : '0 10px 30px rgba(0,0,0,0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Premium badge */}
      {program.isPremium && (
        <motion.div
          className="premium-badge"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, 5, -5, 0] : 0
          }}
          transition={{ duration: 0.6 }}
        >
          ✨ Premium
        </motion.div>
      )}

      {/* Animated gradient background */}
      <motion.div
        className="card-gradient-bg"
        animate={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glass morphism overlay */}
      <div className="card-glass-overlay" />
      
      <motion.div 
        className="card-header"
        style={{ transform: 'translateZ(50px)' }}
      >
        <div className="card-info">
          <motion.h3
            className="program-title"
            animate={{ 
              color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {program.name}
          </motion.h3>
          
          <motion.div
            className="price-container"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="price-wrapper">
              {program.originalPrice && (
                <span className="original-price">{program.originalPrice}</span>
              )}
              <motion.span
                className="price-amount"
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                }}
              >
                {program.price}
              </motion.span>
            </div>
            <span className="duration">{program.duration}</span>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="card-content"
        animate={{
          height: isExpanded ? 'auto' : '0',
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{
          height: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.3, delay: isExpanded ? 0.1 : 0 },
        }}
      >
        <motion.p
          className="description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isExpanded ? 0 : 20, 
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ delay: 0.2 }}
        >
          {program.description}
        </motion.p>
        
        <motion.div className="features-grid">
          {program.features.map((feature, index) => (
            <motion.div
              key={feature}
              className="feature-item"
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isExpanded ? 0 : -20, 
                opacity: isExpanded ? 1 : 0 
              }}
              transition={{ 
                delay: isExpanded ? 0.3 + (index * 0.1) : 0,
                type: 'spring',
                stiffness: 300,
              }}
            >
              <motion.div
                className="check-icon"
                animate={{ 
                  rotate: isExpanded ? 360 : 0,
                  scale: isExpanded ? 1 : 0,
                }}
                transition={{ 
                  delay: isExpanded ? 0.4 + (index * 0.1) : 0,
                  type: 'spring',
                }}
              >
                <CheckIcon size={12} />
              </motion.div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.button
        className="expand-button"
        onClick={() => onToggle(program.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          background: isHovered
            ? 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)'
            : 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted-foreground) / 0.1) 100%)',
          color: isHovered ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {isExpanded ? '↑' : '↓'}
        </motion.span>
        <span className="button-text">
          {isExpanded ? 'Show Less' : 'Learn More'}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default PremiumProgramCard;