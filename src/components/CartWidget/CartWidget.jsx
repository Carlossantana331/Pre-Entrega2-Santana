import { RiShoppingCartLine } from "react-icons/ri";

function CartWidget() {
  return (
    <div className='carrito'>
      <RiShoppingCartLine size="1.8em"/>
      <span className='badge'>2</span>
    </div>
  )
}

export default CartWidget