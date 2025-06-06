import React from 'react';
import { FacialTreatmentService } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface FacialTreatmentCardProps {
  service: FacialTreatmentService;
}

const FacialTreatmentCard: React.FC<FacialTreatmentCardProps> = ({ service }) => {
  const { t } = useTranslation();
  const formattedPrice = new Intl.NumberFormat('es-CL', { // Price formatting remains CLP
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(service.price);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={service.imageUrl}
        alt={t(service.nameKey)} // Translate alt text
        className="w-full h-48 object-cover rounded-t-xl" // Added rounded-t-xl, consistent height
        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x225.png?text=Imagen+no+disponible')}
      />
      <div className="p-5 sm:p-6 flex flex-col flex-grow"> {/* Increased padding */}
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{t(service.nameKey)}</h4>
        <p className="text-md sm:text-lg font-bold text-primary dark:text-[#14e3eb] mb-4">{formattedPrice}</p> {/* Adjusted margin bottom */}
        {/* Removed empty paragraph: <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow"> </p> */}
        <a
          href={service.detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto self-center inline-block bg-primary text-primary-content px-10 py-3 rounded-full font-semibold text-base transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-content focus:ring-opacity-75" // Updated button style to use app theme colors
        >
          {t('viewMoreButton')}
        </a>
      </div>
    </div>
  );
};

export default FacialTreatmentCard;