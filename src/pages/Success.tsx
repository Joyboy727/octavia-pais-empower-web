import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 12 
    } 
  },
  hover: { 
    y: -10, 
    boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      delay: 0.2 
    } 
  },
  hover: { 
    scale: 1.05, 
    rotate: 2,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

const Success = () => {
  // We'll replace the old IntersectionObserver with Framer Motion's useInView

  const successStories = [
    {
      name: "Ananya",
      title: "From Student to Leader",
      image: "/ananya.jpg",
      story: "Struggled with self-doubt and public speaking anxiety",
      transformation: "Now leads presentations confidently and mentors other students",
      quote: "Octavia helped me find my voice when I thought I had lost it forever. The transformation has been life-changing.",
      program: "Speak With Impact",
      confidenceGrowth: 85,
      icon: "🎓"
    },
    {
      name: "Rohit",
      title: "Career Breakthrough",
      image: "/rohit.jpg",
      story: "Felt stuck in his career with no clear direction",
      transformation: "Promoted to team lead and started his own consulting practice",
      quote: "The Evolution Experience completely transformed how I see myself and my potential. I went from feeling invisible to becoming a leader.",
      program: "The Evolution Experience",
      confidenceGrowth: 92,
      icon: "💼"
    },
    {
      name: "Priya",
      title: "Mindset Revolution",
      image: "/priya.jpg",
      story: "Battled with imposter syndrome and fear of failure",
      transformation: "Started her own business and became a motivational speaker",
      quote: "Octavia's direct yet compassionate approach helped me break through mental barriers I didn't even know existed.",
      program: "Breakthrough Blueprint",
      confidenceGrowth: 78,
      icon: "🚀"
    }
  ];

  const stats = [
    { number: "200+", label: "Lives Transformed", icon: "👥" },
    { number: "16+", label: "Years Experience", icon: "⏰" },
    { number: "95%", label: "Success Rate", icon: "📈" },
    { number: "100%", label: "Satisfaction", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen pt-24 bg-navy">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-r from-navy to-navy-dark relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-pattern opacity-10"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="container mx-auto px-4 mobile-padding relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h1 
              className="font-playfair text-4xl md:text-6xl font-bold mb-6 gradient-text"
              variants={itemVariants}
              custom={0}
            >
              Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              variants={itemVariants}
              custom={1}
            >
              Discover how our programs have transformed lives and empowered individuals to achieve their full potential. These are real stories from real people who have experienced remarkable growth.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-navy-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 mobile-padding">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                custom={index}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div 
                  className="text-2xl mb-2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10, 
                    delay: 0.2 + (index * 0.1) 
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-4xl font-bold text-gold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(212, 175, 55, 0)", "0 0 20px rgba(212, 175, 55, 0.5)", "0 0 0 rgba(212, 175, 55, 0)"],
                  }}
                  transition={{ 
                    opacity: { delay: 0.3 + (index * 0.1) },
                    boxShadow: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 mobile-padding">
          <motion.h2 
            className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 12 
            }}
          >
            Transformation Stories
          </motion.h2>
          
          <motion.div 
            className="space-y-16 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {successStories.map((story, index) => (
              <motion.div 
                key={story.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={cardVariants}
                custom={index}
                transition={{ delay: index * 0.2 }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative max-w-xs mx-auto">
                    <motion.div 
                      className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-2"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [2, 4, 2]
                      }}
                      transition={{ 
                        duration: 5, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                    <motion.img 
                      src={story.image}
                      alt={story.name}
                      className="relative w-full h-78 object-cover rounded-3xl shadow-2xl"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                    <motion.div 
                      className="absolute -top-3 -right-3 bg-gold text-navy w-10 h-10 rounded-full flex items-center justify-center text-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 10, 
                        delay: 0.5 + (index * 0.1) 
                      }}
                    >
                      {story.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Card className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300">
                      <CardContent className="p-8">
                        <motion.div 
                          className="flex items-center justify-between mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <div>
                            <motion.h3 
                              className="font-playfair text-xl font-bold text-gold mb-1"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                type: "spring", 
                                stiffness: 100, 
                                damping: 10, 
                                delay: 0.3 
                              }}
                            >
                              {story.name}
                            </motion.h3>
                            <motion.p 
                              className="text-muted-foreground"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                            >
                              {story.title}
                            </motion.p>
                          </div>
                          <motion.div 
                            className="text-right"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 100, 
                              damping: 10, 
                              delay: 0.3 
                            }}
                          >
                            <div className="text-xs text-muted-foreground mb-1">Program</div>
                            <div className="text-gold font-medium text-sm">{story.program}</div>
                          </motion.div>
                        </motion.div>

                        {/* Before/After */}
                        <motion.div 
                          className="space-y-3 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            <h4 className="font-semibold text-red-400 mb-2 text-sm">Before:</h4>
                            <p className="text-muted-foreground text-sm">{story.story}</p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <h4 className="font-semibold text-green-400 mb-2 text-sm">After:</h4>
                            <p className="text-muted-foreground text-sm">{story.transformation}</p>
                          </motion.div>
                        </motion.div>

                        {/* Confidence Meter */}
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Confidence Growth</span>
                            <span className="text-gold font-bold">{story.confidenceGrowth}%</span>
                          </div>
                          <div className="w-full bg-navy-light rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${story.confidenceGrowth}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1.5, 
                                ease: "easeOut", 
                                delay: 0.8 
                              }}
                            />
                          </div>
                        </motion.div>

                        {/* Quote */}
                        <motion.blockquote 
                          className="border-l-4 border-gold pl-4 italic text-base leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 }}
                        >
                          "{story.quote}"
                        </motion.blockquote>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Highlights */}
      <motion.section 
        className="py-16 bg-navy-light/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 mobile-padding">
          <motion.h2 
            className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 12 
            }}
          >
            What People Say
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                quote: "Octavia has a gift for seeing potential where others see problems.",
                name: "Sarah M.",
                role: "Marketing Executive"
              },
              {
                quote: "Her approach is both challenging and supportive. Exactly what I needed.",
                name: "David K.",
                role: "Entrepreneur"
              },
              {
                quote: "The transformation I experienced was beyond what I thought possible.",
                name: "Meera R.",
                role: "Teacher"
              },
              {
                quote: "Working with Octavia was the best investment I made in myself.",
                name: "Kavya S.",
                role: "Software Engineer"
              },
              {
                quote: "She helped me find my voice and confidence I never knew I had.",
                name: "Arun M.",
                role: "Business Owner"
              },
              {
                quote: "The mindset shift was incredible. I'm a completely different person now.",
                name: "Ritu P.",
                role: "HR Manager"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -10 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
              >
                <Card 
                  className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300 text-center h-full"
                >
                  <CardContent className="p-6">
                    <motion.div 
                      className="text-3xl mb-4"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 10, 
                        delay: 0.2 + (index * 0.1) 
                      }}
                    >
                      💬
                    </motion.div>
                    <motion.blockquote 
                      className="text-base italic mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15, 
                        delay: 0.3 + (index * 0.1) 
                      }}
                    >
                      "{testimonial.quote}"
                    </motion.blockquote>
                    <motion.div 
                      className="border-t border-gold/20 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <motion.div 
                        className="font-semibold text-gold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        {testimonial.name}
                      </motion.div>
                      <motion.div 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                      >
                        {testimonial.role}
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 mobile-padding text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-playfair text-2xl md:text-4xl font-bold mb-6 gradient-text"
              variants={itemVariants}
            >
              Your Success Story Starts Here
            </motion.h2>
            <motion.p 
              className="text-responsive-lg mb-8 text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Join the hundreds of people who have transformed their lives. 
              Your breakthrough is just one conversation away.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mobile-stack"
              variants={itemVariants}
            >
              <motion.a 
                href="tel:+919008808808"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-full text-base professional-hover subtle-glow transition-all duration-300">
                  Start Your Transformation
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Success;
