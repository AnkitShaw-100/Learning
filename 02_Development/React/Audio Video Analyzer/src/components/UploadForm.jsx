import React, { useState } from 'react';
import { analyzeAudio, analyzeVideo } from '../api/analyzerApi';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setIsLoading(true);
    try {
      let response;
      
      if (file.type.startsWith('audio/')) {
        response = await analyzeAudio(file);
      } else if (file.type.startsWith('video/')) {
        response = await analyzeVideo(file);
      } else {
        throw new Error('Unsupported file type');
      }
      
      setResults(response);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Analysis failed. Please check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="audio/*,video/*"
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <button type="submit" disabled={!file || isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      
      {results && (
        <div className="results">
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UploadForm;