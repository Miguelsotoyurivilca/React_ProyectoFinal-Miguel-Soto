import Button from 'react-bootstrap/Button'
const ItemListContainer = (props) => {
const {greeting}= props
  console.log(props)
    // console.log(pepe)
     return(
         <div>
             <h1>{greeting}</h1>
             <h1 className='text-success'>{greeting}</h1>
             <Button variant='dark'>Hola</Button>
         </div>
     )
 }
 export default ItemListContainer;