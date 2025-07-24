import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const photos: Photo[] = [
  {
    id: '1',
    src: '/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png',
    alt: 'Octavia coaching session',
    title: 'One-on-One Coaching',
    description: 'Personalized coaching sessions that transform lives',
    category: 'coaching'
  },
  {
    id: '2',
    src: '/public/DSC_1019.JPG',
    alt: 'Success celebration',
    title: 'Success Stories',
    description: 'Celebrating client achievements',
    category: 'success'
  },
  {
    id: '3',
    src: '/public/DSC_0855.JPG',
    alt: 'Empowerment event',
    title: 'Empowerment Event',
    description: 'Inspiring moments from empowerment events',
    category: 'event'
  },
  {
    id: '4',
    src: '/DSC_0709.JPG',
    alt: 'Octavia speaking event',
    title: 'Speaking Engagement',
    description: 'Captivating audience with inspiring words',
    category: 'speaking'
  },
  {
    id: '5',
    src: '/20220625_190522.jpg',
    alt: 'Octavia workshop',
    title: 'Interactive Workshop',
    description: 'Engaging participants in growth-oriented activities',
    category: 'workshop'
  },
  {
    id: '6',
    src: '/DSC_0692.JPG',
    alt: 'Octavia corporate training',
    title: 'Corporate Training',
    description: 'Delivering impactful training sessions for professionals',
    category: 'corporate'
  },
  {
    id: '7',
    src: '/20220504_095537.jpg',
    alt: 'Octavia personal development',
    title: 'Personal Growth',
    description: 'Guiding individuals on their journey of self-discovery',
    category: 'personal'
  },
  {
    id: '8',
    src: '/DSC_0808.JPG',
    alt: 'Octavia leadership training',
    title: 'Leadership Training',
    description: 'Developing future leaders through comprehensive training programs',
    category: 'corporate'
  },
  {
    id: '9',
    src: '/DSC_0950.JPG',
    alt: 'Octavia motivational speaking',
    title: 'Motivational Speaking',
    description: 'Inspiring audiences to achieve their full potential',
    category: 'speaking'
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'coaching', 'speaking', 'workshop', 'corporate', 'success', 'personal'];
  
  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex]);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex]);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Gallery of Transformation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Glimpses into the journey of empowerment, growth, and meaningful connections
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/80">{photo.description}</p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {photo.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh] bg-background rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3">
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  <div className="md:w-1/3 p-6 md:p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {selectedPhoto.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{selectedPhoto.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;