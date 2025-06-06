
import React from 'react';
import { Theme } from '../types';
import { SunIcon, MoonIcon } from './icons';

interface ThemeToggleButtonProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200"
      aria-label={theme === Theme.Light ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === Theme.Light ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggleButton;
