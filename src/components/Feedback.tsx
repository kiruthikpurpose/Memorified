import React from 'react';
import { useGameStore } from '../store/gameStore';
import clsx from 'clsx';

export const Feedback: React.FC = () => {
  const { showFeedback, feedbackMessage, isCorrect } = useGameStore();

  if (!showFeedback) return null;

  return (
    <div
      className={clsx(
        'fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white text-lg font-semibold transition-all duration-300',
        {
          'bg-green-500': isCorrect,
          'bg-red-500': !isCorrect,
        }
      )}
    >
      {feedbackMessage}
    </div>
  );
};