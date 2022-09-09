
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { productos } from "../../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer =()=>{
    const [prod, setProd] = useState({});

  const {id} = useParams()
  console.log(id)

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const prodFiltrado = productos.find((producto) => producto.id === parseInt(id))
        console.log("producto filtrado", prodFiltrado)
        resolve(prodFiltrado)
      }, 2000);
    });
  };

  useEffect(() => {
    const respuestaAsincrona = async () => {
      try {
        const respuesta = await getItem(id);
        setProd(respuesta)
        console.log(respuesta);
      } catch (error) {
        console.log("Error al cargar los productos");
      }
    };
    respuestaAsincrona();
  }, [id]);

  console.log("nuevo array", prod);
   
    return(<><ItemDetail prod={prod}/></>)
}