import "./ItemDetail.css";
import { productos } from "../../data/data";
import { useState, useEffect } from "react";

export const ItemDetail = () => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(true);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    const respuestaAsincrona = async () => {
      try {
        const respuesta = await getItem();
        setProd(respuesta.find((producto) => producto.id === 1));
        setLoading(false);
        console.log(respuesta);
      } catch (error) {
        console.log("Error al cargar los productos");
      }
    };
    respuestaAsincrona();
  }, []);

  console.log("nuevo array", prod);

  return (
    <>
      {loading ? (
        <p>Cargando Productos</p>
      ) : (
        <div className="cajaDetalle">
          <h2>{prod.title}</h2>
          <div className="imagenDetalle">
            <img src={prod.pictureUrl} alt="" />
          </div>
          <div className= "datos">
          <p>Descripción: {prod.description}</p>
          <p>Código del producto: {prod.id}</p>
          <p> Precio: $ {prod.price}</p>
          </div>
        </div>
      )}
    </>
  );
};
