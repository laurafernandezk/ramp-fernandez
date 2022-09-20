import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({ producto }) => {
  const [eventOnAdd, setEventOnAdd] = useState(false);
  
  const{addItem}=useContext(CartContext)
  
  
  const onAdd = (contador) => {
   addItem(producto,contador)
    setEventOnAdd(!eventOnAdd)
   }  
  
  return (
    <>
      <div className="cajaDetalle">
        <h2>{producto.title}</h2>
        <div className="imagenDetalle">
          <img src={producto.pictureUrl} alt="" />
        </div>
        <div className="datos">
          <p>Descripción: {producto.description}</p>
          <p>Código del producto: {producto.id}</p>
          <p> Precio: $ {producto.price}</p>

          <ItemCount
            initial={1}
            stock={producto.stock}
            onAdd={onAdd}
            eventOnAdd={eventOnAdd}
          />
        </div>
      </div>
    </>
  );
};
