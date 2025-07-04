import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumProgramCard from './PremiumProgramCard';

interface Program {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  description: string;
  features: string[];
  category: string;
  isPremium?: boolean;
}

interface Filter {
  id: string;
  name: string;
  icon: string;
}

interface FluidProgramsGridProps {
  programs: Program[];
  filters: Filter[];
}

const FluidProgramsGrid = ({ programs, filters }: FluidProgramsGridProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredPrograms = programs.filter(program => 
    activeFilter === 'all' || program.category === activeFilter
  );

  const handleFilterChange = async (filterId: string) => {
    if (filterId === activeFilter) return;
    
    setIsTransitioning(true);
    
    // Smooth transition delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setActiveFilter(filterId);
    setIsTransitioning(false);
  };

  const handleCardToggle = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="fluid-programs-grid">
      {/* Premium Filter Bar */}
      <motion.div 
        className="filter-bar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="filter-background" />
        <div className="filter-buttons">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: activeFilter === filter.id
                  ? 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)'
                  : 'rgba(255,255,255,0.1)',
                color: activeFilter === filter.id ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                boxShadow: activeFilter === filter.id
                  ? '0 10px 25px hsl(var(--primary) / 0.3)'
                  : '0 5px 15px rgba(0,0,0,0.1)',
              }}
              transition={{ duration: 0.3 }}
              initial={{ y: -20, opacity: 0 }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <motion.span
                className="filter-icon"
                animate={{ rotate: activeFilter === filter.id ? 360 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {filter.icon}
              </motion.span>
              <span>{filter.name}</span>
              <motion.div
                className="filter-count"
                animate={{ scale: activeFilter === filter.id ? 1 : 0.8 }}
              >
                {programs.filter(p => filter.id === 'all' || p.category === filter.id).length}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Grid Container with Physics */}
      <motion.div
        className="grid-container"
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div
              key="loading"
              className="grid-loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-shimmer" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: index * 0.1,
              }}
              className="grid-item"
            >
              <PremiumProgramCard 
                program={program}
                isExpanded={expandedCards.has(program.id)}
                onToggle={handleCardToggle}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FluidProgramsGrid;