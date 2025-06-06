import { supabase } from '../lib/supabase';
import { SkinAnalysisData } from '../types';

export const saveAnalysisToHistory = async (
  userId: string,
  analysisData: SkinAnalysisData,
  photoUrl?: string
): Promise<{ error: Error | null }> => {
  try {
    const { error } = await supabase
      .from('analysis_history')
      .insert({
        user_id: userId,
        general_impression: analysisData.generalImpression,
        characteristics: analysisData.characteristics,
        routine: analysisData.routine,
        products: analysisData.products,
        wellness_tips: analysisData.wellnessTips,
        photo_url: photoUrl,
      });

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (err) {
    console.error('Error saving analysis to history:', err);
    return { error: err as Error };
  }
};

export const uploadAnalysisPhoto = async (
  userId: string,
  imageDataUrl: string
): Promise<{ photoUrl: string | null; error: Error | null }> => {
  try {
    // Convert data URL to blob
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();
    
    // Create unique filename
    const fileName = `${userId}/${Date.now()}.jpg`;
    
    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('analysis-photos')
      .upload(fileName, blob, {
        contentType: 'image/jpeg',
        upsert: false
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('analysis-photos')
      .getPublicUrl(data.path);

    return { photoUrl: publicUrl, error: null };
  } catch (err) {
    console.error('Error uploading analysis photo:', err);
    return { photoUrl: null, error: err as Error };
  }
};