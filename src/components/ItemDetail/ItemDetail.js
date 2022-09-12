import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { productos } from "../../data/data";

export const ItemDetail = ({ prod }) => {
  const [eventOnAdd, setEventOnAdd] = useState(true);
  
  const{addItem}=useContext(CartContext)
  
  
  const onAdd = (contador) => {
   addItem(prod,contador)
    setEventOnAdd(!eventOnAdd)
   }  
  
  return (
    <>
      <div className="cajaDetalle">
        <h2>{prod.title}</h2>
        <div className="imagenDetalle">
          <img src={prod.pictureUrl} alt="" />
        </div>
        <div className="datos">
          <p>Descripción: {prod.description}</p>
          <p>Código del producto: {prod.id}</p>
          <p> Precio: $ {prod.price}</p>

          <ItemCount
            initial={1}
            stock={prod.stock}
            onAdd={onAdd}
            eventOnAdd={eventOnAdd}
          />
        </div>
      </div>
    </>
  );
};
