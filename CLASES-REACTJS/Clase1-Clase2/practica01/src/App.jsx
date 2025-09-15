import { useState } from 'react'
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import Botones from './components/Botones'
import SaludoPersonalizado from './components/SaludoPersonalizado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ListaUsuarios/>
    <Botones/>
    <SaludoPersonalizado/>
    </div>
  )
}

export default App