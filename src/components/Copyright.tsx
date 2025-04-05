import { memo } from 'react';
import { motion } from 'framer-motion';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center text-sm text-gray-600 mt-8"
    >
      <p>
        © {currentYear}{' '}
        <a
          href="https://github.com/alfiy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          Alfiy
        </a>
      </p>
    </motion.div>
  );
};

export default memo(Copyright); 