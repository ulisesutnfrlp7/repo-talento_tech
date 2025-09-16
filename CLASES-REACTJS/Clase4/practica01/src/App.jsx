import { useState } from 'react'
// import './App.css' // SE SACA YA QUE SE DARÁ ESTILADO CON BOOTSTRAP
import Contador from './components/Contador';
import "bootstrap/dist/css/bootstrap.min.css";
import MostrarTexto from './components/MostrarTexto';
import BotonClick from './eventos/BotonClick';
import CajaMouse from './eventos/CajaMouse';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contador/>
      <hr/>
      <MostrarTexto/>
      <hr/>
      <BotonClick/>
      <hr/>
      <CajaMouse/>
      <hr/>
    </div>
  )
}

export default App;