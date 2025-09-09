import { useState } from 'react'
// import './App.css' // SE SACA YA QUE SE DARÁ ESTILADO CON BOOTSTRAP
import Header from './components/Header'
import Navigation from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Navigation/>
      <Main/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App;