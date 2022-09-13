import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";
import { Link } from 'react-router-dom'

export const CartContainer = () => {
  const { productCartList, clear, getTotalPrice } = useContext(CartContext);

  return (
    <>{
      productCartList.length > 0 ?
      <>
      {productCartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
        <h2>Precio Total del Carrito: $ {getTotalPrice()}</h2>
        <button onClick={ clear}>Vaciar Carrito</button>
      </>
       : 
       <>
        <h2>No hay productos en el carrito</h2>
       <Link to="/category/"><button>Ir a la tienda</button></Link>
        </>
      }
    </>
  );
};
