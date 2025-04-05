import { memo } from 'react';
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
        className="text-center px-4"
      >
        <div className="mb-2 md:mb-4 w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto">
          <Lottie 
            animationData={eidAnimation} 
            loop={true}
            className="w-full h-full"
          />
        </div>
        <p className="text-base md:text-lg text-green-600 font-medium">Selamat Hari Raya Idul Fitri</p>
        <div className="mt-2 md:mt-4 flex justify-center">
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
            className="h-1 w-32 md:w-48 bg-green-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(SplashScreen); 