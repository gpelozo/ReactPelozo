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
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // useEffect controlamos el llamado a la API
  // useState guardamos los resultados de la API en un estado
  //MAP de la data JSON que recibimos de la API

  const [pokeList, setPokeList] = useState([])
useEffect(
  ()=> {
  fetch("https://api.pokemontcg.io/v2/cards", {
    headers: {
      "X-Api-Key": "b394c2d8-a118-4470-a00c-9a9b729c28db"
    }
  }).then((respuesta)=>{
    return respuesta.json();
  }).then((jsonData) => {
    setPokeList(jsonData.results);
    console.log(jsonData.results);
  })
  }, []
)

  return (
  <>
    <Navbar/>
    <div className="container">
      <Routes>
      <Route path="/" element={<Inicio/>} />
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/colecciones" element={<Colecciones/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    <ItemListContainer greeting="Bienvenidos a la tienda argentina de Pokemon TCG!" />
    </div>
    <div className="App">
      <h1>Lista</h1>
      <div className="pokegallery">
      {
          pokeList.map( (pokemon) => {
            return <div className="card">
              <img src="/img.png" alt="pokemon" />
              <div >
                <h5>{pokemon.name}</h5>
                <a href={pokemon.url}> Ver Detalles</a>
              </div>
            </div>

          })
        }
      </div>
    </div>
  </>
  )
}

export default App;
