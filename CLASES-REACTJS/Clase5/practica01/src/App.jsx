import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Saludo from './components/Saludo';
import Usuario from './components/Usuario';
import Boton from './components/Boton';
function App() {
  const mostrarAlerta=() => alert('INGRESASTE');
  return (
    <div>
      <h1>
        Ejemplos de Props
      </h1>
      <Saludo nombre="Nicolas"/>
      <Saludo nombre="Julieta"/>
      <Saludo nombre="Luz"/>
      <Usuario nombre="Nicolas" edad={44}/>
      <Usuario nombre="Julieta" edad={45}/>
      <Boton texto="INGRESAR" onclick={mostrarAlerta} />
    </div>
  )
}

export default App;