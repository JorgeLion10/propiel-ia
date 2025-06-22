import { supabase } from '../lib/supabase';
import { SkinAnalysisData } from '../types';

export const saveAnalysisToHistory = async (
  userId: string,
  analysisData: SkinAnalysisData,
  photoUrl?: string
): Promise<{ error: Error | null }> => {
  try {
    console.log('Saving analysis to history for user:', userId);
    console.log('Analysis data:', analysisData);
    console.log('Photo URL:', photoUrl);

    const { data, error } = await supabase
      .from('analysis_history')
      .insert({
        user_id: userId,
        general_impression: analysisData.generalImpression,
        characteristics: analysisData.characteristics,
        routine: analysisData.routine,
        products: analysisData.products,
        wellness_tips: analysisData.wellnessTips,
        photo_url: photoUrl,
      })
      .select();

    if (error) {
      console.error('Supabase error saving analysis:', error);
      throw error;
    }

    console.log('Analysis saved successfully:', data);
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
    console.log('Uploading photo for user:', userId);
    
    // Convert data URL to blob
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();
    
    // Create unique filename
    const fileName = `${userId}/${Date.now()}.jpg`;
    
    console.log('Uploading file:', fileName);
    
    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('analysis-photos')
      .upload(fileName, blob, {
        contentType: 'image/jpeg',
        upsert: false
      });

    if (error) {
      console.error('Storage upload error:', error);
      throw error;
    }

    console.log('Photo uploaded successfully:', data);

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('analysis-photos')
      .getPublicUrl(data.path);

    console.log('Public URL:', publicUrl);

    return { photoUrl: publicUrl, error: null };
  } catch (err) {
    console.error('Error uploading analysis photo:', err);
    return { photoUrl: null, error: err as Error };
  }
};