import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // CSS PROPIO. SI SE DEJA, TODO APARECERÁ MEDIO RARO. YA QUE TOMARÁ ESTILOS NO PENSADOS PARA EL PROYECTO.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)