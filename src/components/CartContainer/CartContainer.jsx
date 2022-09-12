import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";

export const CartContainer = () => {
  const { productCartList, removeItem, clear } = useContext(CartContext);

  return (
    <>
     
      {productCartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
       {productCartList.length > 0 ? (
        <button onClick={ clear}>Vaciar Carrito</button>
      ) : (
        <h2>No hay productos en el carrito</h2>
      )}
    </>
  );
};
