import React from 'react';
import { SparklesIcon, CameraIcon } from './icons';
import FacialTreatmentCard from './FacialTreatmentCard';
import { FacialTreatmentService, AppState } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface IdleHomeScreenProps {
  onStartScan: () => void;
  facialTreatmentsData: FacialTreatmentService[];
}

const IdleHomeScreen: React.FC<IdleHomeScreenProps> = ({ onStartScan, facialTreatmentsData }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-start pt-10 pb-10 bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-5rem)]"> {/* Adjusted: Assuming nav bar is 5rem. Header height removed from calc. */}
      <div className="text-center px-6">
        <SparklesIcon className="w-24 h-24 text-primary dark:text-[#14e3eb] mb-6 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">{t('welcomeTo')}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          {t('appSlogan')}
        </p>
        <button
          onClick={onStartScan}
          className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-content text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg mx-auto"
          aria-label={t('scanFaceButton')}
        >
          <CameraIcon className="w-6 h-6" />
          <span>{t('scanFaceButton')}</span>
        </button>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 py-8 mt-16">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          {t('featuredTreatmentsTitle')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facialTreatmentsData.map((service) => (
            <FacialTreatmentCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdleHomeScreen;