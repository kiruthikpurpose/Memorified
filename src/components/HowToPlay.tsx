import React from 'react';
import { Brain, MoveHorizontal, Timer, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowToPlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-blue-900 rounded-xl p-8 max-w-2xl w-full shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <Brain className="text-green-400" />
          How to Play
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Timer className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Memorize</h3>
              <p className="text-gray-300">
                Watch the grid carefully. Numbers will be shown for a limited time based on your settings.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MoveHorizontal className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Arrange</h3>
              <p className="text-gray-300">
                Once numbers are hidden, drag and drop them to recreate the original pattern.
                Wrong placements will be highlighted in red.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Progress</h3>
              <p className="text-gray-300">
                Complete levels to increase your score. The grid size will grow as you advance.
                In Arcade Mode, follow the sequence order to progress.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Got it!
        </button>
      </div>
    </motion.div>
  );
};