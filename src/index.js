import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Remove or comment out the serviceWorker line if not used:
// serviceWorker.unregister();
