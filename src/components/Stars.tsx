import { memo } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Stars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex justify-center space-x-2 my-4"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
        >
          <StarIcon className="h-6 w-6 text-yellow-400" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(Stars); 