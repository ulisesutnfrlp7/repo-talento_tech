import Header from './components/Header';
import Navigate from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header/>
      <Navigate/>
      <Main/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App;