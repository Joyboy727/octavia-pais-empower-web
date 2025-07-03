import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Software Engineer",
    company: "Tech Innovators",
    image: "/ananya.jpg",
    quote: "When I first came to Octavia, I was overwhelmed by self-doubt and anxiety about public speaking. I would avoid group presentations and felt my voice was unheard. After 3 months of coaching, I now confidently lead my study groups and even delivered a speech at our company event. I feel like a new person — empowered and ready to take on challenges.",
    rating: 5
  },
  {
    id: 2,
    name: "Rohit Patel",
    role: "Project Manager",
    company: "Digital Solutions Ltd",
    image: "/rohit.jpg",
    quote: "I felt stuck in my career and frustrated by my inability to communicate ideas clearly in meetings. After 6 months of mindset and communication coaching with Octavia, I not only gained clarity on my career goals but also transformed my presence at work. My managers noticed my improved confidence, and I was promoted to lead a key project. Coaching changed the way I see myself and my potential.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Menon",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "/priya.jpg",
    quote: "Octavia's coaching approach is truly transformative. She helped me break through mental barriers I didn't even know existed. Her combination of mindset work and practical communication skills gave me the confidence to speak at industry conferences. The investment in her programs has paid for itself many times over through new opportunities and career advancement.",
    rating: 5
  }
];

const TestimonialCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 premium-mesh-gradient opacity-30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our coaching transforms lives and careers
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
              style={{ 
                transformStyle: "preserve-3d",
                transformOrigin: "center center"
              }}
            >
              <motion.div
                variants={hoverVariants}
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  boxShadow: hoveredCard === testimonial.id 
                    ? "0 25px 50px rgba(212, 175, 55, 0.3)" 
                    : "0 8px 32px rgba(0,0,0,0.3)"
                }}
              >
                {/* Glassmorphism Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)"
                  }}
                />

                {/* Profile Section */}
                <div className="relative z-10 flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 mr-4"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=D4AF37&color=0B1426&size=128`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                  </motion.div>
                  
                  <div>
                    <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                    <p className="text-gold text-sm font-medium">{testimonial.role}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="relative z-10 flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, type: "spring" }}
                      className="text-gold text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  className="relative z-10 text-white/90 text-sm leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-gold text-3xl absolute -top-2 -left-2 opacity-50">"</span>
                  {testimonial.quote}
                  <span className="text-gold text-3xl absolute -bottom-4 -right-2 opacity-50">"</span>
                </motion.blockquote>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-gold/20"
                  animate={{
                    borderColor: hoveredCard === testimonial.id 
                      ? ["rgba(212, 175, 55, 0.2)", "rgba(212, 175, 55, 0.5)", "rgba(212, 175, 55, 0.2)"]
                      : "rgba(212, 175, 55, 0.2)"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Shimmer Effect */}
                <AnimatePresence>
                  {hoveredCard === testimonial.id && (
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: "100%", opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to write your own success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCards;