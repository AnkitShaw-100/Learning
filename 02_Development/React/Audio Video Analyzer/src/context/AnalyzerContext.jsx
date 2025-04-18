import { createContext, useContext } from 'react';
import { analyzeAudio, analyzeVideo } from '../api/analyzerApi';

const AnalyzerContext = createContext();

export function AnalyzerProvider({ children }) {
  const processFile = async (file) => {
    try {
      if (file.type.startsWith('audio/')) {
        return await analyzeAudio(file);
      } else if (file.type.startsWith('video/')) {
        return await analyzeVideo(file);
      }
      throw new Error('Unsupported file type');
    } catch (error) {
      console.error('Processing failed:', error);
      throw error;
    }
  };

  return (
    <AnalyzerContext.Provider value={{ processFile }}>
      {children}
    </AnalyzerContext.Provider>
  );
}

export const useAnalyzer = () => useContext(AnalyzerContext);