import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface ErrorMessageProps {
  messageKey: string; // Changed from message to messageKey
  messageParams?: Record<string, string | number>; // For dynamic parts in translations
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ messageKey, messageParams, onRetry }) => {
  const { t } = useTranslation();
  const translatedMessage = t(messageKey, messageParams);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 text-center">
      <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg relative" role="alert">
        <strong className="font-bold">{t('errorOops')} </strong>
        <span className="block sm:inline">{translatedMessage}</span>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-6 py-2 bg-primary text-primary-content font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
        >
          {t('errorTryAgainButton')}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;