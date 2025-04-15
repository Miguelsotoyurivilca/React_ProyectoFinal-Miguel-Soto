import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    setLoading(true);

    // Firebase
    const productCollection = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : collection(db, 'productos');

    // Pedir los documentos
    getDocs(productCollection)
      .then((res) => {
        // Limpiar datos para uso
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  //SE HACE UNA SOLA VEZ
  // const subirData = () => {
  //   console.log('Hiciste click')
  //   const collectionToAdd = collection(db, "productos")
  //   productos.map((item)=> addDoc(collectionToAdd,item))
  // }

  return (
    <main>
      <h1 className="text-success">
        {greeting}
        {categoryId && (
          <span style={{ textTransform: 'capitalize' }}>{categoryId}</span>
        )}
      </h1>

      {loading ? <LoaderComponent /> : <ItemList data={data} />}
      {/* <button onClick={subirData}>Firebase UNA SOLA VEZ</button> */}
    </main>
  );
};

export default ItemListContainer;