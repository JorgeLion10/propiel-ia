import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../types';
import { TranslateIcon, ChevronDownIcon } from './icons';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const languages: { code: Language; nameKey: string }[] = [
    { code: 'es', nameKey: 'spanish' },
    { code: 'en', nameKey: 'english' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 flex items-center"
        aria-label={t('languageSelector.toggleLabel') || "Change language"} // Add a translation key for this
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <TranslateIcon className="w-6 h-6" />
        <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-200 dark:border-gray-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-selector-button" // Ensure the button has this ID if needed, or use aria-label
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors
                          ${language === lang.code 
                            ? 'bg-primary text-primary-content' 
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              role="menuitem"
              aria-current={language === lang.code ? 'true' : undefined}
            >
              {t(lang.nameKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;