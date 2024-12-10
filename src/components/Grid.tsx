import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { Card } from './Card';
import { useGameStore } from '../store/gameStore';
import { getGridSize } from '../utils/gameUtils';

export const Grid: React.FC = () => {
  const { numbers, difficulty, level, isMemorizing } = useGameStore();
  const gridSize = getGridSize(difficulty, level);
  
  const { setNodeRef } = useDroppable({
    id: 'grid',
  });

  return (
    <div
      ref={setNodeRef}
      className={`grid gap-4 p-4 rounded-lg bg-opacity-20 bg-white`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      <SortableContext items={numbers} strategy={rectSortingStrategy}>
        {numbers.map((number) => (
          <Card
            key={number}
            id={number}
            number={number}
            isMemorizing={isMemorizing}
          />
        ))}
      </SortableContext>
    </div>
  );
};