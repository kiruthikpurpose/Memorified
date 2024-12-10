import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';

interface CardProps {
  id: number;
  number: number;
  isMemorizing: boolean;
}

export const Card: React.FC<CardProps> = ({ id, number, isMemorizing }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(
        'w-16 h-16 flex items-center justify-center rounded-lg cursor-move transition-all duration-200',
        {
          'bg-green-500 text-white': isMemorizing,
          'bg-blue-600 text-white': !isMemorizing,
          'opacity-50': isDragging,
          'hover:scale-105': !isDragging,
        }
      )}
    >
      <span className="text-2xl font-bold">{isMemorizing ? number : '?'}</span>
    </div>
  );
};