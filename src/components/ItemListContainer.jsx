import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getProducts } from '../mock/asyncData';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting, pepe }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(pepe);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setData(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <main>
        <h1 className="text-success">{greeting}</h1>
        <Button variant="dark">Hola</Button>
        {loading ? <p>Cargando...</p> : <ItemList data={data} />}
      </main>
    </div>
  );
};

export default ItemListContainer;