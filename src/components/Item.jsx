import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  // Verificar que producto existe para evitar errores
  if (!producto) {
    return null;
  }

  return (
    <div className='card' style={{width:'10rem', marginTop:15}}>
        <img className='card-img-top' src={producto.image || producto.img} alt={producto.name || producto.title}/>
        <div className='card-body'>
            <h5 className='card-title'>{producto.name || producto.title}</h5>
            <p className='card-text'>${producto.price},00</p>
            <Link className='btn btn-dark' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
};

export default Item;