import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Stars = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-8 md:mt-16 text-center"
    >
      <div className="flex justify-center space-x-2 md:space-x-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Stars; 