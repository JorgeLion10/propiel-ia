import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface Translations {
  [key: string]: string | Translations;
}

const esTranslations: Translations = {
  // Header
  headerTitle: "ProPiel",
  // Language Selector
  language: "Idioma",
  spanish: "Español",
  english: "English",
  languageSelector: {
    toggleLabel: "Cambiar idioma"
  },
  // Authentication
  auth: {
    signIn: "Iniciar Sesión",
    signUp: "Registrarse",
    signOut: "Cerrar Sesión",
    email: "Correo Electrónico",
    password: "Contraseña",
    emailPlaceholder: "tu@email.com",
    passwordPlaceholder: "Tu contraseña",
    signInWithGoogle: "Continuar con Google",
    loading: "Cargando...",
    or: "o",
    signInSubtitle: "Inicia sesión para acceder a tu historial de análisis",
    signUpSubtitle: "Crea una cuenta para guardar tu historial de análisis",
    alreadyHaveAccount: "¿Ya tienes cuenta? Inicia sesión",
    dontHaveAccount: "¿No tienes cuenta? Regístrate"
  },
  // User Account
  userAccount: "Cuenta de Usuario",
  // History
  history: {
    title: "Historial de Análisis",
    noAnalyses: "No hay análisis guardados",
    noAnalysesDescription: "Realiza tu primer análisis de piel para ver tu historial aquí",
    analysis: "Análisis",
    characteristics: "características",
    viewDetails: "Ver detalles",
    backToHistory: "Volver al historial",
    deleteAnalysis: "Eliminar análisis",
    analysisFromDate: "Análisis del"
  },
  // Splash Screen
  splashTagline: "Descubre la mejor versión de tu piel.",
  // Idle Screen
  welcomeTo: "Bienvenido a ProPiel",
  appSlogan: "Obtén análisis de piel personalizados y rutinas de cuidado. Comienza escaneando tu rostro.",
  scanFaceButton: "Escanear Rostro",
  featuredTreatmentsTitle: "Nuestros Tratamientos Destacados",
  // Facial Treatment Card
  viewMoreButton: "Ver más",
  facialTreatments: {
    microneedlingVitamins: { name: "Microneedling + Vitaminas (Pack 3 sesiones)" },
    cleansingMicroneedlingVitC: { name: "Limpieza Facial + Microneedling + Vitamina C" },
    lashliftingCleansing: { name: "Lashlifting + Limpieza Facial Profunda" },
  },
  // Camera Capture
  cameraScanFaceButton: "Escanear Rostro",
  cameraCancelButton: "Cancelar",
  cameraInitializing: "Inicializando Cámara...",
  cameraErrorAccess: "No se pudo acceder a la cámara. Asegúrate de conceder permisos y que la cámara esté conectada.",
  cameraErrorNoCamera: "No se encontró ninguna cámara. Asegúrate de que esté conectada y habilitada.",
  cameraErrorPermission: "Permiso de cámara denegado. Por favor, concede permiso en la configuración de tu navegador.",
  cameraErrorInUse: "La cámara ya está en uso o ocurrió un error de hardware.",
  cameraErrorConstraint: "La cámara no admite la configuración solicitada.",
  cameraErrorCapture: "No se pudo capturar la imagen. La cámara podría no estar activa.",
  cameraErrorGeneric: "Error de cámara: {{message}}",
  cameraCloseButton: "Cerrar",
  // Loading Spinner
  loadingAnalysis: "Analizando tu piel...",
  // Error Message
  errorOops: "¡Oops!",
  errorTryAgainButton: "Intentar de Nuevo",
  errorNoAnalysisData: "No se encontraron datos de análisis.",
  errorUnknown: "Ocurrió un error inesperado.",
  errorApiKeyInvalid: "La clave API no es válida o ha caducado. Por favor, verifica tu configuración.",
  errorJsonParse: "Error al procesar la respuesta del análisis. Detalles: {{message}}",
  errorAnalysisFailed: "El análisis de piel falló. Detalles: {{message}}",
  // Analysis Display
  analysisResultsTitle: "Resultados de tu Análisis de Piel",
  analysisGeneralImpressionDefault: "Aquí tienes un resumen de tu análisis de piel.",
  analysisSectionCharacteristics: "Características de la Piel",
  analysisSectionRoutine: "Rutina Diaria de Cuidado",
  analysisSectionProducts: "Recomendaciones de Productos",
  analysisSectionWellness: "Consejos de Bienestar",
  analysisScanAgainButton: "Escanear de Nuevo",
  analysisReturnHomeButton: "Volver al Inicio",
  analysisDisclaimer: "Descargo de responsabilidad: Este análisis es generado por IA y es solo para fines informativos. Consulta a un dermatólogo para obtener asesoramiento profesional.",
  analysisNoCharacteristics: "No se identificaron características específicas.",
  analysisNoRoutine: "No hay información de rutina disponible.",
  analysisNoProducts: "No hay recomendaciones de productos disponibles en este momento.",
  analysisNoWellnessTips: "No hay consejos de bienestar disponibles actualmente.",
  // Skincare Routine Section
  routineMorning: "Rutina de Mañana",
  routineEvening: "Rutina de Noche",
  routineNoSteps: "No hay pasos definidos para {{time}}.",
  // Chatbot
  chatbotTitle: "ProPiel Asistente",
  chatbotInitialGreeting: "¡Hola! Soy ProPiel Asistente. ¿En qué puedo ayudarte hoy con tu piel? ✨ Sube una foto si quieres que analice algo específico.",
  chatbotTyping: "Escribiendo...",
  chatbotSuggestions: "Sugerencias:",
  chatbotInputPlaceholder: "Escribe tu mensaje o sube una foto...",
  chatbotSendButtonLabel: "Enviar mensaje",
  chatbotMicButtonLabel: "Usar micrófono",
  chatbotStopListeningButtonLabel: "Detener escucha",
  chatbotCloseButtonLabel: "Cerrar chat",
  chatbotAttachImageButtonLabel: "Adjuntar imagen",
  chatbotRemoveImageLabel: "Quitar imagen",
  chatbotErrorGeneral: "Lo siento, no pude procesar tu solicitud en este momento. Por favor, intenta de nuevo. 😕",
  chatbotErrorSpeechNoSound: "No se detectó voz. Intenta de nuevo.",
  chatbotErrorSpeechAudioCapture: "No se pudo capturar audio. Revisa tu micrófono.",
  chatbotErrorSpeechNotAllowed: "Permiso de micrófono denegado.",
  chatbotErrorMicPermission: "Se necesita permiso para el micrófono para usar la entrada de voz.",
  chatbotErrorMicPermissionDenied: "Permiso de micrófono denegado. Habilítalo en la configuración de tu navegador.",
  chatbotErrorMicNotFound: "No se encontró un micrófono. Asegúrate de que esté conectado y habilitado.",
  chatbotErrorUnsupported: "El reconocimiento de voz no es compatible con tu navegador.",
  chatbotErrorFileTypeUnsupported: "Tipo de archivo no admitido. Sube JPG, PNG, WebP o HEIC.",
  chatbotErrorFileSizeExceeded: "Imagen demasiado grande (máx. {{size}}).",
  chatbotErrorFileRead: "No se pudo leer la imagen seleccionada. Intenta con otra.",
  chatbotQuickReply1: "¿Qué producto me recomiendas?",
  chatbotQuickReply2: "Tengo un brote, ¿qué hago?",
  chatbotQuickReply3: "Consejos de hidratación",
  chatbotQuickReply4: "Mejorar textura piel",
  // Gemini Prompts
  geminiSystemInstruction: `Eres "ProPiel Asistente", un amigable y experto asistente virtual especializado en el cuidado de la piel. Tu objetivo es ayudar a los usuarios con sus dudas sobre productos de belleza, rutinas diarias, problemas como brotes de acné, y consejos para hábitos saludables. Comunícate exclusivamente en español. Sé conciso (1-3 frases). Usa emojis ✨😊💧🍎💡.
Si el usuario envía una imagen junto con su pregunta (o solo una imagen), ANALIZA DETALLADAMENTE la imagen y úsala como CONTEXTO PRINCIPAL para tu respuesta. Describe lo que ves en la imagen si es relevante para la pregunta o para dar una recomendación.
Si se da un perfil de piel previo (generalImpression, characteristics), úsalo como contexto adicional, pero prioriza la imagen recién enviada si existe. NO listes el perfil de piel previo textualmente.
No des consejos médicos específicos; sugiere consultar a un dermatólogo para diagnósticos o tratamientos.
Saludo inicial: preséntate. Si el usuario dice "Contexto de mi piel:", usa esa info.`,
  geminiAnalyzeSkinPrompt: `IMPORTANTE: Tu respuesta DEBE ser un único objeto JSON válido. No incluyas ningún texto, comentario o formato markdown (como \`\`\`json ... \`\`\`) fuera del objeto JSON en sí. Adhiérete estrictamente a las reglas de sintaxis JSON.

Analiza la imagen proporcionada de un rostro humano para determinar su condición específica de piel. Basándote *únicamente* en la información visual de esta imagen, genera un análisis de piel personalizado. Todo el contenido textual en el JSON (generalImpression, descriptions, reasons, tips) DEBE estar en español. Devuelve un objeto JSON con la siguiente estructura exacta y estilo de contenido de ejemplo:
{
  "generalImpression": "Ejemplo: La piel parece generalmente clara con ligera oleosidad en la zona T.",
  "characteristics": [
    { "name": "Hydration", "nameKey": "skinCharacteristics.hydration", "score": 75, "description": "Ejemplo: La piel parece adecuadamente hidratada.", "icon": "hydration" },
    { "name": "Oiliness", "nameKey": "skinCharacteristics.oiliness", "score": 60, "description": "Ejemplo: Ligero brillo visible en la frente.", "icon": "oiliness" },
    { "name": "Pores Appearance", "nameKey": "skinCharacteristics.pores", "score": 70, "description": "Ejemplo: Poros mínimamente visibles.", "icon": "pores" },
    { "name": "Redness/Irritation", "nameKey": "skinCharacteristics.redness", "score": 50, "description": "Ejemplo: Leve enrojecimiento alrededor de la nariz.", "icon": "redness" },
    { "name": "Texture/Smoothness", "nameKey": "skinCharacteristics.texture", "score": 80, "description": "Ejemplo: La textura de la piel luce relativamente suave.", "icon": "texture" },
    { "name": "Dark Spots/Pigmentation", "nameKey": "skinCharacteristics.dark_spots", "score": 65, "description": "Ejemplo: Se observan algunas manchas oscuras tenues.", "icon": "dark_spots" }
  ],
  "routine": [
    { "time": "Morning", "step": 1, "description": "Ejemplo: Limpiar con un limpiador facial suave.", "productType": "Limpiador Suave" },
    { "time": "Morning", "step": 2, "description": "Ejemplo: Aplicar un sérum de vitamina C.", "productType": "Sérum Vitamina C" },
    { "time": "Evening", "step": 1, "description": "Ejemplo: Desmaquillar y limpiar a fondo.", "productType": "Desmaquillante/Limpiador" }
  ],
  "products": [
    { "name": "Ejemplo Limpiador Hidratante", "type": "Limpiador", "reason": "Ejemplo: Para limpiar suavemente sin resecar, adecuado para la condición observada." }
  ],
  "wellnessTips": [
    { "category": "Hydration", "categoryKey": "wellnessCategories.hydration", "tip": "Ejemplo: Asegura una ingesta adecuada de agua durante el día.", "icon": "hydration" },
    { "category": "Nutrition", "categoryKey": "wellnessCategories.nutrition", "tip": "Ejemplo: Incorpora alimentos ricos en antioxidantes en tu dieta.", "icon": "nutrition" }
  ]
}
Instrucciones adicionales:
- 'name' para las características debe ser la palabra clave en inglés para el mapeo de iconos. Usa 'nameKey' para el nombre traducible de la característica.
- 'category' para los consejos de bienestar debe ser la palabra clave en inglés para el mapeo de iconos. Usa 'categoryKey' para el nombre traducible de la categoría.
- Todas las puntuaciones DEBEN ser números del 0 al 100. Descripciones, razones, consejos derivados de la imagen.
- Nombres de productos: tipos genéricos.
- Campos 'icon': usa palabras clave: "hydration", "oiliness", "pores", "redness", "texture", "dark_spots", "nutrition", "habit", "general".
- Adapta el número de elementos si es necesario, pero proporciona una rutina completa de mañana/noche, 2-3 productos, 2-3 consejos. Sé conciso.
`,
  skinCharacteristics: {
    hydration: "Hidratación",
    oiliness: "Oleosidad",
    pores: "Apariencia de Poros",
    redness: "Enrojecimiento/Irritación",
    texture: "Textura/Suavidad",
    dark_spots: "Manchas Oscuras/Pigmentación",
  },
  wellnessCategories: {
    hydration: "Hidratación",
    nutrition: "Nutrición",
    habit: "Hábito",
    general: "General",
  },
  // Bottom Navigation
  navHome: "Inicio",
  navScan: "Escanear",
  navAssistant: "Asistente",
  navOptions: "Opciones",
  navCalendar: "Calendario",
  navHistory: "Historial",
  // Options Screen
  optionsTitle: "Configuración",
  themeToggle: "Modo Oscuro/Claro",
  termsAndConditionsTitle: "Términos y Condiciones",
  termsAndConditionsPlaceholder: "Aquí irían los términos y condiciones de la aplicación. Por ahora, este es un marcador de posición.",
  // Calendar Screen
  calendarTitle: "Calendario de Cuidado",
  calendarPlaceholder: "Función de calendario próximamente. Aquí podrás programar recordatorios para tu rutina de cuidado y citas.",
};

const enTranslations: Translations = {
  // Header
  headerTitle: "ProPiel",
  // Language Selector
  language: "Language",
  spanish: "Español",
  english: "English",
  languageSelector: {
    toggleLabel: "Change language"
  },
  // Authentication
  auth: {
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
    email: "Email",
    password: "Password",
    emailPlaceholder: "your@email.com",
    passwordPlaceholder: "Your password",
    signInWithGoogle: "Continue with Google",
    loading: "Loading...",
    or: "or",
    signInSubtitle: "Sign in to access your analysis history",
    signUpSubtitle: "Create an account to save your analysis history",
    alreadyHaveAccount: "Already have an account? Sign in",
    dontHaveAccount: "Don't have an account? Sign up"
  },
  // User Account
  userAccount: "User Account",
  // History
  history: {
    title: "Analysis History",
    noAnalyses: "No saved analyses",
    noAnalysesDescription: "Perform your first skin analysis to see your history here",
    analysis: "Analysis",
    characteristics: "characteristics",
    viewDetails: "View details",
    backToHistory: "Back to history",
    deleteAnalysis: "Delete analysis",
    analysisFromDate: "Analysis from"
  },
  // Splash Screen
  splashTagline: "Discover the best version of your skin.",
  // Idle Screen
  welcomeTo: "Welcome to ProPiel",
  appSlogan: "Get personalized skin analysis and care routines. Start by scanning your face.",
  scanFaceButton: "Scan Face",
  featuredTreatmentsTitle: "Our Featured Treatments",
  // Facial Treatment Card
  viewMoreButton: "View More",
  facialTreatments: {
    microneedlingVitamins: { name: "Microneedling + Vitamins (3 Sessions)" },
    cleansingMicroneedlingVitC: { name: "Facial Cleansing + Microneedling + Vitamin C" },
    lashliftingCleansing: { name: "Lashlifting + Deep Facial Cleansing" },
  },
  // Camera Capture
  cameraScanFaceButton: "Scan Face",
  cameraCancelButton: "Cancel",
  cameraInitializing: "Initializing Camera...",
  cameraErrorAccess: "Could not access camera. Please ensure permissions are granted and a camera is connected.",
  cameraErrorNoCamera: "No camera found. Please ensure a camera is connected and enabled.",
  cameraErrorPermission: "Camera access denied. Please grant camera permission in your browser settings.",
  cameraErrorInUse: "Camera is already in use or a hardware error occurred.",
  cameraErrorConstraint: "The camera does not support the requested settings.",
  cameraErrorCapture: "Could not capture image. Camera might not be active.",
  cameraErrorGeneric: "Camera error: {{message}}",
  cameraCloseButton: "Close",
  // Loading Spinner
  loadingAnalysis: "Analyzing your skin...",
  // Error Message
  errorOops: "Oops!",
  errorTryAgainButton: "Try Again",
  errorNoAnalysisData: "No analysis data found.",
  errorUnknown: "An unexpected error occurred.",
  errorApiKeyInvalid: "The API key is invalid or has expired. Please check your configuration.",
  errorJsonParse: "Error processing the analysis response. Details: {{message}}",
  errorAnalysisFailed: "Skin analysis failed. Details: {{message}}",
  // Analysis Display
  analysisResultsTitle: "Your Skin Analysis Results",
  analysisGeneralImpressionDefault: "Here's a summary of your skin analysis.",
  analysisSectionCharacteristics: "Skin Characteristics",
  analysisSectionRoutine: "Daily Skincare Routine",
  analysisSectionProducts: "Product Recommendations",
  analysisSectionWellness: "Wellness Tips",
  analysisScanAgainButton: "Scan Again",
  analysisReturnHomeButton: "Return to Home",
  analysisDisclaimer: "Disclaimer: This analysis is AI-generated and for informational purposes only. Consult a dermatologist for professional advice.",
  analysisNoCharacteristics: "No specific characteristics identified.",
  analysisNoRoutine: "No routine information available.",
  analysisNoProducts: "No product recommendations available at this time.",
  analysisNoWellnessTips: "No wellness tips available currently.",
  // Skincare Routine Section
  routineMorning: "Morning Routine",
  routineEvening: "Evening Routine",
  routineNoSteps: "No steps defined for {{time}}.",
  // Chatbot
  chatbotTitle: "ProPiel Assistant",
  chatbotInitialGreeting: "Hi! I'm ProPiel Assistant. How can I help you with your skin today? ✨ Upload a photo if you want me to analyze something specific.",
  chatbotTyping: "Typing...",
  chatbotSuggestions: "Suggestions:",
  chatbotInputPlaceholder: "Type your message or upload a photo...",
  chatbotSendButtonLabel: "Send message",
  chatbotMicButtonLabel: "Use microphone",
  chatbotStopListeningButtonLabel: "Stop listening",
  chatbotCloseButtonLabel: "Close chat",
  chatbotAttachImageButtonLabel: "Attach image",
  chatbotRemoveImageLabel: "Remove image",
  chatbotErrorGeneral: "Sorry, I couldn't process your request right now. Please try again. 😕",
  chatbotErrorSpeechNoSound: "No speech detected. Try again.",
  chatbotErrorSpeechAudioCapture: "Could not capture audio. Check your microphone.",
  chatbotErrorSpeechNotAllowed: "Microphone permission denied.",
  chatbotErrorMicPermission: "Microphone permission is needed to use voice input.",
  chatbotErrorMicPermissionDenied: "Microphone permission denied. Enable it in your browser settings.",
  chatbotErrorMicNotFound: "No microphone found. Ensure it's connected and enabled.",
  chatbotErrorUnsupported: "Speech recognition is not supported in your browser.",
  chatbotErrorFileTypeUnsupported: "File type not supported. Please upload JPG, PNG, WebP, or HEIC.",
  chatbotErrorFileSizeExceeded: "Image too large (max {{size}}).",
  chatbotErrorFileRead: "Could not read the selected image. Try another one.",
  chatbotQuickReply1: "Recommend a product?",
  chatbotQuickReply2: "I have a breakout, what to do?",
  chatbotQuickReply3: "Hydration tips",
  chatbotQuickReply4: "Improve skin texture",
  // Gemini Prompts
  geminiSystemInstruction: `You are "ProPiel Assistant", a friendly and expert virtual assistant specializing in skincare. Your goal is to help users with questions about beauty products, daily routines, issues like acne breakouts, and tips for healthy habits. Communicate exclusively in English. Be concise (1-3 sentences). Use emojis ✨😊💧🍎💡.
If the user sends an image along with their question (or just an image), ANALYZE the image IN DETAIL and use it as the PRIMARY CONTEXT for your response. Describe what you see in the image if it's relevant to the question or for giving a recommendation.
If a prior skin profile (generalImpression, characteristics) is available, use it as additional context, but prioritize the newly sent image if one exists. DO NOT list the prior skin profile textually.
Do not give specific medical advice; suggest consulting a dermatologist for diagnoses or treatments.
Initial greeting: introduce yourself. If the user says "My skin context:", use that info.`,
  geminiAnalyzeSkinPrompt: `IMPORTANT: Your response MUST be a single, valid JSON object. Do not include any text, comments, or markdown formatting (like \`\`\`json ... \`\`\`) outside of the JSON object itself. Adhere strictly to JSON syntax rules.

Analyze the provided image of a human face for its specific skin condition. Based *solely* on the visual information in this image, generate a personalized skin analysis. All textual content in the JSON (generalImpression, descriptions, reasons, tips) MUST be in English. Return a JSON object with the exact following structure and example content style:
{
  "generalImpression": "Example: The skin appears generally clear with slight oiliness in the T-zone.",
  "characteristics": [
    { "name": "Hydration", "nameKey": "skinCharacteristics.hydration", "score": 75, "description": "Example: Skin appears adequately hydrated.", "icon": "hydration" },
    { "name": "Oiliness", "nameKey": "skinCharacteristics.oiliness", "score": 60, "description": "Example: Slight shine visible on the forehead.", "icon": "oiliness" },
    { "name": "Pores Appearance", "nameKey": "skinCharacteristics.pores", "score": 70, "description": "Example: Pores are minimally visible.", "icon": "pores" },
    { "name": "Redness/Irritation", "nameKey": "skinCharacteristics.redness", "score": 50, "description": "Example: Minor redness around the nose.", "icon": "redness" },
    { "name": "Texture/Smoothness", "nameKey": "skinCharacteristics.texture", "score": 80, "description": "Example: Skin texture looks relatively smooth.", "icon": "texture" },
    { "name": "Dark Spots/Pigmentation", "nameKey": "skinCharacteristics.dark_spots", "score": 65, "description": "Example: A few faint dark spots observed.", "icon": "dark_spots" }
  ],
  "routine": [
    { "time": "Morning", "step": 1, "description": "Example: Cleanse with a gentle face wash.", "productType": "Gentle Cleanser" },
    { "time": "Morning", "step": 2, "description": "Example: Apply a vitamin C serum.", "productType": "Vitamin C Serum" },
    { "time": "Evening", "step": 1, "description": "Example: Remove makeup and cleanse thoroughly.", "productType": "Makeup Remover/Cleanser" }
  ],
  "products": [
    { "name": "Example Hydrating Cleanser", "type": "Cleanser", "reason": "Example: To gently cleanse without stripping moisture, suitable for observed skin condition." }
  ],
  "wellnessTips": [
    { "category": "Hydration", "categoryKey": "wellnessCategories.hydration", "tip": "Example: Ensure adequate water intake throughout the day.", "icon": "hydration" },
    { "category": "Nutrition", "categoryKey": "wellnessCategories.nutrition", "tip": "Example: Incorporate antioxidant-rich foods into your diet.", "icon": "nutrition" }
  ]
}
Further instructions:
- 'name' for characteristics should be the English keyword for icon mapping. Use 'nameKey' for the translatable characteristic name.
- 'category' for wellness tips should be the English keyword for icon mapping. Use 'categoryKey' for the translatable category name.
- All scores MUST be numbers 0-100. Descriptions, reasons, tips derived from image.
- Product names: generic types.
- 'icon' fields: use keywords: "hydration", "oiliness", "pores", "redness", "texture", "dark_spots", "nutrition", "habit", "general".
- Adapt number of items if needed, but provide full morning/evening routine, 2-3 products, 2-3 tips. Be concise.
`,
  skinCharacteristics: {
    hydration: "Hydration",
    oiliness: "Oiliness",
    pores: "Pores Appearance",
    redness: "Redness/Irritation",
    texture: "Texture/Smoothness",
    dark_spots: "Dark Spots/Pigmentation",
  },
  wellnessCategories: {
    hydration: "Hydration",
    nutrition: "Nutrition",
    habit: "Habit",
    general: "General",
  },
  // Bottom Navigation
  navHome: "Home",
  navScan: "Scan",
  navAssistant: "Assistant",
  navOptions: "Options",
  navCalendar: "Calendar",
  navHistory: "History",
  // Options Screen
  optionsTitle: "Settings",
  themeToggle: "Dark/Light Mode",
  termsAndConditionsTitle: "Terms & Conditions",
  termsAndConditionsPlaceholder: "The terms and conditions for the application would go here. This is a placeholder for now.",
  // Calendar Screen
  calendarTitle: "Skincare Calendar",
  calendarPlaceholder: "Calendar feature coming soon. Here you'll be able to schedule reminders for your skincare routine and appointments.",
};

const messages: { [key in Language]: Translations } = {
  es: esTranslations,
  en: enTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('appLanguage') as Language | null : null;
    return storedLang || 'es';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let currentLevel: string | Translations = messages[language];
    
    for (const k of keys) {
      if (typeof currentLevel === 'object' && currentLevel !== null && k in currentLevel) {
        currentLevel = currentLevel[k];
      } else {
        currentLevel = messages['en'];
        for (const k_fb of keys) {
            if (typeof currentLevel === 'object' && currentLevel !== null && k_fb in currentLevel) {
                currentLevel = currentLevel[k_fb];
            } else {
                return key;
            }
        }
        break; 
      }
    }

    let translation = typeof currentLevel === 'string' ? currentLevel : key;

    if (params && typeof currentLevel === 'string') {
      Object.keys(params).forEach(paramKey => {
        translation = translation.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(params[paramKey]));
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};