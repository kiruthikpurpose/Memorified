import { GameMode } from '../types/game';

export const generateNumbers = (count: number): number[] => {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);
  return shuffleArray(numbers);
};

export const generateSequence = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i + 1);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const getModeColor = (mode: GameMode): string => {
  switch (mode) {
    case 'easy':
      return 'bg-green-500 hover:bg-green-600';
    case 'medium':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'hard':
      return 'bg-red-500 hover:bg-red-600';
    case 'arcade':
      return 'bg-purple-500 hover:bg-purple-600';
    case 'custom':
      return 'bg-blue-500 hover:bg-blue-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};