import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Clock, Users, Award, CheckCircle, Play, ArrowRight, Target, Heart, TrendingUp } from "lucide-react";
// Remove unused imports
// import octavia1 from '/public/placeholder.svg';
// import octavia2 from '/public/placeholder.svg';
// import octavia3 from '/public/placeholder.svg';
// import octavia4 from '/public/placeholder.svg';

const programData = [
    {
      id: 1,
      title: "The Breakthrough Blueprint",
      category: "growth",
      price: 9999,
      originalPrice: 7500,
      duration: "3 Days",
      students: 1247,
      rating: 4.9,
      difficulty: "Beginner",
      image: "/DSC_0697.JPG",
      description: "A 3-Day Live Intensive to Rewire Your Mindset, Build Unshakable Confidence & Step Into the Life You Deserve",
      benefits: [
        "Let go of limiting beliefs and imposter syndrome",
        "Shift from overthinking to focused, intentional action",
        "Strengthen emotional resilience and inner confidence",
        "Clarify your personal or professional goals",
        "Communicate with power—whether in life, meetings, or on stage"
      ],
      curriculum: [
        "Day 1: Mindset Foundation & Belief Systems",
        "Day 2: Confidence Building & Communication Skills",
        "Day 3: Action Planning & Implementation Strategies"
      ],
      completionRate: 92,
      gradient: "from-purple-600 to-purple-800"
    },
    {
      id: 2,
      title: "Unstoppable Momentum Bootcamp",
      category: "growth",
      price: 15000,
      originalPrice: 14999,
      duration: "5 Days",
      students: 892,
      rating: 4.8,
      difficulty: "Intermediate",
      image: "/DSC_0736.JPG",
      description: "A 5-Day Power-Packed Coaching Series to Build Discipline, Create Unshakable Habits & Accelerate Success",
      benefits: [
        "Build habits that stick, even when motivation fades",
        "Master your daily focus and eliminate time-wasters",
        "Use neuroscience to rewire your brain for consistency",
        "Set bold goals—and follow through with unstoppable momentum",
        "Boost self-discipline without feeling overwhelmed"
      ],
      curriculum: [
        "Day 1: The Science of Habit Formation",
        "Day 2: Focus Mastery & Productivity Systems",
        "Day 3: Goal Setting & Action Planning",
        "Day 4: Discipline & Consistency Training",
        "Day 5: Momentum Maintenance & Success Integration"
      ],
      completionRate: 89,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "The Evolution Experience",
      category: "executive",
      price: 49999,
      originalPrice: 69999,
      duration: "6 Months",
      students: 458,
      rating: 5.0,
      difficulty: "Advanced",
      image: "/DSC_0752.JPG",
      description: "A 6-Month Deep Coaching Journey to Rewire Your Mindset, Build Confidence & Speak with Power",
      benefits: [
        "Rewire self-doubt and overthinking into self-trust",
        "Develop daily habits that build clarity, focus, and consistency",
        "Learn emotional regulation to manage pressure and setbacks",
        "Create a powerful life vision based on your values and strengths",
        "Master both verbal and non-verbal communication for leadership impact"
      ],
      curriculum: [
        "Month 1-2: Foundation & Mindset Transformation",
        "Month 3-4: Communication & Leadership Skills",
        "Month 5-6: Integration & Advanced Techniques"
      ],
      completionRate: 96,
      gradient: "from-gold to-yellow-600",
      premium: true
    },
    {
      id: 4,
      title: "Speak With Impact",
      category: "speaking",
      price: 9999,
      originalPrice: 14999,
      duration: "5 Sessions",
      students: 623,
      rating: 4.7,
      difficulty: "Beginner",
      image: "/DSC_0889.JPG",
      description: "A 5-Session Public Speaking Coaching Program to Build Confidence, Presence & Clarity",
      benefits: [
        "Overcome fear, nervousness, and self-doubt while speaking",
        "Speak clearly, concisely, and confidently in any setting",
        "Structure your thoughts to deliver powerful, memorable messages",
        "Improve body language, eye contact, tone, and vocal pace",
        "Handle live Q&A, feedback, or difficult conversations with grace"
      ],
      curriculum: [
        "Session 1: Overcoming Speaking Anxiety",
        "Session 2: Voice & Presence Training",
        "Session 3: Message Structure & Storytelling",
        "Session 4: Advanced Techniques & Practice",
        "Session 5: Real-world Application & Feedback"
      ],
      completionRate: 88,
      gradient: "from-red-600 to-red-800"
    }
  ];

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } },
};

const imageVariants: Variants = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.2 } },
};

const contentVariants: Variants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.4 } },
};

const Programs = () => {
  // Create a staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  return (
    <div className="min-h-screen pt-20" style={{ background: '#0B1426' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto text-center mb-12 pt-8"
      >
          <motion.h1
          className="text-4xl md:text-5xl font-bold text-gold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          Our Transformative Programs
          </motion.h1>
          <motion.p
          className="text-xl text-gold max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover the perfect program to elevate your personal and professional growth
          </motion.p>
      </motion.div>

          <motion.div
        className="container mx-auto px-4 py-12 grid gap-12 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {programData.map((program, idx) => (
          <motion.section
            key={program.id}
            className="flex flex-col md:flex-row items-center bg-[#181F2A] rounded-3xl shadow-xl overflow-hidden border border-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.025, y: -6, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Program Image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center items-center p-8 bg-transparent"
              variants={imageVariants}
            >
              <div className="relative">
                {/* Optimized glow effect with reduced performance impact */}
              <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/10"
                  animate={{
                    boxShadow: [
                      "0 0 15px 2px rgba(255,255,255,0.2)",
                      "0 0 20px 5px rgba(255,255,255,0.1)",
                      "0 0 15px 2px rgba(255,255,255,0.2)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={program.image}
                  alt="Octavia Pais"
                  className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-4 border-primary/20"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10 
                  }}
                />
              </div>
            </motion.div>
            {/* Program Content */}
            <motion.div
              className="w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-4"
              variants={contentVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold font-playfair mb-2 flex items-center gap-2 text-gold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {program.title}
                {program.premium && (
                  <motion.span 
                    className="inline-block ml-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs px-2 py-1 rounded-full"
                    initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    PREMIUM
                  </motion.span>
                )}
              </motion.h2>
                  <motion.div
                className="text-lg text-gold font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              >
                {program.description}
              </motion.div>
            <motion.div
                className="flex flex-wrap gap-4 text-sm mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.span 
                  className="bg-primary/10 text-gold px-3 py-1 rounded-full font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  💰 Investment: {program.price.toLocaleString()}
                </motion.span>
                <motion.span 
                  className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  📅 Duration: {program.duration}
                </motion.span>
              </motion.div>
              {/* Main content with optimized animations */}
              <div className="mb-6">
                <div className="font-semibold text-gold mb-3">💡 YOU WILL LEARN HOW TO:</div>
                <motion.ul 
                  className="list-none space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    },
                    hidden: {}
                  }}
                >
                  {program.benefits.map((item, i) => (
                      <motion.li
                        key={i}
                      className="flex items-start gap-2 text-base text-white"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 10 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                      </motion.li>
                    ))}
                </motion.ul>
                </div>

              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="font-semibold text-gold mb-3">🔒 YOUR INVESTMENT:</div>
                <div className="text-xl font-bold text-gold">
                  ₹{program.price.toLocaleString()} {program.originalPrice ? <span className="text-sm text-gray-400 line-through ml-2">₹{program.originalPrice.toLocaleString()}</span> : null}
                </div>
              </motion.div>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Pulsing effect with reduced performance impact */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.2, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  />
            <Button 
              size="lg" 
                    className="relative w-full md:w-auto font-bold text-lg py-3 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-navy shadow-lg"
              onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
            >
              Enroll Now
            </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        ))}
      </motion.div>
      
      <motion.div
        className="container mx-auto text-center py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="relative inline-block">
          {/* Optimized glow effect */}
        <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/30 to-amber-500/30 blur-lg"
          animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
          <motion.button
            className="relative px-8 py-4 bg-gradient-to-r from-gold to-amber-500 text-black font-bold rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,215,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Explore All Programs
          </motion.button>
        </motion.div>
    </motion.div>
    </div>
  );
};

export default Programs;