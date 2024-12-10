import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import clsx from 'clsx';

export const Feedback: React.FC = () => {
  const { showFeedback, feedbackMessage, isCorrect } = useGameStore();

  return (
    <AnimatePresence>
      {showFeedback && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={clsx(
            'fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg',
            {
              'bg-green-500': isCorrect,
              'bg-red-500': !isCorrect,
            }
          )}
        >
          {feedbackMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
};