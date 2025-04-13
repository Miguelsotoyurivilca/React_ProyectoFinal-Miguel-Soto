import React from 'react'
 import Item from './Item'
 
 const ItemList = ({data}) => {
   return (
    
    //  <div className='d-flex justify-content-center align-items-stretch flex-wrap gap-4 py-4 container mx-auto'>
    //      {data.map((producto)=> <Item key={producto.id} producto={producto}/>)}
    //  </div>

    <div className='d-flex justify-content-center align-items-stretch flex-wrap gap-2 py-1 container-fluid px-1 mx-auto'>
  {data.map((producto) => (
    <div className='product-card' style={{minWidth: '380px', flex: '1 1 47%', maxWidth: '600px'}} key={producto.id}>
      <Item producto={producto} />
    </div>
  ))}
</div>
   )
 }
 
 export default ItemList