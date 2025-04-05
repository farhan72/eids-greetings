'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import greetings from '../data/greetings.json';

interface Greeting {
  content: string;
}

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState<Greeting>(greetings.greetings[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const getRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.greetings.length);
    return greetings.greetings[randomIndex];
  };

  useEffect(() => {
    setCurrentGreeting(getRandomGreeting());
  }, []);

  const openEnvelope = () => {
    setIsEnvelopeOpen(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <audio 
        ref={audioRef}
        src="/sounds/eid-music.mp3"
        loop
        className="hidden"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-800 mb-4 md:mb-8">
            Selamat Hari Raya Idul Fitri 1446H
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-700 mb-6 md:mb-12">
            Mohon Maaf Lahir dan Batin
          </p>
          
          {/* Amplop Ucapan */}
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {!isEnvelopeOpen ? (
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openEnvelope}
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
                  <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">{greetings.title}</h3>
                  <p className="text-sm md:text-base text-gray-700">{currentGreeting.content}</p>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-3 md:mb-4">
              Doa Hari Raya
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Allahumma laka sumtu wa 'ala rizqika aftartu wa 'alaika tawakkaltu
              wa bika aamantu. Ya Karim, ya Karim, ya Karim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-3 md:mb-4">
              Pesan Khusus
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Semoga di hari yang fitri ini, kita semua diberikan kesempatan untuk
              menjadi pribadi yang lebih baik. Mari kita jaga silaturahmi dan
              persaudaraan kita.
            </p>
          </motion.div>
        </div>

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
      </div>
    </main>
  );
}

