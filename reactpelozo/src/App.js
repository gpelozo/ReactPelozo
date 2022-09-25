/* eslint-disable default-case */
import './App.css';
import './estilo.css';
import Navbar from "./components/NavBar";
import Colecciones from "./pages/colecciones";
import Contacto from "./pages/contacto";
import Eventos from "./pages/eventos";
import Nosotros from "./pages/nosotros";
import Inicio from "./pages/inicio";
import Carrito from './pages/carrito';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Inicio
      break
    case "/colecciones":
      Component = Colecciones
      break
    case "/contacto":
      Component = Contacto
      break
    case "/eventos":
      Component = Eventos
      break
    case "/nosotros":
      Component = Nosotros
      break
    case "/carrito":
      Component = Carrito
      break
  }
  return (
  <>
    <Navbar/>
    <div className="container">
    <ItemListContainer greeting="Bienvenidos a la tienda argentina de Pokemon TCG!" />
    </div>
  </>
  )
}

export default App;
