import React, { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { Settings } from 'lucide-react';

export const CustomMode: React.FC = () => {
  const initializeGame = useGameStore((state) => state.initializeGame);
  const [settings, setSettings] = useState({
    gridSize: 4,
    viewAttempts: 3,
    memorizeTime: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeGame('custom', {
      ...settings,
      memorizeTime: settings.memorizeTime * 1000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 text-green-400 mb-4">
        <Settings size={24} />
        <h2 className="text-xl font-semibold">Custom Mode Settings</h2>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Grid Size</label>
        <input
          type="number"
          min="3"
          max="9"
          value={settings.gridSize}
          onChange={(e) => setSettings({ ...settings, gridSize: Number(e.target.value) })}
          className="w-full px-3 py-2 bg-blue-800 rounded-lg text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">View Attempts</label>
        <input
          type="number"
          min="1"
          max="5"
          value={settings.viewAttempts}
          onChange={(e) => setSettings({ ...settings, viewAttempts: Number(e.target.value) })}
          className="w-full px-3 py-2 bg-blue-800 rounded-lg text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Memorize Time (seconds)</label>
        <input
          type="number"
          min="3"
          max="10"
          value={settings.memorizeTime}
          onChange={(e) => setSettings({ ...settings, memorizeTime: Number(e.target.value) })}
          className="w-full px-3 py-2 bg-blue-800 rounded-lg text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Start Custom Game
      </button>
    </form>
  );
};