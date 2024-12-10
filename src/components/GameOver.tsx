import React from 'react';
import { useGameStore } from '../store/gameStore';
import { formatTime } from '../utils/gameUtils';

export const GameOver: React.FC = () => {
  const { score, totalTime, initializeGame } = useGameStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-blue-900 p-8 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
        <p className="text-xl mb-2">Levels Completed: {score}</p>
        <p className="text-xl mb-6">Total Time: {formatTime(totalTime)}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => initializeGame('easy')}
            className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};