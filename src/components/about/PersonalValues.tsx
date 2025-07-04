import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target, Zap, Shield } from 'lucide-react';

interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  quote: string;
}

const values: Value[] = [
  {
    id: '1',
    title: 'Authenticity',
    description: 'Being genuine and true to oneself, encouraging others to embrace their authentic selves without pretense.',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-red-500',
    quote: 'Your authentic self is your greatest asset'
  },
  {
    id: '2',
    title: 'Empowerment',
    description: 'Believing in people\'s potential and providing them with tools to unlock their inner strength and capabilities.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-500',
    quote: 'Every person has unlimited potential within'
  },
  {
    id: '3',
    title: 'Growth Mindset',
    description: 'Embracing challenges as opportunities for learning and viewing setbacks as stepping stones to success.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'text-blue-500',
    quote: 'Growth happens outside your comfort zone'
  },
  {
    id: '4',
    title: 'Compassion',
    description: 'Approaching every interaction with understanding, empathy, and genuine care for others\' wellbeing.',
    icon: <Users className="w-8 h-8" />,
    color: 'text-green-500',
    quote: 'Compassion creates connection and healing'
  },
  {
    id: '5',
    title: 'Purpose-Driven',
    description: 'Living with intention and helping others discover their unique purpose and path in life.',
    icon: <Target className="w-8 h-8" />,
    color: 'text-purple-500',
    quote: 'Purpose gives meaning to every action'
  },
  {
    id: '6',
    title: 'Integrity',
    description: 'Maintaining honesty, transparency, and ethical standards in all aspects of coaching and life.',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-indigo-500',
    quote: 'Integrity is the foundation of trust'
  }
];

const ValueCard = ({ value, index }: { value: Value; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30">
        {/* Icon */}
        <motion.div
          className={`${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {value.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {value.description}
        </p>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="border-t border-border pt-4"
        >
          <blockquote className="text-sm italic text-primary font-medium">
            "{value.quote}"
          </blockquote>
        </motion.div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
};

const PersonalValues = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            My Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my coaching philosophy and personal journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <motion.div
              className="text-4xl mb-6"
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              🌟
            </motion.div>
            
            <h3 className="text-2xl font-bold gradient-text mb-4">
              My Philosophy
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "I believe that within every person lies unlimited potential waiting to be unlocked. 
              My role is not to change you, but to help you remember who you truly are and 
              give you the tools to become the person you were meant to be. Transformation 
              happens when we align our actions with our authentic selves and our deepest values."
            </p>
            
            <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-medium">Octavia Pais</span>
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalValues;