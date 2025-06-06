import React from 'react';
import { SkinCharacteristic } from '../types';
import { getIconByKeyword } from './icons';
import { useTranslation } from '../contexts/LanguageContext';

interface SkinCharacteristicCardProps {
  characteristic: SkinCharacteristic;
}

const SkinCharacteristicCard: React.FC<SkinCharacteristicCardProps> = ({ characteristic }) => {
  const { t } = useTranslation();
  const scoreColor = characteristic.score > 70 ? 'bg-green-500' : characteristic.score > 40 ? 'bg-yellow-500' : 'bg-red-500';
  
  // Use translated name if nameKey exists, otherwise fallback to name (which should be English from AI then)
  // The prompt asks AI to provide nameKey from our list, and name as English keyword
  const displayName = characteristic.nameKey ? t(characteristic.nameKey) : characteristic.name;
  const displayDescription = characteristic.description; // This comes translated from AI

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
      <div className="mb-3 text-primary dark:text-[#14e3eb]">
        {getIconByKeyword(characteristic.icon || characteristic.name, "w-10 h-10")}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{displayName}</h3>
      <div className={`score-bubble ${scoreColor} text-white mb-2`}>
        {characteristic.score}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 flex-grow">{displayDescription}</p>
    </div>
  );
};

export default SkinCharacteristicCard;