import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa el enrutador y las rutas
import Formulario from './pages/FormularioSatisfaccion'; // Importa la página del formulario de satisfacción
import Comprobando from './pages/Comprobando'; // Importa la página de comprobación
import TokenRequerido from './pages/TokenRequerido';
import Header from './components/Header'; // Importa el componente de cabecera (Header) global
import Footer from './components/Footer'; // Importa el componente de pie de página (Footer) opcional
import ExportarDatos from './pages/ExportarDatos';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Incluye el componente de cabecera en todas las páginas */}
      <Routes>
        {/* Define las rutas: una para el formulario de satisfacción y otra para la comprobación con un parámetro dinámico en la URL */}
        <Route path="/formulario-satisfaccion" element={<Formulario />} />
        <Route path=":id" element={<Comprobando />} />
        <Route path="/" element={<TokenRequerido />} /> {/* Nueva ruta raíz */}
        <Route path="/exportar-datos" element={<ExportarDatos />} />
      </Routes>
      <Footer /> {/* Incluye el pie de página opcional en todas las páginas */}
    </Router>
  );
};

export default App;
