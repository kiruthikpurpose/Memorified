import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { Timer, Award } from 'lucide-react';

export const GameHeader: React.FC = () => {
  const { level, score, attempts } = useGameStore();

  return (
    <div className="flex justify-between items-center w-full max-w-2xl mb-8 px-4">
      <div className="flex items-center gap-2">
        <Award className="text-yellow-400" size={24} />
        <span className="text-white">Level {level}</span>
      </div>
      <div className="flex items-center gap-2">
        <Timer className="text-green-400" size={24} />
        <span className="text-white">Attempts: {attempts}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white">Score: {score}</span>
      </div>
    </div>
  );
};