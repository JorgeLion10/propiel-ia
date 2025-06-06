import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { SkinAnalysisData } from '../types';
import { CalendarIcon, SparklesIcon } from './icons';
import SkinCharacteristicCard from './SkinCharacteristicCard';

interface AnalysisHistoryItem {
  id: string;
  general_impression: string | null;
  characteristics: any;
  routine: any;
  products: any;
  wellness_tips: any;
  photo_url: string | null;
  created_at: string;
}

const HistoryScreen: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [history, setHistory] = useState<AnalysisHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalysisHistoryItem | null>(null);

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user]);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('analysis_history')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setHistory(data || []);
    } catch (err) {
      console.error('Error fetching history:', err);
      setError('Failed to load analysis history');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const deleteAnalysis = async (id: string) => {
    try {
      const { error } = await supabase
        .from('analysis_history')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setHistory(history.filter(item => item.id !== id));
      setSelectedAnalysis(null);
    } catch (err) {
      console.error('Error deleting analysis:', err);
      setError('Failed to delete analysis');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-gray-100 dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (selectedAnalysis) {
    const analysisData: SkinAnalysisData = {
      generalImpression: selectedAnalysis.general_impression || '',
      characteristics: selectedAnalysis.characteristics || [],
      routine: selectedAnalysis.routine || [],
      products: selectedAnalysis.products || [],
      wellnessTips: selectedAnalysis.wellness_tips || []
    };

    return (
      <div className="container mx-auto p-4 space-y-6 max-w-4xl bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-5rem)]">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSelectedAnalysis(null)}
            className="flex items-center space-x-2 text-primary dark:text-[#14e3eb] hover:underline"
          >
            <span>← {t('history.backToHistory')}</span>
          </button>
          <button
            onClick={() => deleteAnalysis(selectedAnalysis.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            {t('history.deleteAnalysis')}
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary dark:text-[#14e3eb] mb-2">
            {t('history.analysisFromDate')}
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            {formatDate(selectedAnalysis.created_at)}
          </p>
          {analysisData.generalImpression && (
            <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
              {analysisData.generalImpression}
            </p>
          )}
        </div>

        {analysisData.characteristics.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {t('analysisSectionCharacteristics')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {analysisData.characteristics.map((char: any, index: number) => (
                <SkinCharacteristicCard key={index} characteristic={char} />
              ))}
            </div>
          </div>
        )}

        {analysisData.routine.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {t('analysisSectionRoutine')}
            </h3>
            <div className="space-y-4">
              {['Morning', 'Evening'].map(time => {
                const steps = analysisData.routine.filter((step: any) => step.time === time);
                if (steps.length === 0) return null;
                
                return (
                  <div key={time}>
                    <h4 className="text-lg font-medium text-primary dark:text-[#14e3eb] mb-2">
                      {time === 'Morning' ? t('routineMorning') : t('routineEvening')}
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {steps.map((step: any, index: number) => (
                        <li key={index} className="ml-4">
                          <span className="font-medium">{step.description}</span>
                          {step.productType && (
                            <span className="text-sm text-primary dark:text-[#14e3eb] ml-1">
                              ({step.productType})
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-5rem)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <CalendarIcon className="w-8 h-8 text-primary dark:text-[#14e3eb]" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {t('history.title')}
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {history.length === 0 ? (
          <div className="text-center py-12">
            <SparklesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
              {t('history.noAnalyses')}
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              {t('history.noAnalysesDescription')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAnalysis(item)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
              >
                {item.photo_url && (
                  <img
                    src={item.photo_url}
                    alt="Analysis photo"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary dark:text-[#14e3eb] font-medium">
                      {t('history.analysis')}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(item.created_at)}
                    </span>
                  </div>
                  {item.general_impression && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {item.general_impression}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.characteristics?.length || 0} {t('history.characteristics')}
                    </span>
                    <span className="text-primary dark:text-[#14e3eb] text-sm font-medium">
                      {t('history.viewDetails')} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryScreen;