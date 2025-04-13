import './App.css'
import ItemListContainer from "./components/ItemListContainer";
import NavBarBootstrap from './components/NavBarBootstrap'
import NavbarComponent from './components/NavbarComponent'
import Contador from './ejemplos/Contador'
 function App() {
  const user = {
   name:'Miguel'
  }
 console.log('Soy App')
   return (
     <>
       {/* <NavbarComponent/> */}
       <NavBarBootstrap/>
       <ItemListContainer greeting='Bienvenidos' pepe={user}/>
       <Contador/>
     </>
   )
 }
 
 export default App