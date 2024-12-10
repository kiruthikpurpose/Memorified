import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { motion } from 'framer-motion';
import { NumberPool } from './NumberPool';
import { useGameStore } from '../../store/gameStore';

export const Grid: React.FC = () => {
  const { numbers, settings, isMemorizing, sequence } = useGameStore();
  const { setNodeRef } = useDroppable({ id: 'grid' });

  const getIsCorrect = (number: number, index: number): boolean | null => {
    if (isMemorizing) return null;
    return sequence[index] === number;
  };

  return (
    <motion.div
      ref={setNodeRef}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="space-y-8"
    >
      <div className="p-6 rounded-xl bg-blue-800 bg-opacity-30 backdrop-blur-sm">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${settings.gridSize}, minmax(0, 1fr))`,
          }}
        >
          <SortableContext items={numbers} strategy={rectSortingStrategy}>
            {numbers.map((number, index) => (
              <NumberPool
                key={number}
                number={number}
                isCorrect={getIsCorrect(number, index)}
              />
            ))}
          </SortableContext>
        </div>
      </div>
    </motion.div>
  );
};