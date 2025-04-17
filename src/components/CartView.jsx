import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const { cart, removeItem, clear, cartTotal } = useCart();
  const preConfirmation = () => {
    Swal.fire({
      title:'¿Esta seguro que quiere borrar todo el carrio?',
      showDenyButton:true,
      denyButtonText:'No',
      confirmButtonText:'Si'
    }).then((result)=>{
      if(result.isConfirmed){
        clear()
      }else if(result.isDenied){

      }
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Tu carrito</h1>

      <div className="space-y-4 mb-2">
        {cart.map((compra) => (
          <div key={compra.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all">
            <div className="flex-1 flex items-center">
              <p className="font-bold text-gray-800 mr-4 flex-grow">{compra.name}</p>
              <p className="bg-gray-200 px-3 py-1 rounded-md text-sm mr-4">Cant: {compra.quantity}</p>
              <p className="font-semibold text-gray-700 mr-4">${compra.price}</p>
              <button 
                className="bg-red-500 hover:bg-red-600 text-red px-3 py-2 rounded transition-colors" 
                onClick={() => removeItem(compra.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}

        {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)}
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <span className="block text-right text-xl font-bold text-gray-800">
            Total a pagar: ${cartTotal()},00
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
        <button 
          className="bg-red-500 hover:bg-red-600 text-red px-4 py-2 rounded transition-colors"
          onClick={preConfirmation}
        >
          Borrar carrito
        </button>
        <Link 
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition-colors"
          to='/'
        >
          Seguir comprando
        </Link>
        <Link 
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition-colors"
          to='/checkout'
        >
          Terminar compra
        </Link>
      </div>
    </div>
  )
}

export default CartView