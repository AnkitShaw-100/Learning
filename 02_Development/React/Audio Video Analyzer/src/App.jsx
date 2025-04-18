import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
      setVideoFile(null); 
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setAudioFile(null); 
    }
  };

  const handleSubmit = async () => {
    if (!audioFile && !videoFile) {
      setMessage('Please select a file first');
      return;
    }

    try {
      setIsLoading(true);
      setMessage('Processing...');
      setAnalysisResults(null);

      const formData = new FormData();
      let endpoint = '';
      
      if (audioFile) {
        formData.append('file', audioFile);
        endpoint = 'analyze/audio';
      } else {
        formData.append('file', videoFile);
        endpoint = 'analyze/video';
      }

      const response = await axios.post(
        `http://localhost:5000/${endpoint}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          timeout: 30000 
        }
      );

      setAnalysisResults(response.data.results);
      setMessage('Analysis complete!');
    } catch (error) {
      let errorMessage = 'Analysis failed';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out';
      } else if (error.response) {
        errorMessage = error.response.data?.detail || 
                      error.response.statusText;
      } else if (error.request) {
        errorMessage = 'Backend server not responding. Is it running?';
      } else {
        errorMessage = error.message;
      }
      
      setMessage(`Error: ${errorMessage}`);
      console.error('Full error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setAudioFile(null);
    setVideoFile(null);
    setMessage('');
    setAnalysisResults(null);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Header */}
        <div className="bg-blue-600 p-6 text-white">
          <motion.h1 
            className="text-3xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Media Analysis Tool
          </motion.h1>
          <motion.p 
            className="text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Upload audio or video for detailed analysis
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* File Selection */}
          <div className="space-y-6">
            {/* Audio Upload */}
            <motion.div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
              whileHover={{ scale: 1.01 }}
              onClick={() => document.getElementById('audio-upload').click()}
            >
              <input 
                type="file" 
                id="audio-upload" 
                accept="audio/*" 
                onChange={handleAudioUpload} 
                className="hidden" 
              />
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                {audioFile ? audioFile.name : 'Click to upload audio (MP3, WAV)'}
              </p>
            </motion.div>

            {/* Video Upload */}
            <motion.div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
              whileHover={{ scale: 1.01 }}
              onClick={() => document.getElementById('video-upload').click()}
            >
              <input 
                type="file" 
                id="video-upload" 
                accept="video/*" 
                onChange={handleVideoUpload} 
                className="hidden" 
              />
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                {videoFile ? videoFile.name : 'Click to upload video (MP4, MOV)'}
              </p>
            </motion.div>
          </div>

          {/* Status Message */}
          {message && (
            <motion.div 
              className={`mt-4 p-3 rounded-md ${
                message.startsWith('Error') ? 'bg-red-100 text-red-700' : 
                message === 'Processing...' ? 'bg-blue-100 text-blue-700' : 
                'bg-green-100 text-green-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {message}
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <motion.button
              onClick={resetForm}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reset
            </motion.button>
            
            <motion.button
              onClick={handleSubmit}
              disabled={isLoading || (!audioFile && !videoFile)}
              className={`px-6 py-2 rounded-md text-white ${
                isLoading || (!audioFile && !videoFile) ? 
                'bg-blue-400 cursor-not-allowed' : 
                'bg-blue-600 hover:bg-blue-700'
              } transition`}
              whileHover={(!isLoading && (audioFile || videoFile)) ? { scale: 1.02 } : {}}
              whileTap={(!isLoading && (audioFile || videoFile)) ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Analyze'
              )}
            </motion.button>
          </div>

          {/* Results Display */}
          {analysisResults && (
            <motion.div 
              className="mt-6 p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold mb-3">Analysis Results</h3>
              <pre className="bg-white p-3 rounded-md overflow-x-auto text-sm">
                {JSON.stringify(analysisResults, null, 2)}
              </pre>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;