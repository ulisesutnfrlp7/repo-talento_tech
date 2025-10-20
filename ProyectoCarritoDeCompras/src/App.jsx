// src/App.jsx

import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Navigate from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ProductDetail from './pages/ProductDetail';
import RutaProtegida from './components/RutaProtegida';
import Login from './pages/Login';

// Routes AGRUPA LAS RUTAS Y SE ASEGURA DE QUE UNA SOLA COINCIDA Y SE RENDERICE

// Route SE USA PARA DEFINIR UNA RUTA ESPECÍFICA Y ASOCIARLA CON UN COMPONENTE
// LA PROPIEDAD path DEFINE LA URL ASOCIADA
// LA PROPIEDAD element REPRESENTA EL COMPONENTE QUE SE VA A RENDERIZAR

function App() {
  return (
    <div>
      <Header/>
      <Navigate/>
      <div className="page-container">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route 
            path="/" 
            element={
              <RutaProtegida>
                <Main/>
              </RutaProtegida>
            }
          />
          <Route path="/about" element={<Nosotros/>} />
          <Route path="/contact" element={<Contacto/>} />
          <Route 
            path="/productos/:id" 
            element={
              <RutaProtegida>
                <ProductDetail/>
              </RutaProtegida>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;