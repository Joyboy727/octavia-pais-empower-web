import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, Expand, Share2, Eye } from 'lucide-react';

interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  views: string;
  category: 'coaching' | 'speaking' | 'transformation';
}

const videos: Video[] = [
  {
    id: 'video1',
    url: 'https://www.facebook.com/share/r/169Uk87fwL/',
    title: 'Breakthrough Coaching Session',
    description: 'Watch how mindset transformation leads to real breakthroughs',
    thumbnail: '/lovable-uploads/51cae283-e75f-4902-a215-aef5185b0ae4.png',
    views: '2.3K',
    category: 'coaching'
  },
  {
    id: 'video2',
    url: 'https://www.facebook.com/share/r/1HtovRWePi/',
    title: 'Public Speaking Mastery',
    description: 'Learn powerful techniques to speak with confidence and impact',
    thumbnail: '/lovable-uploads/ac02951f-79a7-4a33-ae14-7e22133f5d82.png',
    views: '1.8K',
    category: 'speaking'
  },
  {
    id: 'video3',
    url: 'https://www.facebook.com/reel/1630558247808408',
    title: 'Client Transformation Story',
    description: 'Real results from The Evolution Experience program',
    thumbnail: '/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png',
    views: '3.1K',
    category: 'transformation'
  }
];

const FacebookVideoEmbed = ({ 
  videoUrl, 
  title, 
  isActive = false 
}: { 
  videoUrl: string; 
  title: string; 
  isActive?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-light"
    >
      {!isLoaded && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      <iframe
        src={`${videoUrl}?autoplay=${isActive ? 1 : 0}&mute=0`}
        width="100%"
        height="400"
        style={{ border: 'none' }}
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className="w-full aspect-video"
        title={title}
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-4 right-4 bg-navy/80 backdrop-blur-md rounded-xl p-4 border border-white/10"
      >
        <h3 className="text-white font-semibold text-lg gradient-text">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

const VideoCard = ({ 
  video, 
  index, 
  isActive, 
  onClick 
}: { 
  video: Video; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    coaching: 'from-blue-500 to-blue-600',
    speaking: 'from-purple-500 to-purple-600',
    transformation: 'from-emerald-500 to-emerald-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive ? 'ring-2 ring-primary shadow-2xl shadow-primary/25' : 'shadow-lg hover:shadow-xl'
      }`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-gradient-to-br from-navy to-navy-light">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Play Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 text-navy ml-1" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[video.category]} text-white text-xs font-medium`}>
          {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
        </div>

        {/* Views */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-navy/80 backdrop-blur-sm rounded-full px-2 py-1">
          <Eye className="w-3 h-3 text-white" />
          <span className="text-white text-xs">{video.views}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-card/50 backdrop-blur-lg border-t border-white/10">
        <h3 className="font-semibold text-foreground mb-2 gradient-text">{video.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
        
        <div className="flex items-center justify-between mt-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <Expand className="w-4 h-4" />
            <span className="text-sm">Fullscreen</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ['all', 'coaching', 'speaking', 'transformation'];
  
  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`
          }}
          animate={isInView ? {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          } : {}}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Watch Transformation in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See real coaching sessions, speaking techniques, and transformation stories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-white/10 text-foreground hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Video */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <FacebookVideoEmbed
            videoUrl={filteredVideos[activeVideo]?.url || videos[0].url}
            title={filteredVideos[activeVideo]?.title || videos[0].title}
            isActive={true}
          />
        </motion.div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                isActive={index === activeVideo}
                onClick={() => setActiveVideo(index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoShowcase;