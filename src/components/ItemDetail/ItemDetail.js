import "./ItemDetail.css";



export const ItemDetail = ({item}) => {
  
 
  return (
    <>
     
        <div className="cajaDetalle">
          <h2>{item.title}</h2>
          <div className="imagenDetalle">
            <img src={item.pictureUrl} alt="" />
          </div>
          <div className= "datos">
          <p>Descripción: {item.description}</p>
          <p>Código del producto: {item.id}</p>
          <p> Precio: $ {item.price}</p>
          </div>
        </div>
      
    </>
  );
};
