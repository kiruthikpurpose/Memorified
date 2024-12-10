import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const Controls: React.FC = () => {
  const { isMuted, toggleMute, checkAnswer, numbers } = useGameStore();

  return (
    <div className="flex gap-4 mt-6">
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
    </div>
  );
};