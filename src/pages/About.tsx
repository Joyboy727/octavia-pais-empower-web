
import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import SkillBars from '@/components/about/SkillBars';
import PersonalValues from '@/components/about/PersonalValues';
import PhotoGallery from '@/components/about/PhotoGallery';
import AchievementBadges from '@/components/about/AchievementBadges';

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)",
    borderColor: "rgba(234, 179, 8, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
  hover: {
    scale: 1.03,
    color: "#EAB308",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -10 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.1,
    rotate: 5,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const About = () => {

  const certifications = [
    "Life Coach Certification – RR Training Systems",
    "Life Coaching Certificate: Beginner to Advanced – Joeel & Natalie Rivera",
    "NLP Practitioner Certification – Neuro-Linguistic Programming (NLP) Practitioner Course by Kain Ramsay",
    "Masters in English Literature - Bangalore University",
    "CIDTL (Cambridge International Diploma for Teachers and Learners) – Indus International School, Bangalore",
    "Bachelor of Education – Bangalore University",
    "Train the Trainer Certification – Jack Canfield's Canfield Training Group",
    "NLP Practitioner Certification – Neuro-Linguistic Programming (NLP) Practitioner Certificate (Accredited) by Kain Ramsay"
  ];

  const credentialsOrder = [
    "🏆 Certified Life Coach",
    "🏆 Mindset Transformation Specialist", 
    "🏆 NLP Practitioner",
    "🏆 Public Speaking Expert"
  ];

  const timeline = [
    { place: "Mangalore", description: "Born and raised", year: "Early Years" },
    { place: "UAE", description: "Banking & Education Career", year: "Career Journey" },
    { place: "Bangalore", description: "Life & Speaking Coach", year: "Current" }
  ];

  // Create refs for scroll animations
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen pt-24 bg-navy">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy parallax-bg"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className="relative z-10 container mx-auto px-4 mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={containerVariants}>
              <motion.h1 
                variants={itemVariants} 
                className="font-playfair text-responsive-xl font-bold mb-6"
              >
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                >
                  MY
                </motion.span>
                <br />
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                >
                  STORY
                </motion.span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gold font-medium mb-6"
              >
                Growth & Mindset Coach | Public Speaking Strategist
              </motion.p>
              <motion.div 
                variants={containerVariants}
                className="space-y-4 text-responsive-base leading-relaxed text-muted-foreground"
              >
                <motion.p variants={itemVariants}>
                  <span className="text-gold font-semibold">From the outside, everything looked picture-perfect.</span>
                </motion.p>
                <motion.p variants={itemVariants}>
                  A successful banking career, international experience, and a respected role as an educator in Bangalore. I had stability, security, and status. But deep inside, I felt a quiet ache—a sense that I was meant for more.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I often found myself asking: <span className="text-gold font-semibold">"Is this it?"</span>
                </motion.p>
                <motion.p variants={itemVariants}>
                  There was a voice within me that refused to be silenced. It whispered, <span className="text-gold font-semibold">"You're here to do work that changes lives."</span> And eventually, I listened.
                </motion.p>
                <motion.p variants={itemVariants}>
                  After over 12 years in corporate sectors and nearly a decade of shaping young minds in international schools, I took a leap of faith—away from certainty and into purpose.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I realized that my gift wasn't just in delivering lessons or closing deals. It was in helping people break through self-doubt, speak with confidence, and take aligned action toward their dreams.
                </motion.p>
                <motion.p variants={itemVariants}>
                  <span className="text-gold font-semibold">That's how my coaching practice was born.</span>
                </motion.p>
                <motion.p variants={itemVariants}>
                  Since then, I've devoted myself to helping ambitious men and women master their mindset, find their authentic voice, and lead lives that feel as good on the inside as they look on the outside.
                </motion.p>
                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="mt-8 p-6 bg-card/30 rounded-2xl border border-gold/20"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-bold text-gold mb-4"
                  >
                    💡 ✨ Fun Facts About Me
                  </motion.h3>
                  <motion.p variants={itemVariants}>
                    I was born and raised in the UAE, spent a few years in Mangalore after marriage, and now call Bangalore home. Each place has shaped my worldview and added a unique layer to my journey.
                  </motion.p>
                  <motion.p 
                    variants={itemVariants}
                    className="mt-3"
                  >
                    I'm deeply rooted in practices like vision boards, prayer, affirmations, and what I call "aligned hustle"—where faith meets focused action.
                  </motion.p>
                  <motion.p 
                    variants={itemVariants}
                    className="mt-3"
                  >
                    Nothing excites me more than witnessing someone go from <span className="text-gold font-semibold">"I don't think I can"</span> to <span className="text-gold font-semibold">"Just watch me do it!"</span>
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Portrait */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="relative max-w-md mx-auto"
                whileHover="hover"
                variants={imageVariants}
              >
                <motion.div 
                  className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3"
                  animate={{ 
                    rotate: [3, 2, 4, 3],
                    scale: [1, 1.02, 0.98, 1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                <motion.img 
                  src="/DSC_0790.JPG"
                  alt="Octavia Pais"
                  className="relative w-full rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Certifications */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 mobile-padding">
          <motion.h2 
            className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text"
            variants={itemVariants}
          >
            🎓 CERTIFICATIONS & TRAINING
          </motion.h2>
          <motion.p 
            className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Years of experience and continuous learning have shaped my expertise across multiple domains
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-16"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-card/50 border-gold/20 transition-all duration-300 card-elegant">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm">
                      {cert}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text"
            variants={itemVariants}
          >
            Credentials & Expertise 🏆
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {credentialsOrder.map((cert, index) => (
              <motion.div
                key={cert}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-card/50 border-gold/20 transition-all duration-300 card-elegant text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-base text-gold">
                      {cert}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Coaching Style */}
      <motion.section 
        className="py-16 bg-navy-light/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 mobile-padding text-center">
          <motion.h2 
            className="font-playfair text-2xl md:text-4xl font-bold mb-12 gradient-text"
            variants={itemVariants}
          >
            My Coaching Style
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Direct', 'Empowering', 'Energetic', 'Honest', 'Empathetic'].map((word, index) => (
                <motion.span 
                  key={word}
                  className="bg-gold text-navy px-4 py-2 rounded-full text-base font-bold cursor-default"
                  custom={index}
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-responsive-lg leading-relaxed text-muted-foreground"
              variants={itemVariants}
            >
              I believe in cutting through the noise and getting to the heart of what's holding you back. 
              My approach combines <span className="text-gold font-semibold">compassionate understanding</span> with 
              <span className="text-gold font-semibold"> practical action steps</span> that create real, lasting change.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <SkillBars />

      {/* Personal Values */}
      <PersonalValues />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Achievement Badges */}
      <AchievementBadges />

      {/* Personal Touch Section */}
      <motion.section 
        className="py-16 bg-navy-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 mobile-padding">
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-responsive-2xl font-bold mb-4"
              variants={itemVariants}
            >
              The <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2, 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true }}
              >
                Personal
              </motion.span> Touch
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Beyond coaching, here's a glimpse into who I am and what I value.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div 
              className="md:order-2"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3"
                  animate={{ 
                    rotate: [3, 2, 4, 3],
                    scale: [1, 1.02, 0.98, 1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                <motion.img 
                  src="/lovable-uploads/ac02951f-79a7-4a33-ae14-7e22133f5d82.png" 
                  alt="Octavia Pais Personal" 
                  className="relative w-full rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="md:order-1 space-y-6"
              variants={containerVariants}
            >
              <motion.h3 
                className="font-playfair text-xl font-bold text-gold mb-4"
                variants={itemVariants}
              >
                When I'm Not Coaching
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  { icon: '📚', activity: 'Reading' },
                  { icon: '🌱', activity: 'Gardening' },
                  { icon: '🏔️', activity: 'Adventure' },
                  { icon: '🍳', activity: 'Cooking' }
                ].map((hobby, index) => (
                  <motion.div 
                    key={hobby.activity}
                    className="bg-card/50 border-gold/20 rounded-lg p-4 text-center card-elegant"
                    custom={index}
                    variants={listItemVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className="text-xl mb-2"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0] 
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: index * 0.3,
                        repeat: Infinity, 
                        repeatDelay: 5
                      }}
                    >
                      {hobby.icon}
                    </motion.div>
                    <motion.div className="text-sm text-muted-foreground">{hobby.activity}</motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="bg-card/30 rounded-2xl p-6 border border-gold/20"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.p 
                  className="text-base leading-relaxed text-muted-foreground italic"
                  variants={itemVariants}
                >
                  "When you arise in the morning, think of what a precious privilege it is to be alive - 
                  to breathe, to think, to enjoy, to love."
                </motion.p>
                <motion.p 
                  className="text-gold font-medium mt-4"
                  variants={itemVariants}
                >
                  — A quote that guides my life and work
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
