
import React from 'react';
import { SparklesIcon, FaceScanAnimationIcon } from './icons';
import { useTranslation } from '../contexts/LanguageContext';

const SplashScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 z-50 transition-opacity duration-500 ease-in-out">
      <div className="text-center">
        <FaceScanAnimationIcon className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-8" />
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-primary dark:text-[#14e3eb]" />
          <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-[#14e3eb]">
            ProPiel
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
          {t('splashTagline')}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;