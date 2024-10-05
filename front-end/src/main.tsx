// src/main.tsx

import { NextUIProvider } from '@nextui-org/react'; // Proveedor de NextUI para usar sus componentes en la app
import React from 'react';                         // Importar React para manejar componentes
import ReactDOM from 'react-dom/client';           // Herramienta de renderizado de ReactDOM en React 18
import App from './App';                           // Importar el componente principal de la app
import './index.css';                              // Importar el archivo de estilos globales
import './i18n';                                   // Importar la configuración de i18n para manejo de traducciones
import { PrimeReactProvider } from 'primereact/api'; // Proveedor de PrimeReact para utilizar sus componentes

// Renderizar la app en el elemento con ID 'root', envuelto en modo estricto para alertar sobre posibles problemas
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Proveedor de componentes NextUI */}
    <NextUIProvider>
      {/* Proveedor de componentes PrimeReact */}
      <PrimeReactProvider>
        {/* Componente principal de la app */}
        <App />
      </PrimeReactProvider>
    </NextUIProvider>
  </React.StrictMode>
);
