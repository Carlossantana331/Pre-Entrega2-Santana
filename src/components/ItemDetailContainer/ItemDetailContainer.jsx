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


    <div className='itemDetail'>

        <div>
            <img className="itemDetailImg" src="/img/img-ref.png" alt={item.nombre} />
        </div>
        <div className="itemDetailInfo">
            <h2 className="itemDetailName">{item.nombre}</h2>
            <p className="itemDetailDescription">{item.descripcion}</p>
            <h3 className="itemDetailPrice">${item.precio}</h3>

            <button className="itemDetailBtn" onClick={() => navigate(-1)}>Regresar</button>
        </div>

        
    </div>
  )
}

export default ItemDetailContainer
