
import React, { useState, useEffect, useCallback } from 'react';
import { Theme, AppState, SkinAnalysisData, FacialTreatmentService, AppView } from './types';
// Header component is no longer imported or used
// import Header from './components/Header'; 
import CameraCapture from './components/CameraCapture';
import AnalysisDisplay from './components/AnalysisDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { analyzeSkin } from './services/geminiService';
import Chatbot from './components/chatbot/Chatbot';
import { useTranslation } from './contexts/LanguageContext';
import BottomNavBar from './components/BottomNavBar';
import IdleHomeScreen from './components/IdleHomeScreen';
import OptionsScreen from './components/OptionsScreen';
import CalendarScreen from './components/CalendarScreen';
import SplashScreen from './components/SplashScreen'; // Import SplashScreen

const facialTreatmentsData: FacialTreatmentService[] = [
  {
    id: 'microneedling-vitamins',
    nameKey: 'facialTreatments.microneedlingVitamins.name',
    price: 113000,
    imageUrl: 'https://cdnx.jumpseller.com/propiel-cl/image/53675696/resize/1280/1280?1727036641',
    detailsUrl: 'https://www.propiel.cl/demo-organic',
  },
  {
    id: 'cleansing-microneedling-vitc',
    nameKey: 'facialTreatments.cleansingMicroneedlingVitC.name',
    price: 54990,
    imageUrl: 'https://cdnx.jumpseller.com/propiel-cl/image/53677165/resize/1280/1280?1727042424',
    detailsUrl: 'https://www.propiel.cl/demo-skin',
  },
  {
    id: 'lashlifting-cleansing',
    nameKey: 'facialTreatments.lashliftingCleansing.name',
    price: 42990,
    imageUrl: 'https://cdnx.jumpseller.com/propiel-cl/image/53677271/resize/1280/1280?1727042965',
    detailsUrl: 'https://www.propiel.cl/demo-spa',
  },
];


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [appState, setAppState] = useState<AppState>(AppState.Idle);
  const [activeView, setActiveView] = useState<AppView>('home');
  const [analysisResult, setAnalysisResult] = useState<SkinAnalysisData | null>(null);
  const [errorMessageKey, setErrorMessageKey] = useState<string | null>(null); 
  const [errorParams, setErrorParams] = useState<Record<string, string | number> | undefined>(undefined);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { t, language } = useTranslation(); 
  const [showSplashScreen, setShowSplashScreen] = useState(true); // State for SplashScreen

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000); // Splash screen duration: 3 seconds
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.Dark);
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleCapture = useCallback(async (imageDataUrl: string) => {
    setAppState(AppState.Loading);
    setActiveView('home'); 
    try {
      const result = await analyzeSkin(imageDataUrl, language, t);
      setAnalysisResult(result);
      setAppState(AppState.Results);
      setErrorMessageKey(null);
      setErrorParams(undefined);
    } catch (error) {
      console.error("Analysis failed:", error);
      if (error instanceof Error) {
        if (error.message.includes("API key is invalid")) {
            setErrorMessageKey("error.apiKeyInvalid");
        } else if (error.message.toLowerCase().includes("json")) {
            setErrorMessageKey("error.jsonParse");
            setErrorParams({ message: error.message });
        } else {
            setErrorMessageKey("error.analysisFailed");
            setErrorParams({ message: error.message });
        }
      } else {
        setErrorMessageKey("error.unknown");
      }
      setAppState(AppState.Error);
    }
  }, [language, t]);

  const resetAppToBaseView = (targetView: AppView = 'home') => {
    setAppState(AppState.Idle);
    setActiveView(targetView);
    setAnalysisResult(null);
    setErrorMessageKey(null);
    setErrorParams(undefined);
  };

  const handleNavChange = (view: AppView) => {
    if (appState === AppState.Results || appState === AppState.Error) {
        resetAppToBaseView(view);
    } else {
        setAppState(AppState.Idle); 
        setActiveView(view);
    }
  };
  
  const handleScanPress = () => {
    setAppState(AppState.Camera);
  };

  const handleAssistantPress = () => {
    setIsChatbotOpen(prev => !prev);
  };

  const renderMainContent = () => {
    if (appState === AppState.Camera) {
      return <CameraCapture onCapture={handleCapture} onClose={() => resetAppToBaseView(activeView)} />;
    }
    if (appState === AppState.Loading) {
      return <LoadingSpinner />;
    }
    if (appState === AppState.Results && analysisResult) {
      return <AnalysisDisplay analysisData={analysisResult} onReset={() => resetAppToBaseView('home')} />;
    }
    if (appState === AppState.Error) {
      return <ErrorMessage messageKey={errorMessageKey || "error.unknown"} messageParams={errorParams} onRetry={() => resetAppToBaseView('home')} />;
    }

    switch (activeView) {
      case 'home':
        return <IdleHomeScreen onStartScan={handleScanPress} facialTreatmentsData={facialTreatmentsData} />;
      case 'options':
        return <OptionsScreen theme={theme} setTheme={setTheme} />;
      case 'calendar':
        return <CalendarScreen />;
      default:
        return <IdleHomeScreen onStartScan={handleScanPress} facialTreatmentsData={facialTreatmentsData} />;
    }
  };
  
  const showBottomNavBar = appState !== AppState.Camera && appState !== AppState.Loading;
  
  // const showMainHeader logic removed as header is always hidden.
  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header component removed */}
      <main className={`flex-grow ${showBottomNavBar ? 'pb-20 sm:pb-24' : ''}`}>
        {renderMainContent()}
      </main>
      
      {showBottomNavBar && (
         <BottomNavBar
          activeView={activeView}
          onNavChange={handleNavChange}
          onScanPress={handleScanPress}
          onAssistantPress={handleAssistantPress}
        />
      )}

      {isChatbotOpen && (
        <Chatbot
          isOpen={isChatbotOpen}
          onClose={handleAssistantPress} 
          skinAnalysisData={analysisResult}
        />
      )}
    </div>
  );
};

export default App;