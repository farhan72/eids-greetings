import { motion } from 'framer-motion';

const Copyright = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-8 md:mt-12 text-center"
    >
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} by <a href="https://github.com/farhan72" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">Alfiy</a>
      </p>
    </motion.div>
  );
};

export default Copyright; 