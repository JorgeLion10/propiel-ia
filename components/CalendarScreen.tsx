import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { CalendarIcon as CalendarIllustration } from './icons'; // Use a distinct name if needed

const CalendarScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-5rem)]"> {/* Adjusted min-height for nav bar only */}
      <CalendarIllustration className="w-24 h-24 text-primary dark:text-[#14e3eb] mb-6" />
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
        {t('calendarTitle')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-sm">
        {t('calendarPlaceholder')}
      </p>
    </div>
  );
};

export default CalendarScreen;