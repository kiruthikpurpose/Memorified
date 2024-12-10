import React, { useEffect } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useGameStore } from './store/gameStore';
import { Grid } from './components/game/Grid';
import { Controls } from './components/ui/Controls';
import { Feedback } from './components/ui/Feedback';
import { GameHeader } from './components/ui/GameHeader';
import { StartScreen } from './components/StartScreen';
import { CustomMode } from './components/modes/CustomMode';

function App() {
  const { 
    isPlaying,
    numbers,
    updateNumbers,
    startMemorizing,
    isMuted,
    gameOver,
    mode
  } = useGameStore();

  useEffect(() => {
    if (isPlaying) {
      startMemorizing();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = new Audio('https://assets.mixkit.co/music/preview/mixkit-game-show-suspense-waiting-678.mp3');
    audio.loop = true;

    if (isPlaying && !isMuted) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, isMuted]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = numbers.indexOf(active.id as number);
      const newIndex = numbers.indexOf(over.id as number);
      updateNumbers(arrayMove(numbers, oldIndex, newIndex));
    }
  };

  if (!isPlaying) {
    return mode === 'custom' ? <CustomMode /> : <StartScreen />;
  }

  if (gameOver) {
    return <StartScreen />;
  }

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-8">
      <GameHeader />
      <DndContext onDragEnd={handleDragEnd}>
        <Grid />
        <Controls />
        <Feedback />
      </DndContext>
    </div>
  );
}

export default App;