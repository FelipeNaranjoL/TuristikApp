import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './pages/FormularioSatisfaccion'; // Importa la página del formulario
import Comprobando from './pages/Comprobando'; // Importa la página de comprobación
import Header from './components/Header'; // Asegúrate de tener un Header global
import Footer from './components/Footer'; // Footer opcional

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/formulario-satisfaccion" element={<Formulario />} />
        <Route path=":id" element={<Comprobando />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
