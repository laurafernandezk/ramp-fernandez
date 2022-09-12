import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './CartItem.css'
export const CartItem =({item})=>{

const {removeItem} = useContext(CartContext)

    return(<div className="cart-item">
        <h3>{item.title}</h3>
        <div className="cart-img"><img src={item.pictureUrl} alt="" /></div>
        <div className="cart-description">
        <p>Cantidad: {item.quantity}</p>
        <p>$ {item.price}</p>
        </div>
        <div className="cart-btn">
          <button onClick={() => removeItem(item.id)}> Eliminar Producto </button>
          </div>
      </div>)
}