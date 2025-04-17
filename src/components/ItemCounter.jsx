import React, { useState } from 'react';

const ItemCounter = ({stock, onAdd}) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if(count < stock){
      setCount(count + 1)
    }
  }

  const subtract = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const addToCart = () => {
    onAdd(count)
  }

  return (
    <div>
      <div>
        <button className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded" onClick={subtract}>-</button>
        <span className="mx-4">{count}</span>
        <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded" onClick={add}>+</button>
      </div>
      <div>
        {/* función anotada */}
        {/* <button className="btn btn-primary" disabled={stock === 0 || count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button> */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={stock === 0 || count === 0} onClick={addToCart}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCounter