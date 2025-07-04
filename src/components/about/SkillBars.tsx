import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  category: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Life Coaching",
    percentage: 95,
    category: "Coaching",
    description: "Transforming lives through personalized guidance"
  },
  {
    name: "Public Speaking",
    percentage: 90,
    category: "Communication",
    description: "Empowering confident self-expression"
  },
  {
    name: "Mindset Transformation",
    percentage: 98,
    category: "Psychology",
    description: "Breaking through mental barriers"
  },
  {
    name: "NLP Techniques",
    percentage: 85,
    category: "Therapy",
    description: "Neuro-linguistic programming mastery"
  },
  {
    name: "Group Facilitation",
    percentage: 88,
    category: "Leadership",
    description: "Leading transformational workshops"
  },
  {
    name: "Emotional Intelligence",
    percentage: 92,
    category: "Psychology",
    description: "Understanding and managing emotions"
  }
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="skill-item mb-8"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{skill.percentage}%</span>
          <div className="text-xs text-muted-foreground">{skill.category}</div>
        </div>
      </div>
      
      <div className="relative">
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ 
              delay: index * 0.1 + 0.3, 
              duration: 1.2, 
              ease: "easeOut" 
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              animate={isVisible ? {
                x: ["-100%", "200%"],
              } : {}}
              transition={{
                delay: index * 0.1 + 1.5,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
        
        {/* Skill level indicator */}
        <motion.div
          className="absolute -top-1 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg"
          initial={{ left: 0 }}
          animate={isVisible ? { left: `calc(${skill.percentage}% - 8px)` } : { left: 0 }}
          transition={{ 
            delay: index * 0.1 + 0.3, 
            duration: 1.2, 
            ease: "easeOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillBars = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Expertise & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of experience and continuous learning have shaped my expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBars;