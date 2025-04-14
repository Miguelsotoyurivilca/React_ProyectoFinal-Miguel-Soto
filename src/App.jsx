
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBarBootstrap from "./components/NavBarBootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Contador from "./ejemplos/Contador";
// import FetchApi from "./ejemplos/FetchApi";
//
// import WithDataFetch from "./hoc/WithDataFetch";
// import FetchMoc from "./ejemplos/FetchMoc";
// import MouseTracker from "./ejemplos/MouseTracker";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";

function App() {
  //resolver el componente para el HOC
  // const FetchWrapped = WithDataFetch(FetchMoc, "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

  console.log('Soy App');
  return (
    <>
      <BrowserRouter>
        <NavBarBootstrap />
        {/* <MouseTracker render={(mouse)=>(
          <h2>Posición del mouse: X: {mouse.x}, Y: {mouse.y}</h2>
        )}/> */}
        {/* <FetchApi /> */}
        {/* <FetchWrapped /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Seleccionaste la categoría:" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;