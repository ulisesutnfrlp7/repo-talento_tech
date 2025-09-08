import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import Botones from './components/Botones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ListaUsuarios/>
    <Botones/>
    </div>
  )
}

export default App