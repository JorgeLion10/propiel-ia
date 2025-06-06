


import React from 'react';
import { HomeIcon, CameraIcon, SettingsIcon, CalendarIcon, AssistantButtonPngIcon } from './icons'; // Updated import
import { useTranslation } from '../contexts/LanguageContext';
import { AppView } from '../types';

interface BottomNavBarProps {
  activeView: AppView;
  onNavChange: (view: AppView) => void;
  onScanPress: () => void;
  onAssistantPress: () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeView, onNavChange, onScanPress, onAssistantPress }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home' as AppView, labelKey: 'navHome', icon: HomeIcon, action: () => onNavChange('home') },
    { id: 'scan', labelKey: 'navScan', icon: CameraIcon, action: onScanPress },
    { id: 'assistant', labelKey: 'navAssistant', icon: AssistantButtonPngIcon, action: onAssistantPress, isCentral: true }, // Changed icon
    { id: 'options' as AppView, labelKey: 'navOptions', icon: SettingsIcon, action: () => onNavChange('options') },
    { id: 'calendar' as AppView, labelKey: 'navCalendar', icon: CalendarIcon, action: () => onNavChange('calendar') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white dark:bg-gray-800 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.2)] rounded-t-2xl sm:rounded-t-3xl flex justify-around items-center px-2 z-30">
      {navItems.map((item) => {
        const isActive = activeView === item.id && !item.isCentral;
        const isScanItemActive = item.id === 'scan' && activeView === 'scan'; 

        if (item.isCentral) {
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="flex flex-col items-center justify-center -mt-8" // Removed text color classes as label is gone
              aria-label={t(item.labelKey)}
            >
              <div className="bg-primary rounded-full p-3.5 shadow-lg hover:bg-opacity-90 transition-all duration-200">
                {/* Ensure the icon is white and has the correct size */}
                <item.icon className="w-8 h-8 filter-white-icon" /> 
              </div>
              {/* Text label removed for the central button */}
            </button>
          );
        }

        return (
          <button
            key={item.id}
            onClick={item.action}
            className={`flex flex-col items-center justify-center w-1/5 h-full transition-colors duration-200
                        ${isActive || isScanItemActive ? 'text-primary dark:text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary'}`}
            aria-current={isActive || isScanItemActive ? 'page' : undefined}
            aria-label={t(item.labelKey)}
          >
            <item.icon className="w-6 h-6" isActive={isActive || isScanItemActive} />
            <span className={`text-xs mt-1 font-medium ${isActive || isScanItemActive ? 'text-primary dark:text-primary' : ''}`}>
              {t(item.labelKey)}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;