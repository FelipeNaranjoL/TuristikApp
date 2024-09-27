import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comprobando from './pages/Comprobando';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:id" element={<Comprobando />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
