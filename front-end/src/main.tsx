// src/main.tsx
import { NextUIProvider } from '@nextui-org/react';               // Importar NextUI
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n'; // Importar i18n si lo tienes
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </NextUIProvider>
  </React.StrictMode>
);
