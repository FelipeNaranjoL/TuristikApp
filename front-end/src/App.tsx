import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './pages/FormularioSatisfaccion';
import Comprobando from './pages/Comprobando';
import TokenRequerido from './pages/TokenRequerido';
import Header from './components/Header';
import Footer from './components/Footer';
import ExportarDatos from './pages/ExportarDatos';
import FormError from './pages/FormError';

const App: React.FC = () => {
  return (
    <Router basename="/TuristikApp"> {/* Agrega basename para que las rutas sean relativas a /TuristikApp */}
      <Header />
      <Routes>
        <Route path="/formulario-satisfaccion" element={<Formulario />} />
        <Route path=":id" element={<Comprobando />} />
        <Route path="/" element={<TokenRequerido />} /> {/* Modifica la ruta raíz */}
        <Route path="/exportar-datos" element={<ExportarDatos />} />
        <Route path="/error" element={<FormError />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
