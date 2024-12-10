export type GameMode = 'easy' | 'medium' | 'hard' | 'custom' | 'arcade';

export interface GameSettings {
  gridSize: number;
  viewAttempts: number;
  memorizeTime: number;
}

export interface GameState {
  mode: GameMode;
  settings: GameSettings;
  numbers: number[];
  sequence: number[];
  isPlaying: boolean;
  isMemorizing: boolean;
  isMuted: boolean;
  score: number;
  level: number;
  attempts: number;
  startTime: number | null;
  totalTime: number;
  showFeedback: boolean;
  feedbackMessage: string;
  isCorrect: boolean;
  gameOver: boolean;
}

export interface GameStore extends GameState {
  initializeGame: (mode: GameMode, settings?: Partial<GameSettings>) => void;
  startMemorizing: () => void;
  endMemorizing: () => void;
  checkAnswer: (numbers: number[]) => void;
  toggleMute: () => void;
  updateNumbers: (numbers: number[]) => void;
  resetGame: () => void;
  setGameOver: (value: boolean) => void;
}