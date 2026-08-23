import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Injeta o nosso componente mestre App direto na raiz do HTML do navegador
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
