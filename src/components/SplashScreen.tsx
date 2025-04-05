import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import eidAnimation from '../../public/animations-lottie/eid-mubarak.json';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-green-100 to-green-200"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-4">
          <Lottie 
            animationData={eidAnimation} 
            loop={true}
            style={{ width: 200, height: 200 }}
          />
        </div>
        <p className="text-green-600">Selamat Hari Raya Idul Fitri</p>
        <div className="mt-4 flex justify-center">
          <motion.div
            animate={{ 
              width: ["0%", "100%"],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="h-1 w-48 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen; 