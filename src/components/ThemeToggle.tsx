import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Sun 
          className={`h-6 w-6 text-yellow-500 transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0 absolute'
          }`} 
        />
        <Moon 
          className={`h-6 w-6 text-blue-400 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0 absolute'
          }`} 
        />
      </div>
      
      {/* Animated background ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
