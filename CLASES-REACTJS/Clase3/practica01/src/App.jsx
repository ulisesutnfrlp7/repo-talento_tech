// import './App.css' // SE SACA YA QUE SE DARÁ ESTILADO CON BOOTSTRAP
import Header from './components/Header'
import Navigation from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import EquipoTalentoLab from './components/EquipoTalentoLab'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://via.placeholder.com/100' },
  ];
    

  return (
    <div>
      <Header/>
      <Navigation/>
      <Main/>
      <Gallery/>
      <Footer/>
      <EquipoTalentoLab equipo={equipo}/>
    </div>
  )
}

export default App;