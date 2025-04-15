export const productos = [
   
    {
        
        name:'Cafe 2',
        price:30,
        description: 'cafe tipo 2',
        stock:50,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
        
        name:'Cafe 3',
        price:25,
        description: 'cafe tipo 3',
        stock:20,
        category:'mas vendidos',
        img:'https://picsum.photos/206'
    },
    {
       
        name:'Cafe 4',
        price:20,
        description: 'cafe tipo 4',
        stock:30,
        category:'ofertas',
        img:'https://picsum.photos/204'
    }
]

//creo y exporto mi promesa

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    })
}

//buscar un producto

export const getOneProduct = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            let product = productos.find(prod => prod.id === id)
            resolve(product)
        },2000)
    })
}