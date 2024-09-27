import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantillaBase from './pages/PlantillaBase'; // Ruta actualizada

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlantillaBase />} />
      </Routes>
    </Router>
  );
};

export default App;
