
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { productos } from "../../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer =()=>{
    const [prod, setProd] = useState({});

  const {itemId} = useParams()
  console.log(itemId)

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
        setProd(respuesta.find((producto) => producto.id == 2))
        console.log(respuesta);
      } catch (error) {
        console.log("Error al cargar los productos");
      }
    };
    respuestaAsincrona();
  }, [itemId]);

  console.log("nuevo array", prod);
   
    return(<><ItemDetail item={prod}/></>)
}