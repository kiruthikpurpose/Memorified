import React from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

export const Controls: React.FC = () => {
  const { isMuted, toggleMute, checkAnswer, numbers, resetGame } = useGameStore();

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex gap-4 mt-6"
    >
      <button
        onClick={() => checkAnswer(numbers)}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Check Answer
      </button>
      <button
        onClick={toggleMute}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      <button
        onClick={resetGame}
        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        <RotateCcw size={24} />
      </button>
    </motion.div>
  );
};