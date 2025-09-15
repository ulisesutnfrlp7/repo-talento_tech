import { useState } from 'react'
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import Botones from './components/Botones'
import SaludoPersonalizado from './components/SaludoPersonalizado'
import Productos from './components/Productos'
import Tarjeta from './components/Tarjeta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ListaUsuarios/>
    <Botones/>
    <SaludoPersonalizado/>
    <Productos/>
    <Tarjeta titulo="OFERTA ESPECIAL" descripcion="20% DE DESCUENTO EN PERAS" textoBoton="APRETAME"/>
    </div>
  )
}

export default App