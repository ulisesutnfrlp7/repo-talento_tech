import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigate from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import "bootstrap/dist/css/bootstrap.min.css";

// Routes AGRUPA LAS RUTAS Y SE ASEGURA DE QUE UNA SOLA COINCIDA Y SE RENDERICE

// Route SE USA PARA DEFINIR UNA RUTA ESPECÍFICA Y ASOCIARLA CON UN COMPONENTE
// LA PROPIEDAD path DEFINE LA URL ASOCIADA
// LA PROPIEDAD element REPRESENTA EL COMPONENTE QUE SE VA A RENDERIZAR

function App() {
  return (
    <div>
        <Header/>
        <Navigate/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<Nosotros/>} />
          <Route path="/contact" element={<Contacto/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;