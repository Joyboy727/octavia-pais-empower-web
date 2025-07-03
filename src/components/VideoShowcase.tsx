import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, Expand, Share2, Eye, Pause, Minimize, Video } from 'lucide-react';

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
  const [embedError, setEmbedError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Convert Facebook URLs to embeddable format with multiple fallback methods
  const getEmbedUrl = (url: string) => {
    const embedMethods = [
      // Method 1: Facebook plugin URL
      () => {
        if (url.includes('/share/r/')) {
          const videoId = url.split('/share/r/')[1].replace('/', '');
          return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(`https://www.facebook.com/reel/${videoId}`)}&show_text=false&width=560&autoplay=${isActive ? 'true' : 'false'}`;
        }
        return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(url)}&show_text=false&width=560&autoplay=${isActive ? 'true' : 'false'}`;
      },
      // Method 2: Alternative format
      () => url.replace('/share/r/', '/plugins/video.php?href='),
      // Method 3: Direct reel embed
      () => {
        if (url.includes('reel/')) {
          const reelId = url.split('reel/')[1];
          return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${reelId}&show_text=false&width=560&autoplay=${isActive ? 'true' : 'false'}`;
        }
        return url;
      }
    ];
    
    return embedMethods[retryCount] ? embedMethods[retryCount]() : embedMethods[0]();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = async () => {
    if (!isFullscreen && videoRef.current) {
      try {
        await videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.log('Fullscreen not supported');
      }
    } else if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Watch this amazing coaching session: ${title}`,
      url: window.location.href
    };

    if (navigator.share && /mobile/i.test(navigator.userAgent)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const handleIframeError = () => {
    if (retryCount < 2) {
      setRetryCount(prev => prev + 1);
      setEmbedError(false);
      setTimeout(() => setIsLoaded(false), 100);
    } else {
      setEmbedError(true);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <>
      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative group ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'rounded-2xl overflow-hidden shadow-2xl bg-navy-light'}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {!isLoaded && !embedError && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}

        {embedError ? (
          <div className="w-full aspect-video bg-gradient-to-br from-navy to-navy-light flex items-center justify-center rounded-2xl">
            <div className="text-center text-white p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Video className="w-12 h-12 mx-auto mb-4 opacity-60" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
              <p className="text-muted-foreground mb-4">Video temporarily unavailable</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(videoUrl, '_blank')}
                className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-lg transition-colors"
              >
                Watch on Facebook
              </motion.button>
            </div>
          </div>
        ) : (
          <div className={`relative ${isFullscreen ? 'w-full h-full' : 'aspect-video'}`}>
            <iframe
              src={getEmbedUrl(videoUrl)}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              onLoad={() => setIsLoaded(true)}
              onError={handleIframeError}
              className="w-full h-full"
              title={title}
            />

            {/* Custom Controls Overlay */}
            <AnimatePresence>
              {showControls && isLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayPause}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    )}
                  </motion.button>

                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleShare}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-white" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleFullscreen}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                    >
                      {isFullscreen ? (
                        <Minimize className="w-5 h-5 text-white" />
                      ) : (
                        <Expand className="w-5 h-5 text-white" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        
        {!isFullscreen && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-4 right-4 bg-navy/80 backdrop-blur-md rounded-xl p-4 border border-white/10"
          >
            <h3 className="text-white font-semibold text-lg gradient-text">{title}</h3>
          </motion.div>
        )}
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-xl p-6 max-w-md w-full mx-4 border border-border"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Share Video</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}` },
                  { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}&text=${encodeURIComponent(title)}` },
                  { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoUrl)}` },
                  { name: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(title + ' ' + videoUrl)}` }
                ].map((option) => (
                  <motion.a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors text-foreground"
                  >
                    <span>{option.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={videoUrl}
                  readOnly
                  className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigator.clipboard.writeText(videoUrl);
                    setShowShareModal(false);
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Copy
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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