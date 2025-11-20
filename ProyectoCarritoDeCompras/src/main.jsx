// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // HABILITA EL ENRUTAMIENTO EN LA APP
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
            <ProductosProvider>
              <App />
            </ProductosProvider>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)