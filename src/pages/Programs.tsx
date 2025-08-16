import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap, ArrowRight } from "lucide-react";
import PremiumButton from "@/components/PremiumButton";
// Remove these imports since we'll use direct divs with proper styling

const programData = [
  {
    id: 1,
    title: "The Breakthrough Blueprint",
    tagline: "₹9,999 | 3 Days | Intensive Mindset Rewiring",
    description: "A 3-Day Live Intensive to rewire your mindset, build unshakable confidence, and step into the life you truly deserve.",
    benefits: [
      { icon: CheckCircle, text: "5+ Hours of Live Coaching", detail: "Interactive sessions for instant clarity" },
      { icon: CheckCircle, text: "Hot Seat Coaching", detail: "Rapid personal breakthroughs in real time" },
      { icon: CheckCircle, text: "Actionable Workbook", detail: "Tools to implement learnings immediately" },
    ],
    price: "9,999",
    oldPrice: "14,999",
    ctaText: "🚀 Enroll Now - Blueprint",
    image: "/DSC_0697.JPG",
    tag: "Limited Spots!",
    trustSignal: "✔️ Proven results from 100+ clients | ⭐ 5-Star Reviews",
  },
  {
    id: 2,
    title: "Unstoppable Momentum",
    tagline: "₹15,000 | 5 Days | Habit & Discipline Mastery",
    description: "A 5-Day power-packed series to build discipline, create unshakable habits, and accelerate your success.",
    benefits: [
      { icon: CheckCircle, text: "Neuro-Habit Stacking", detail: "Build habits that actually stick" },
      { icon: CheckCircle, text: "Daily Focus Systems", detail: "Master your time and eliminate distractions" },
      { icon: CheckCircle, text: "Live Q&A Sessions", detail: "Get personalized guidance daily" },
    ],
    price: "15,000",
    oldPrice: "22,500",
    ctaText: "🔥 Build Momentum Now",
    image: "/DSC_0736.JPG",
    tag: "Early Bird Offer!",
    trustSignal: "✔️ 92% completion rate | ⭐ Featured in Forbes",
  },
  {
    id: 3,
    title: "The Evolution Experience",
    tagline: "₹49,999 | 6 Months | Deep Coaching Journey",
    description: "A 6-month deep coaching journey to rewire your mindset, build confidence, and speak with undeniable power.",
    benefits: [
        { icon: CheckCircle, text: "Bi-Weekly Coaching Calls", detail: "Consistent, personalized growth" },
        { icon: CheckCircle, text: "Full Resource Access", detail: "Unlock the entire library of tools" },
        { icon: CheckCircle, text: "Priority Support", detail: "Your questions answered within hours" },
    ],
    price: "49,999",
    oldPrice: "69,999",
    ctaText: "🌟 Begin Your Evolution",
    image: "/DSC_0752.JPG",
    tag: "Premium Experience",
    trustSignal: "✔️ Bespoke 1-on-1 guidance | ⭐ For serious high-achievers",
  },
    {
    id: 4,
    title: "Speak With Impact",
    tagline: "₹9,999 | 5 Sessions | Public Speaking Mastery",
    description: "A 5-session public speaking program to build confidence, presence, and clarity for any stage.",
    benefits: [
      { icon: CheckCircle, text: "Overcome Speaking Anxiety", detail: "Techniques to stay calm and confident" },
      { icon: CheckCircle, text: "Master Storytelling", detail: "Engage and persuade any audience" },
      { icon: CheckCircle, text: "Live Feedback & Practice", detail: "Refine your skills in a safe space" },
    ],
    price: "9,999",
    oldPrice: "14,999",
    ctaText: "👉 Book Your Spot – Speak with Power",
    image: "/DSC_0889.JPG",
    tag: "New Program!",
    trustSignal: "✔️ Small group sizes for personalized attention",
  },
];

const ProgramCard = ({ program }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 20, duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gradient-to-br from-navy-light/80 to-navy/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 flex flex-col group relative border border-gold/20 hover:border-gold/40 transition-all duration-300"
    >
      {/* Premium Image Section */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={program.image} 
          alt={`${program.title} - Premium coaching program featuring confident professionals`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
        
        {/* Premium Glassmorphism Tag */}
        <div className="absolute top-4 right-4 bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold px-3 py-2 rounded-full shadow-lg">
          {program.tag}
        </div>
        
        {/* Program Header */}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-gold mb-2 flex items-center gap-2">
            <Zap size={24} className="text-gold-light" /> 
            {program.title}
          </h3>
          <p className="text-sm text-gray-200 font-medium">{program.tagline}</p>
        </div>
      </div>

      {/* Premium Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-200 mb-6 text-base leading-relaxed">{program.description}</p>
        
        {/* Benefits Section */}
        <div className="mb-8">
          <h4 className="font-heading font-bold text-gold mb-4 text-lg">You'll Get:</h4>
          <ul className="space-y-4">
            {program.benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="font-semibold text-white text-base">{benefit.text}</span>
                  <span className="text-gray-300 block text-sm mt-1">{benefit.detail}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Premium Pricing & CTA Section */}
        <div className="mt-auto">
          <div className="bg-navy/60 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gold/20">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-4xl font-bold text-gold">₹{program.price}</span>
              <span className="text-xl text-gray-400 line-through">₹{program.oldPrice}</span>
            </div>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="text-sm text-gray-300 ml-2">4.9/5 (95+ reviews)</span>
            </div>
          </div>
          
          <PremiumButton 
            variant="cta" 
            size="lg" 
            className="w-full mb-3"
            onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
          >
            {program.ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </PremiumButton>
          
          <p className="text-center text-gray-400 text-sm">{program.trustSignal}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/DSC_0855.JPG')`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        
        <div className="relative z-10 py-32 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Transformative Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Elite coaching designed for real-world results. Clear frameworks. Measurable impact.
            </p>
            <PremiumButton 
              variant="cta" 
              size="lg" 
              className="shadow-xl hover:shadow-2xl"
              onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
            >
              Book Your Free Clarity Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </PremiumButton>
          </motion.div>
        </div>
      </section>

      {/* Premium Program Cards Grid */}
      <section className="bg-navy-light/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {programData.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mid-Page CTA Banner */}
      <section className="relative overflow-hidden py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/DSC_0697.JPG')`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        
        <div className="relative z-10 text-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gold-light to-gold bg-clip-text text-transparent">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and find the perfect path forward. Book a complimentary consultation call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton 
                variant="cta" 
                size="lg"
                onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
              >
                Book a Free Consultation
              </PremiumButton>
              <PremiumButton 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Program Details
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;