import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SkinAnalysisData, Language } from '../types';

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "MISSING_API_KEY" });
export const aiInstance = ai;

const MODEL_NAME = 'gemini-2.5-flash-preview-04-17';

// Function to get the correct analyze skin prompt based on language
const getAnalyzeSkinPrompt = (language: Language, t: (key: string, params?: Record<string, string | number>) => string): string => {
  if (language === 'en') {
    return t('geminiAnalyzeSkinPrompt', { lang: 'English' }); // Assuming your en.json has this key
  }
  // Default to Spanish
  return t('geminiAnalyzeSkinPrompt', { lang: 'Spanish' }); // Assuming your es.json has this key
};


export const analyzeSkin = async (
  imageDataBase64: string, 
  language: Language,
  t: (key: string, params?: Record<string, string | number>) => string // Pass t function
): Promise<SkinAnalysisData> => {
  if (!apiKey) {
    throw new Error("Gemini API key is not configured."); // This message should also be translatable if shown to user
  }

  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: imageDataBase64.split(',')[1],
    },
  };

  const dynamicPrompt = getAnalyzeSkinPrompt(language, t);

  const textPart = {
    text: dynamicPrompt,
  };

  try {
    const response: GenerateContentResponse = await aiInstance.models.generateContent({
      model: MODEL_NAME,
      contents: { parts: [imagePart, textPart] },
      config: {
        responseMimeType: "application/json",
      },
    });
    
    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }

    const parsedData: SkinAnalysisData = JSON.parse(jsonStr);
    
    // Potentially map nameKey from parsedData.characteristics if AI provides them
    // Or, if AI provides names directly in the target language, ensure types.ts reflects that
    // For now, assuming AI provides 'name' as English keyword and 'nameKey' as translatable key as per prompt.
    // The descriptions will come in the target language directly from AI.

    return parsedData;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if (error.message.includes("API key not valid")) {
             throw new Error("The API key is invalid. Please check your configuration."); // Translatable
        }
        if (error.message.toLowerCase().includes("json") || error instanceof SyntaxError) { 
            throw new Error(`Failed to parse JSON response from AI: ${error.message}. The AI may have returned an invalid JSON format.`); // Translatable
        }
        throw new Error(`Failed to analyze skin: ${error.message}`); // Translatable
    }
    throw new Error("Failed to analyze skin due to an unknown error."); // Translatable
  }
};