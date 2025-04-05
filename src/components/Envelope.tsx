import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Greeting } from '@/types';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  currentGreeting: Greeting;
  title: string;
}

const Envelope = ({ isOpen, onOpen, currentGreeting, title }: EnvelopeProps) => {
  return (
    <motion.div 
      className="mb-8 md:mb-12"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!isOpen ? (
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          <div className="bg-green-600 text-white p-4 md:p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="h-12 w-12 md:h-16 md:w-16 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Buka Amplop Ucapan</h3>
              <p className="text-xs md:text-sm">Klik untuk membuka</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">{title}</h3>
            <p className="text-sm md:text-base text-gray-700">{currentGreeting.content}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default memo(Envelope); 