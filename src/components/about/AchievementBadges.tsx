import { motion } from 'framer-motion';
import { useState } from 'react';

interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  year: string;
  category: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: '200+ Lives Transformed',
    icon: '👥',
    description: 'Successfully coached over 200 individuals to breakthrough their limitations',
    year: '2016-2024',
    category: 'impact',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    title: 'NLP Practitioner',
    icon: '🧠',
    description: 'Certified Neuro-Linguistic Programming Practitioner',
    year: '2018',
    category: 'certification',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    title: '8 Years Excellence',
    icon: '🏆',
    description: 'Eight years of dedicated service in life coaching and mentorship',
    year: '2016-2024',
    category: 'experience',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: '4',
    title: 'Public Speaking Expert',
    icon: '🎤',
    description: 'Helping hundreds overcome their fear of public speaking',
    year: '2017-2024',
    category: 'specialty',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '5',
    title: '95% Success Rate',
    icon: '📈',
    description: 'Exceptional success rate in client transformation and satisfaction',
    year: 'Ongoing',
    category: 'performance',
    color: 'from-red-500 to-rose-500'
  },
  {
    id: '6',
    title: 'Mindset Specialist',
    icon: '✨',
    description: 'Expert in breaking through limiting beliefs and mental barriers',
    year: '2016-2024',
    category: 'expertise',
    color: 'from-indigo-500 to-blue-500'
  }
];

const AchievementBadge = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2,
        y: -10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge Card */}
      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-lg overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-6 -translate-y-6" />
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-4 translate-y-4" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.span 
              className="text-3xl"
              animate={isHovered ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {achievement.icon}
            </motion.span>
            <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
              {achievement.year}
            </span>
          </div>
          
          <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating Particles */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"
              animate={{
                y: [-5, -15, -5],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [5, -5, 5],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full"
              animate={{
                x: [-2, 2, -2],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}

        {/* Category Badge */}
        <div className="absolute -top-2 -right-2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-lg transform rotate-12">
          {achievement.category}
        </div>
      </div>

      {/* Shadow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} blur-xl -z-10`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const AchievementBadges = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent" />
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 bg-accent/40 rounded-full"
        animate={{
          y: [10, -10, 10],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones that mark the journey of impact, growth, and dedication to transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementBadge 
              key={achievement.id} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Ready to create your own success story?
          </p>
          <motion.a
            href="tel:+919008808808"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementBadges;