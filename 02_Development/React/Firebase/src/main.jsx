import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Firebase setup (make sure this import does NOT include getAnalytics!)
import './firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
