import { create } from 'zustand';
import { GameStore, GameMode, GameSettings } from '../types/game';
import { generateNumbers, generateSequence } from '../utils/gameUtils';

const DEFAULT_SETTINGS: GameSettings = {
  gridSize: 3,
  viewAttempts: 3,
  memorizeTime: 5000,
};

const getModeSettings = (mode: GameMode): GameSettings => {
  switch (mode) {
    case 'easy':
      return { ...DEFAULT_SETTINGS, gridSize: 3 };
    case 'medium':
      return { ...DEFAULT_SETTINGS, gridSize: 5 };
    case 'hard':
      return { ...DEFAULT_SETTINGS, gridSize: 7 };
    case 'arcade':
      return { ...DEFAULT_SETTINGS, gridSize: 3, memorizeTime: 3000 };
    default:
      return DEFAULT_SETTINGS;
  }
};

export const useGameStore = create<GameStore>((set, get) => ({
  mode: 'easy',
  settings: DEFAULT_SETTINGS,
  numbers: [],
  sequence: [],
  isPlaying: false,
  isMemorizing: false,
  isMuted: false,
  score: 0,
  level: 1,
  attempts: 0,
  startTime: null,
  totalTime: 0,
  showFeedback: false,
  feedbackMessage: '',
  isCorrect: false,
  gameOver: false,

  initializeGame: (mode: GameMode, customSettings?: Partial<GameSettings>) => {
    const settings = {
      ...getModeSettings(mode),
      ...customSettings,
    };
    
    const numbers = mode === 'arcade' 
      ? generateSequence(settings.gridSize * settings.gridSize)
      : generateNumbers(settings.gridSize * settings.gridSize);

    set({
      mode,
      settings,
      numbers,
      sequence: [...numbers],
      isPlaying: true,
      startTime: Date.now(),
      level: 1,
      score: 0,
      attempts: settings.viewAttempts,
      gameOver: false,
    });
  },

  startMemorizing: () => {
    const { settings } = get();
    set({ isMemorizing: true });
    
    setTimeout(() => {
      const { endMemorizing } = get();
      endMemorizing();
    }, settings.memorizeTime);
  },

  endMemorizing: () => {
    const { numbers } = get();
    set({
      isMemorizing: false,
      numbers: [...numbers].sort(() => Math.random() - 0.5),
    });
  },

  checkAnswer: (submittedNumbers: number[]) => {
    const { sequence, level, settings, mode, attempts } = get();
    const isCorrect = sequence.every((num, idx) => submittedNumbers[idx] === num);

    if (isCorrect) {
      const newSize = mode === 'arcade' 
        ? settings.gridSize * settings.gridSize + 1
        : settings.gridSize + Math.floor(level / 3);
      
      const newNumbers = mode === 'arcade'
        ? generateSequence(newSize)
        : generateNumbers(newSize * newSize);

      set({
        score: get().score + 1,
        level: level + 1,
        numbers: newNumbers,
        sequence: [...newNumbers],
        showFeedback: true,
        feedbackMessage: 'Correct! Get ready for the next level!',
        isCorrect: true,
        attempts: settings.viewAttempts,
      });
    } else {
      const newAttempts = attempts - 1;
      set({
        showFeedback: true,
        feedbackMessage: newAttempts > 0 ? 'Try again!' : 'Game Over!',
        isCorrect: false,
        attempts: newAttempts,
        gameOver: newAttempts <= 0,
      });
    }

    setTimeout(() => {
      set({ showFeedback: false });
    }, 2000);
  },

  toggleMute: () => set({ isMuted: !get().isMuted }),
  updateNumbers: (numbers) => set({ numbers }),
  resetGame: () => set({ isPlaying: false, gameOver: false }),
  setGameOver: (value) => set({ gameOver: value }),
}));