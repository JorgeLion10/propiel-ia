
import React from 'react';

export const SunIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

export const CameraIcon: React.FC<{ className?: string, isActive?: boolean }> = ({ className = "w-6 h-6", isActive }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.25l-1.25-2.25L13.5 11l2.25-1.25L17 7.5l1.25 2.25L20.5 11l-2.25 1.25z"/>
  </svg>
);

export const HydrationIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6c0 1.559.504 2.995 1.337 4.133m6.025-8.519A8.25 8.25 0 009.038 7.048L12 3.75l2.962 3.298z" />
  </svg>
);

export const NutritionIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9.75v2.542a.75.75 0 01-.19.503l-3.107 3.107A.75.75 0 0118 16.25a3.751 3.751 0 01-3.108-1.674.75.75 0 00-1.284 0 3.751 3.751 0 01-3.108 1.674.75.75 0 01-.453-.19l-3.108-3.107a.75.75 0 01-.19-.503V9.75M21.75 9.75h-1.559a1.5 1.5 0 00-1.438 1.068 4.493 4.493 0 01-8.508 0A1.5 1.5 0 008.81 9.75H2.25M21.75 9.75A2.25 2.25 0 0019.5 7.5h-15A2.25 2.25 0 002.25 9.75m0 0v2.542" />
  </svg>
);

export const HabitIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

export const InfoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
);

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.697-3.697c-.422-.422-.98-.723-1.584-.898a15.003 15.003 0 01-1.046-.135A1.501 1.501 0 0112 15.75c0-.531.213-1.015.562-1.362 1.074-.903 1.858-2.136 1.858-3.512V8.511zm-3.75 2.438c.093.026.19.042.29.05C17.656 11.13 18 11.534 18 12c0 .465-.344.87-.859.984a14.958 14.958 0 01-1.893.286A13.488 13.488 0 0013.5 10.55V8.511c.781.093 1.5.383 2.097.827Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5c0-.531.213-1.015.562-1.362 1.074-.903 1.858-2.136 1.858-3.512V4.562A1.501 1.501 0 008.25 3c-1.136 0-2.1.847-2.193 1.98A15.003 15.003 0 005.136 5.5c-.422.175-.723.676-.898 1.584L.543 10.777v3.091c.022.34.046.68.072 1.02.096 1.132.898 1.98 2.097 1.98h2.136c.97 0 1.792-.616 2.097-1.5M12 7.5h3.75M12 12.75h3.75M7.5 15h3.75M3.75 17.25h-.008v.008H3.75v-.008Z" />
  </svg>
);

export const MicrophoneIcon: React.FC<{ className?: string; isListening?: boolean }> = ({ className = "w-6 h-6", isListening = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3S9 4.343 9 6v6c0 1.657 1.343 3 3 3z" />
    {isListening && <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3" />}
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const CloseIconX: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => ( // Using Sparkles for Bot
  <SparklesIcon className={className} />
);

export const TranslateIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12H22" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" />
  </svg>
);


export const ChatbotHeaderIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7 text-primary dark:text-[#14e3eb]" }) => (
  // Using a simple, recognizable chat bubble icon for the header. Can be replaced with an img if a specific brand icon is preferred.
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.75 6.75 0 006.75-6.75v-1.5c0-2.513.673-4.815 1.826-6.75H9A6.75 6.75 0 002.25 13.5c0 1.85.75 3.512 1.96 4.744.168.17.34.336.516.496a.75.75 0 01-.752 1.298A6.73 6.73 0 001.5 20.25c0 .307.023.608.066.901A.75.75 0 002.25 21h2.276a.75.75 0 00.724-.552 4.479 4.479 0 01-.447-.756zM12.75 7.5a.75.75 0 000-1.5H12a.75.75 0 000 1.5h.75z" clipRule="evenodd" />
    <path d="M13.5 6.75a.75.75 0 00-.75-.75H9.385c.03-.286.065-.567.099-.849A.75.75 0 008.732 4.5H7.5a.75.75 0 00-.75.75v.144c-.01.06-.017.12-.024.18a.75.75 0 00.72 1.012A17.09 17.09 0 0113.5 6.75z" />
    <path d="M14.257 21.496a.75.75 0 001.019-.686 11.29 11.29 0 00-.124-2.066 4.551 4.551 0 00.708-1.555 4.479 4.479 0 00.534-3.852C17.299 12.009 18 10.94 18 9.75A4.5 4.5 0 0013.5 5.25c-2.896 0-5.038 2.492-5.202 5.311a.75.75 0 00.607.88 3.75 3.75 0 013.59 3.59.75.75 0 00.88.607 12.031 12.031 0 002.36.227c.348.01.693.027 1.036.048a.75.75 0 00.74-.638 4.953 4.953 0 00.528-3.018.75.75 0 00-1.42-.388 3.453 3.453 0 01-.37 2.114 3.051 3.051 0 01-.584 1.233A9.783 9.783 0 0115 18.75a.75.75 0 00-.75.75 11.417 11.417 0 01-1.028 1.996.75.75 0 00.607.88c.26.03.52.056.782.076Z" />
  </svg>
);


export const HomeIcon: React.FC<{ className?: string, isActive?: boolean }> = ({ className = "w-6 h-6", isActive }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3.75 10.5V21a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v6a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V10.5M20.25 12H3.75" />
    {isActive && <path d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3.75 10.5V21a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v6a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V10.5" />}
  </svg>
);


export const AssistantCentralIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5H6m12 0h-1.5M7.5 6.75H6m12 0h-1.5m-6 12.75V21m0-3.75V15M12 3v2.25m0 12.75V15m0-9.75V3M7.5 15h-1.5M18 15h-1.5M6.75 11.25h10.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


export const SettingsIcon: React.FC<{ className?: string, isActive?: boolean }> = ({ className = "w-6 h-6", isActive }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string, isActive?: boolean }> = ({ className = "w-6 h-6", isActive }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />
    {isActive && <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />}
  </svg>
);

export const AssistantButtonPngIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-chatbot-icon-chat-bot-robot-png-image_4841963.png" 
    alt="Assistant Icon" 
    className={className} // Apply passed className directly
    onError={(e) => {
      // Fallback in case the image fails to load
      e.currentTarget.style.display = 'none'; 
      // Optionally, you could replace it with a default SVG or text
      // const fallbackSpan = document.createElement('span');
      // fallbackSpan.textContent = '🤖';
      // e.currentTarget.parentNode?.insertBefore(fallbackSpan, e.currentTarget.nextSibling);
    }}
  />
);

export const FaceScanAnimationIcon: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    {/* Simplified Face Outline */}
    <path d="M 50,15 A 35,35 0 0 0 50,85 A 35,35 0 0 0 50,15 M 30,40 Q 50,50 70,40 M 35,60 Q 50,70 65,60" 
          fill="none" 
          stroke="currentColor" 
          className="text-gray-300 dark:text-gray-600"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" />

    {/* Scanning Line - Animated with CSS class 'scan-line' */}
    <line x1="25" y1="30" x2="75" y2="30" 
          stroke="currentColor" 
          className="text-primary scan-line" 
          strokeWidth="1.5"
          strokeLinecap="round" />

    {/* Scanning Dots - Animated with CSS classes 'scan-dot scan-dot-X' */}
    <circle cx="35" cy="35" r="2" fill="currentColor" className="text-primary scan-dot scan-dot-1" />
    <circle cx="65" cy="35" r="2" fill="currentColor" className="text-primary scan-dot scan-dot-2" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" className="text-primary scan-dot scan-dot-3" />
    <circle cx="40" cy="65" r="2" fill="currentColor" className="text-primary scan-dot scan-dot-4" />
    <circle cx="60" cy="65" r="2" fill="currentColor" className="text-primary scan-dot scan-dot-5" />
  </svg>
);

export const PhotoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);


export const getIconByKeyword = (keyword?: string, className?: string): React.ReactNode => {
  if (!keyword) return <SparklesIcon className={className} />;
  switch (keyword.toLowerCase()) {
    case 'hydration': return <HydrationIcon className={className} />;
    case 'nutrition': return <NutritionIcon className={className} />;
    case 'habit': return <HabitIcon className={className} />;
    case 'general': return <InfoIcon className={className} />;
    case 'oiliness': return <SparklesIcon className={className} />; 
    case 'pores': return <SparklesIcon className={className} />; 
    case 'redness': return <SparklesIcon className={className} />; 
    case 'texture': return <SparklesIcon className={className} />; 
    case 'dark_spots': return <SparklesIcon className={className} />; 
    default: return <SparklesIcon className={className} />;
  }
};
