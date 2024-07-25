import './ItemListContainer.css';
import productos from '../../items';
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoria } = useParams(); // Extrae la categoría de los parámetros de la URL

  // Si no hay categoría, muestra todos los productos
  const filteredProducts = categoria 
    ? productos.filter(producto => producto.categoria === categoria)
    : productos;

  return (
    <div className='container'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(producto => (
          <Link to={`/item/${producto.id}`} key={producto.id}>
            <div className='card'>
              <h2 className='name'>{producto.nombre}</h2>
              <h3 className='price'>${producto.precio}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>No se encontraron productos para esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
