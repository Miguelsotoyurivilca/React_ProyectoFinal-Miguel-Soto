import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    // const {greeting}= props
    // console.log(props)
    // let error = false
    // let promiseExample = new Promise ((resolve, reject)=>{
    //    setTimeout(()=>{
    //     if(error){
    //         reject('No hay stock')
    //     }else{
    //         resolve('Hay Pizza')
    //     }
    //    }, 3000)
    // })
    
    // console.log(promiseExample)
//    useEffect(()=>{
//     setLoading(true)
//     promiseExample
//     .then((res)=>{
//         console.log(res, 'res')
//          setData(res)})
//          .finally(()=> setLoading(false))
//    },[])

    const {categoryId} = useParams()
//Promesa de productos

console.log(categoryId)
useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((res)=> {
        if(categoryId){
            //filtrar
            setData(res.filter((item)=> item.category === categoryId))
        }else{
            setData(res)
        }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}, [categoryId]);


//Ejemplo try catch
// useEffect(()=>{
//     const getData = async() => {
//         try{
//             setLoading(true)
//             const res = await getProducts()
//             setData(res)
//         }catch(error){
//             console.log(error)
//         }finally{
//             setLoading(false)
//         }
//     }
//     getData()
// },[])

    return(
        <main>
            {/* <h1 className='text-success'>{greeting}</h1> */}
            <h1 className='text-success'>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            {/* {data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            {loading ? <p>Cargando...</p> : <ItemList data={data}/>}
        </main>
    );
};

export default ItemListContainer;