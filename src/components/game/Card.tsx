import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
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
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      className={clsx(
        'w-16 h-16 flex items-center justify-center rounded-lg cursor-move transition-all duration-200',
        {
          'bg-green-500 text-white': isMemorizing,
          'bg-blue-600 text-white': !isMemorizing,
          'opacity-50 scale-105': isDragging,
          'hover:shadow-lg': !isDragging,
        }
      )}
    >
      <span className="text-2xl font-bold">
        {isMemorizing ? number : '?'}
      </span>
    </motion.div>
  );
};