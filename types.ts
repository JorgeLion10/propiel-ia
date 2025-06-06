export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type Language = 'es' | 'en';

export interface SkinCharacteristic {
  name: string; // This might also need to be a key if names need translation
  nameKey?: string; // For translatable characteristic names
  score: number; // 0-100
  description: string; // This will come from AI, needs to be in selected language
  descriptionKey?: string; // If we have static descriptions
  icon?: string; // Keyword for icon mapping
}

export interface RoutineStep {
  time: 'Morning' | 'Evening';
  step: number;
  description: string; // From AI, needs to be in selected language
  productType?: string; // From AI, needs to be in selected language
}

export interface RecommendedProduct {
  name: string; // From AI
  type: string; // From AI
  reason: string; // From AI
  imageUrl?: string; // Placeholder URL
}

export interface WellnessTip {
  category: 'Hydration' | 'Nutrition' | 'Habit' | 'General';
  categoryKey?: string; // For translatable category names
  tip: string; // From AI
  icon?: string; // Keyword for icon mapping
}

export interface SkinAnalysisData {
  generalImpression: string; // From AI
  characteristics: SkinCharacteristic[];
  routine: RoutineStep[];
  products: RecommendedProduct[];
  wellnessTips: WellnessTip[];
}

export enum AppState {
  Idle,
  Camera,
  Loading,
  Results,
  Error,
}

export type AppView = 'home' | 'scan' | 'assistant' | 'options' | 'calendar';


export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
  // other types of chunks can be added if needed
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // other metadata fields if necessary
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
  isLoading?: boolean;
  sentImage?: { // For displaying image sent by user
    dataUrl: string; // base64 data URL for <img src>
    name: string;    // original file name for alt text or info
  };
}

export interface FacialTreatmentService {
  id: string;
  nameKey: string; // Key for translation
  price: number;
  imageUrl: string;
  detailsUrl: string;
}