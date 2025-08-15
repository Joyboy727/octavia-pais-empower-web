import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap } from "lucide-react";

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
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 flex flex-col group relative border border-white/10"
    >
      <div className="relative">
        <img src={program.image} alt={program.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">{program.tag}</div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2"><Zap size={20} /> {program.title}</h3>
          <p className="text-sm italic text-gray-300">{program.tagline}</p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 text-sm flex-grow">{program.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-white mb-3">You'll Get:</h4>
          <ul className="space-y-3">
            {program.benefits.map((benefit, index) => (
              <motion.li key={index} className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <benefit.icon className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <span className="font-semibold text-white">{benefit.text}</span>
                  <span className="text-gray-400 block text-xs"> - {benefit.detail}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
            <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-yellow-400">₹{program.price}</span>
                <span className="text-xl text-gray-500 line-through">₹{program.oldPrice}</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://calendly.com/octaviathelifecoach/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 border-2 border-transparent hover:border-yellow-300">
                  {program.ctaText}
                </Button>
              </a>
            </motion.div>
            <p className="text-center text-gray-500 text-xs mt-3">{program.trustSignal}</p>
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
    <div className="min-h-screen bg-[#0d0d1a] text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
          Our Transformative Programs
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Unlock your next level of success, confidence, and impact.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {programData.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        className="text-center mt-20 bg-black/20 border border-yellow-400/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Transformation?</h2>
        <p className="text-gray-300 mb-6">Let's discuss your goals and find the perfect path forward. Book a complimentary consultation call today.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://calendly.com/octaviathelifecoach/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-lg py-7 px-10 rounded-xl shadow-lg hover:shadow-white/10 transition-shadow duration-300 border-2 border-gray-600 hover:border-gray-400">
                    Book a Free Consultation
                </Button>
            </a>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Programs;