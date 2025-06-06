import React from 'react';
import { WellnessTip } from '../types';
import { getIconByKeyword } from './icons';
import { useTranslation } from '../contexts/LanguageContext';

interface WellnessTipCardProps {
  tip: WellnessTip;
}

const WellnessTipCard: React.FC<WellnessTipCardProps> = ({ tip }) => {
  const { t } = useTranslation();
  // Use translated category if categoryKey exists, otherwise fallback to category (English keyword from AI)
  // The prompt asks AI to provide categoryKey from our list, and category as English keyword
  const displayCategory = tip.categoryKey ? t(tip.categoryKey) : tip.category;
  const displayTip = tip.tip; // This comes translated from AI

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-3 h-full">
      <div className="flex-shrink-0 text-primary dark:text-[#14e3eb] mt-1">
        {getIconByKeyword(tip.icon || tip.category, "w-7 h-7")}
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-1">{displayCategory}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{displayTip}</p>
      </div>
    </div>
  );
};

export default WellnessTipCard;