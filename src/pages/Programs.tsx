import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Clock, Users, Award, CheckCircle, Play, ArrowRight, Target, Heart, TrendingUp } from "lucide-react";

const Programs = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const areCardsInView = useInView(cardsRef, { once: true });

  // Animated counters
  const [studentCount, setStudentCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    if (isHeroInView) {
      // Animate counters
      animateCounter(setStudentCount, 2847, 2000);
      animateCounter(setSuccessRate, 96, 1500);
      animateCounter(setExperience, 15, 1000);
    }
  }, [isHeroInView]);

  const animateCounter = (setter: any, target: number, duration: number) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  const filters = [
    { id: "all", name: "All Programs", icon: "🎯" },
    { id: "speaking", name: "Public Speaking", icon: "🎤" },
    { id: "leadership", name: "Leadership", icon: "👑" },
    { id: "growth", name: "Personal Growth", icon: "🌱" },
    { id: "executive", name: "Executive Coaching", icon: "💼" },
  ];

  const programs = [
    {
      id: 1,
      title: "The Breakthrough Blueprint",
      category: "growth",
      price: 5000,
      originalPrice: 7500,
      duration: "3 Days",
      students: 1247,
      rating: 4.9,
      difficulty: "Beginner",
      image: "/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png",
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
      price: 9999,
      originalPrice: 14999,
      duration: "5 Days (2 hours per day)",
      students: 892,
      rating: 4.8,
      difficulty: "Intermediate",
      image: "/lovable-uploads/29e81a7c-71b6-407c-bdb8-1769fc86fd82.png",
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
      image: "/lovable-uploads/3deeb80c-cb3c-424c-8a59-ed530ead07fd.png",
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
      image: "/lovable-uploads/51cae283-e75f-4902-a215-aef5185b0ae4.png",
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

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Marketing Executive",
      image: "/ananya.jpg",
      text: "Octavia's coaching transformed my confidence completely. I went from avoiding presentations to leading company-wide meetings.",
      rating: 5,
      program: "Speak With Impact"
    },
    {
      name: "Rohit Verma",
      role: "Tech Lead",
      image: "/rohit.jpg",
      text: "The Evolution Experience gave me clarity on my career goals and the confidence to pursue leadership opportunities.",
      rating: 5,
      program: "The Evolution Experience"
    },
    {
      name: "Priya Nair",
      role: "Entrepreneur",
      image: "/priya.jpg",
      text: "The Breakthrough Blueprint helped me overcome years of self-doubt and launch my dream business.",
      rating: 5,
      program: "The Breakthrough Blueprint"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const filteredPrograms = programs.filter(program => 
    selectedFilter === "all" || program.category === selectedFilter
  );

  const handleFilterChange = async (filterId: string) => {
    setIsFilterAnimating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setSelectedFilter(filterId);
    setIsFilterAnimating(false);
  };

  const toggleCompare = (programId: number) => {
    if (compareList.includes(programId)) {
      setCompareList(compareList.filter(id => id !== programId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, programId]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <motion.section
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(79, 70, 229, 0.2) 100%)",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 50%, rgba(147, 51, 234, 0.2) 100%)",
              "linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="gradient-text block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, #D4AF37, #FFD700, #FFA500, #D4AF37)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Transform Your Life
            </motion.span>
            <motion.span 
              className="text-white block"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Choose Your Journey
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the program that's right for you and start your transformation today
          </motion.p>

          {/* Animated Statistics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {studentCount.toLocaleString()}+
              </motion.div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </motion.div>
            
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                {successRate}%
              </motion.div>
              <div className="text-muted-foreground">Success Rate</div>
            </motion.div>
            
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                {experience}+
              </motion.div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Floating CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold px-8 py-4 rounded-full text-lg premium-button-luxury"
              onClick={() => document.getElementById('programs-grid')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Explore Programs
              </motion.span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Premium Filter Bar */}
      <motion.section
        className="py-8 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={areCardsInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card p-6 mb-12"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange(filter.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    className="text-2xl mr-3"
                    animate={{ rotate: selectedFilter === filter.id ? 360 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {filter.icon}
                  </motion.span>
                  <span className="font-semibold">{filter.name}</span>
                  <motion.div
                    className="ml-3 bg-primary/20 text-primary px-2 py-1 rounded-full text-sm"
                    animate={{ scale: selectedFilter === filter.id ? 1.1 : 1 }}
                  >
                    {programs.filter(p => filter.id === 'all' || p.category === filter.id).length}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Grid */}
      <motion.section
        ref={cardsRef}
        id="programs-grid"
        className="py-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isFilterAnimating && (
              <motion.div
                key="loading"
                className="flex justify-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="loading-spinner" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
              layout
            >
              {filteredPrograms.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  index={index}
                  isExpanded={expandedCard === program.id}
                  onToggleExpand={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
                  isInCompare={compareList.includes(program.id)}
                  onToggleCompare={() => toggleCompare(program.id)}
                  compareCount={compareList.length}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Testimonial Carousel */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-playfair font-bold text-center mb-16 gradient-text"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                <motion.p
                  className="text-xl italic mb-6 text-muted-foreground"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>
                
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonials[currentTestimonial].program}
                    </Badge>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
              Don't wait for the "perfect" moment. The best time to start is now. 
              Book your free clarity call and let's discuss which program is right for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold px-8 py-4 rounded-full text-lg premium-button-luxury"
                onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
              >
                Book Free Clarity Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-full text-lg premium-button-luxury"
                onClick={() => window.location.href = "tel:+917975163696"}
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

// Program Card Component with Advanced Animations
const ProgramCard = ({ program, index, isExpanded, onToggleExpand, isInCompare, onToggleCompare, compareCount }: any) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(springY, [-100, 100], [5, -5]);
  const rotateY = useTransform(springX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: any) => {
    if (!cardRef.current) return;
    
    const rect = (cardRef.current as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.1,
      }}
      className={`${program.premium ? 'lg:col-span-2' : ''} relative group cursor-pointer`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Card className={`premium-card-hover bg-gradient-to-br ${program.gradient} border-0 text-white overflow-hidden relative h-full`}>
        {/* Premium Badge */}
        {program.premium && (
          <motion.div
            className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-bold z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            PREMIUM
          </motion.div>
        )}

        {/* Compare Button */}
        <motion.button
          className={`absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white/50 z-20 ${
            isInCompare ? 'bg-white text-black' : 'bg-transparent text-white'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!isInCompare && compareCount >= 3}
        >
          {isInCompare ? '✓' : '+'}
        </motion.button>
        
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className="text-6xl group-hover:animate-bounce"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring" }}
            >
              🎯
            </motion.div>
            <div className="text-right">
              <motion.div
                className="text-3xl font-bold"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: "spring" }}
              >
                ₹{program.price.toLocaleString()}
              </motion.div>
              {program.originalPrice && (
                <motion.div
                  className="text-sm opacity-60 line-through"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.6 }}
                  transition={{ delay: 0.3 }}
                >
                  ₹{program.originalPrice.toLocaleString()}
                </motion.div>
              )}
              <div className="text-sm opacity-80">{program.duration}</div>
            </div>
          </div>

          <CardTitle className="font-playfair text-3xl font-bold mb-4">
            {program.title}
          </CardTitle>

          <p className="text-lg opacity-90 leading-relaxed mb-4">
            {program.description}
          </p>

          {/* Program Stats */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="text-sm">{program.students} students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm">{program.rating}</span>
            </div>
            <Badge className={`${getDifficultyColor(program.difficulty)} text-white`}>
              {program.difficulty}
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Completion Rate</span>
              <span>{program.completionRate}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <motion.div
                className="bg-white h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${program.completionRate}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-lg">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit: string, i: number) => (
                      <motion.li
                        key={i}
                        className="flex items-start space-x-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-lg">Curriculum:</h4>
                  <ul className="space-y-2">
                    {program.curriculum.map((item: string, i: number) => (
                      <motion.li
                        key={i}
                        className="flex items-start space-x-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full font-bold text-lg py-4 rounded-full premium-button-luxury bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
            >
              Enroll Now
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="w-full border-white/30 text-white hover:bg-white/10"
              onClick={onToggleExpand}
            >
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mr-2"
              >
                ↓
              </motion.span>
              {isExpanded ? 'Show Less' : 'Learn More'}
            </Button>
          </div>
        </CardContent>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full"
          animate={{
            translateX: isHovered ? '200%' : '-100%'
          }}
          transition={{ duration: 0.6 }}
        />
      </Card>
    </motion.div>
  );
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-500";
    case "Intermediate": return "bg-yellow-500";
    case "Advanced": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

export default Programs;