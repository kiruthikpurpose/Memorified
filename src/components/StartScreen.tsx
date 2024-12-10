import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Brain, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HowToPlay } from './HowToPlay';
import { getModeColor } from '../utils/gameUtils';

export const StartScreen: React.FC = () => {
  const { initializeGame } = useGameStore();
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex justify-center mb-6"
          >
            <Brain size={64} className="text-green-500" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4">Memorified</h1>
          <p className="text-gray-300 mb-8">Challenge your memory with different game modes!</p>
        </div>

        <div className="space-y-4">
          {['easy', 'medium', 'hard', 'arcade', 'custom'].map((mode) => (
            <motion.button
              key={mode}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => initializeGame(mode as any)}
              className={`w-full px-8 py-3 rounded-lg transition-colors text-lg capitalize ${getModeColor(mode as any)}`}
            >
              {mode} Mode
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowHowToPlay(true)}
          className="mt-8 flex items-center gap-2 mx-auto text-gray-300 hover:text-white transition-colors"
        >
          <HelpCircle size={20} />
          How to Play
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showHowToPlay && <HowToPlay onClose={() => setShowHowToPlay(false)} />}
      </AnimatePresence>
    </div>
  );
};