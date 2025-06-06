import React from 'react';
import { Theme } from '../types';
import ThemeToggleButton from './ThemeToggleButton';
import { SparklesIcon } from './icons';
import LanguageSelector from './LanguageSelector'; // Import LanguageSelector
import { useTranslation } from '../contexts/LanguageContext'; // Import useTranslation

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const { t } = useTranslation(); // Get translation function

  return (
    <header className="p-4 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary dark:text-[#14e3eb]">
            {t('headerTitle')}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
            <LanguageSelector /> 
            <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;