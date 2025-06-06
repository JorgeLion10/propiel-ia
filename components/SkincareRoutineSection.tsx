import React from 'react';
import { RoutineStep } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface SkincareRoutineSectionProps {
  routine: RoutineStep[];
}

const SkincareRoutineSection: React.FC<SkincareRoutineSectionProps> = ({ routine }) => {
  const { t } = useTranslation();
  const morningRoutine = routine.filter(step => step.time === 'Morning').sort((a,b) => a.step - b.step);
  const eveningRoutine = routine.filter(step => step.time === 'Evening').sort((a,b) => a.step - b.step);

  const RoutineList: React.FC<{ titleKey: string; steps: RoutineStep[] }> = ({ titleKey, steps }) => {
    const title = t(titleKey);
    return (
    <div className="mb-6">
      <h4 className="text-xl font-semibold text-primary dark:text-[#14e3eb] mb-3">{title}</h4>
      {steps.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">{t('routineNoSteps', { time: title.toLowerCase() })}</p>
      ) : (
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {steps.map((step, index) => ( // Added index for key
            <li key={`${step.time}-${step.step}-${index}`} className="ml-4">
              {/* Descriptions and product types come translated from AI */}
              <span className="font-medium">{step.description}</span>
              {step.productType && <span className="text-sm text-primary dark:text-[#14e3eb] ml-1">({step.productType})</span>}
            </li>
          ))}
        </ol>
      )}
    </div>
  )};

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t('analysisSectionRoutine')}</h3>
      <RoutineList titleKey="routineMorning" steps={morningRoutine} />
      <RoutineList titleKey="routineEvening" steps={eveningRoutine} />
    </div>
  );
};

export default SkincareRoutineSection;