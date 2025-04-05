'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import greetings from '../data/greetings.json';
import { Greeting } from '../types';

// Import komponen
import SplashScreen from '../components/SplashScreen';
import Envelope from '../components/Envelope';
import InfoCard from '../components/InfoCard';
import Stars from '../components/Stars';
import Copyright from '../components/Copyright';

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState<Greeting>(greetings.greetings[0]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.greetings.length);
    return greetings.greetings[randomIndex];
  };

  useEffect(() => {
    setCurrentGreeting(getRandomGreeting());

    return () => {
      setCurrentGreeting(greetings.greetings[0]);
    };
  }, []);

  useEffect(() => {
    // Simulasi loading untuk splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  const openEnvelope = () => {
    setIsEnvelopeOpen(true);
    audioRef?.current?.play();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <audio 
        ref={audioRef}
        src="/sounds/eid-music.mp3"
        loop
        className="hidden"
      />
      
      {/* Splash Screen */}
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      
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
          <Envelope 
            isOpen={isEnvelopeOpen}
            onOpen={openEnvelope}
            currentGreeting={currentGreeting}
            title={greetings.title}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-16">
          <InfoCard 
            title="Doa Hari Raya"
            content="Taqabbalallaahi minnaa wa minkum taqabbal yaa kariim, wa ja'alanaallaahu wa iyyaakum minal 'aaidin wal faaiziin wal maqbuulin kullu 'aamin wa antum bi khair."
            delay={0.2}
            direction="left"
          />

          <InfoCard 
            title="Pesan Khusus"
            content="Semoga di hari yang fitri ini, kita semua diberikan kesempatan untuk menjadi pribadi yang lebih baik. Mari kita jaga silaturahmi dan persaudaraan kita."
            delay={0.4}
            direction="right"
          />
        </div>

        <Stars />
        <Copyright />
      </div>
    </main>
  );
}

