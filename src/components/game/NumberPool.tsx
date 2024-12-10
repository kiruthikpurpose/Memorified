import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface NumberPoolProps {
  number: number;
  isCorrect: boolean | null;
}

export const NumberPool: React.FC<NumberPoolProps> = ({ number, isCorrect }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: number });

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
      whileHover={{ scale: 1.05 }}
      className={clsx(
        'w-12 h-12 flex items-center justify-center rounded-lg cursor-move transition-all duration-200',
        {
          'bg-blue-600 text-white': isCorrect === null,
          'bg-green-500 text-white': isCorrect === true,
          'bg-red-500 text-white': isCorrect === false,
          'opacity-50': isDragging,
          'hover:shadow-lg': !isDragging,
        }
      )}
    >
      <span className="text-xl font-bold">{number}</span>
    </motion.div>
  );
};