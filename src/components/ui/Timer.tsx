import React, { useEffect, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { Timer as TimerIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Timer: React.FC = () => {
  const { isMemorizing, settings } = useGameStore();
  const [timeLeft, setTimeLeft] = useState(settings.memorizeTime / 1000);

  useEffect(() => {
    if (!isMemorizing) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isMemorizing]);

  if (!isMemorizing) return null;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="fixed top-4 right-4 flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-lg"
    >
      <TimerIcon className="text-yellow-400" size={20} />
      <span className="text-white font-mono text-lg">{timeLeft}s</span>
    </motion.div>
  );
};