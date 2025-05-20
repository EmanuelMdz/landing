import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Using App.css for now, can be a global index.css later
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
