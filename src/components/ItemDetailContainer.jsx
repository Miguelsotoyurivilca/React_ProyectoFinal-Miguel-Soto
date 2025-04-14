import React, { useEffect, useState } from 'react'
 import { getOneProduct, getProducts } from '../mock/asyncData'
 import ItemDetail from './ItemDetail'
 import { useParams } from 'react-router-dom'
 import LoaderComponent from './LoaderComponent'
 
 const ItemDetailContainer = () => {
     const [product, setProduct] = useState({})
     const [loading, setLoading] = useState(false)
     const {id} = useParams()
 
     //Usar la misma promesa que itemListContainer
 
     useEffect(()=>{
         setLoading(true)
         getProducts()
         .then((res)=> setProduct(res.find((item)=> item.id === id)))
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false))
     },[])
 
 
 
 
   return (
     <div>
         {loading ? <p>Cargando..</p>:<ItemDetail product={product}/>}
         {loading ? <LoaderComponent/>:<ItemDetail product={product}/>}
     </div>
   )
 }
 
 export default ItemDetailContainer