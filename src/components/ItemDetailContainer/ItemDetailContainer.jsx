import productos from "../../items"
import { useParams, useNavigate } from "react-router-dom"

function ItemDetailContainer() {

    const navigate = useNavigate()

    const {id} = useParams()
    const item = productos.find(item => item.id === parseInt(id));

    if(!item) {
        return <h2>Item no encontrado</h2>
    }


  return (


    <div>
        <div className='card'>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
        </div>

        <button onClick={() => navigate(-1)}>Regresar</button> {/* Botón para regresar */}
    </div>
  )
}

export default ItemDetailContainer
