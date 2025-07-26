import { motion } from 'framer-motion';

const SkeletonLoader = () => (
  <div className="w-full rounded-lg bg-gray-800 p-6 shadow-lg">
    <motion.div
      className="mb-4 h-8 w-3/4 rounded bg-gray-700"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="mb-4 h-4 rounded bg-gray-700"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.3,
      }}
    />
    <motion.div
      className="h-4 w-5/6 rounded bg-gray-700"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.6,
      }}
    />
  </div>
);

export default SkeletonLoader;