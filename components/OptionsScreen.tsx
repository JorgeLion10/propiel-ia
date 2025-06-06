import React from 'react';
import LanguageSelector from './LanguageSelector';
import ThemeToggleButton from './ThemeToggleButton';
import { Theme } from '../types';
import { useTranslation } from '../contexts/LanguageContext';
import { SparklesIcon } from './icons'; // Or a settings icon

interface OptionsScreenProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const OptionsScreen: React.FC<OptionsScreenProps> = ({ theme, setTheme }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-5rem)]"> {/* Adjusted min-height for nav bar only */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 space-y-6">
        
        <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700">
           <SparklesIcon className="w-8 h-8 text-primary dark:text-[#14e3eb]" />
           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t('optionsTitle')}</h2>
        </div>

        {/* Language Selection */}
        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700 dark:text-gray-300">{t('language')}</span>
          <LanguageSelector />
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-md font-medium text-gray-700 dark:text-gray-300">{t('themeToggle')}</span>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
        </div>
        
        {/* Terms and Conditions */}
        <div>
          <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{t('termsAndConditionsTitle')}</h3>
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t('termsAndConditionsPlaceholder')}
            </p>
            {/* In a real app, this could be a link or a button to open a modal/page */}
            <button 
              className="mt-2 text-xs text-primary dark:text-[#14e3eb] hover:underline"
              onClick={() => alert(t('termsAndConditionsPlaceholder'))} // Placeholder action
            >
              {t('viewMoreButton')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OptionsScreen;