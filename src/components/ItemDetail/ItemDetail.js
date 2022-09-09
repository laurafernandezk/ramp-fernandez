import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";



export const ItemDetail = ({prod}) => {
  
 
  return (
    <>
     
        <div className="cajaDetalle">
          <h2>{prod.title}</h2>
          <div className="imagenDetalle">
            <img src={prod.pictureUrl} alt="" />
          </div>
          <div className= "datos">
          <p>Descripción: {prod.description}</p>
          <p>Código del producto: {prod.id}</p>
          <p> Precio: $ {prod.price}</p>
          <ItemCount
        initial={1}
        stock={15} 
      />
          </div>
        </div>
      
    </>
  );
};
