import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  content: string;
  delay: number;
  direction: 'left' | 'right';
}

const InfoCard = ({ title, content, delay, direction }: InfoCardProps) => {
  const xOffset = direction === 'left' ? -50 : 50;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-3 md:mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};

export default InfoCard; 