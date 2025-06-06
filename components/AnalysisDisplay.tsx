import React, { useState } from 'react';
import { SkinAnalysisData } from '../types';
import SkinCharacteristicCard from './SkinCharacteristicCard';
import SkincareRoutineSection from './SkincareRoutineSection';
import ProductRecommendationCard from './ProductRecommendationCard';
import WellnessTipCard from './WellnessTipCard';
import { ChevronDownIcon, InfoIcon } from './icons';
import { useTranslation } from '../contexts/LanguageContext';

interface AnalysisDisplayProps {
  analysisData: SkinAnalysisData;
  onReset: () => void;
}

interface AccordionSectionProps {
  titleKey: string; // Changed to titleKey
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ titleKey, icon, children }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const title = t(titleKey);

  return (
    <div className="mb-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left text-xl font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-xl"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </div>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div id={`accordion-content-${title.replace(/\s+/g, '-')}`} className="p-4 border-t border-gray-200 dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};


const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ analysisData, onReset }) => {
  const { t } = useTranslation();
  const { generalImpression, characteristics, routine, products, wellnessTips } = analysisData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-4 space-y-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2
          onClick={scrollToTop}
          className="text-3xl font-bold text-primary dark:text-[#14e3eb] mb-2 cursor-pointer hover:opacity-80 transition-opacity"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToTop()}
          aria-label={t('analysisResultsTitle')}
        >
          {t('analysisResultsTitle')}
        </h2>
        <p className="text-md text-gray-700 dark:text-gray-300">{generalImpression || t('analysisGeneralImpressionDefault')}</p>
      </div>

      <AccordionSection titleKey="analysisSectionCharacteristics" icon={<InfoIcon className="w-6 h-6 text-primary dark:text-[#14e3eb]" />}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {characteristics && characteristics.length > 0 ? (
            characteristics.map((char, index) => ( // Added index for key for safety if names are not unique
              <SkinCharacteristicCard key={char.nameKey || char.name || index} characteristic={char} />
            ))
          ) : <p className="col-span-full text-gray-600 dark:text-gray-400">{t('analysisNoCharacteristics')}</p>}
        </div>
      </AccordionSection>
      
      <AccordionSection titleKey="analysisSectionRoutine" icon={<InfoIcon className="w-6 h-6 text-primary dark:text-[#14e3eb]" />}>
        {routine && routine.length > 0 ? (
          <SkincareRoutineSection routine={routine} />
        ) : <p className="text-gray-600 dark:text-gray-400">{t('analysisNoRoutine')}</p>}
      </AccordionSection>

      <AccordionSection titleKey="analysisSectionProducts" icon={<InfoIcon className="w-6 h-6 text-primary dark:text-[#14e3eb]" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {products && products.length > 0 ? (
            products.map((product, index) => ( // Added index for key
              <ProductRecommendationCard key={product.name || index} product={product} />
            ))
          ) : <p className="col-span-full text-gray-600 dark:text-gray-400">{t('analysisNoProducts')}</p>}
        </div>
      </AccordionSection>
      
      <AccordionSection titleKey="analysisSectionWellness" icon={<InfoIcon className="w-6 h-6 text-primary dark:text-[#14e3eb]" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wellnessTips && wellnessTips.length > 0 ? (
            wellnessTips.map((tip, index) => ( // Added index for key
              <WellnessTipCard key={tip.tip || index} tip={tip} />
            ))
          ) : <p className="col-span-full text-gray-600 dark:text-gray-400">{t('analysisNoWellnessTips')}</p>}
        </div>
      </AccordionSection>

      <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-primary text-primary-content font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-lg w-full sm:w-auto"
          aria-label={t('analysisScanAgainButton')}
        >
          {t('analysisScanAgainButton')}
        </button>
        <button
          onClick={onReset} // Should probably go to Idle state without re-scan.
          className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-lg w-full sm:w-auto"
          aria-label={t('analysisReturnHomeButton')}
        >
          {t('analysisReturnHomeButton')}
        </button>
      </div>
       <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-8">
        {t('analysisDisclaimer')}
      </p>
    </div>
  );
};

export default AnalysisDisplay;