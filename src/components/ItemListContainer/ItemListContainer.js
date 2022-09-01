import { ItemCount } from "../ItemCount/ItemCount";
import anillo1 from "../../assets/images/anillo1.jpg";
import anillo2 from "../../assets/images/anillo2.jpg";
import { ItemList } from "../ItemList/ItemList";
import { productos } from "../../data/data";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [prod, setProd] = useState([]);
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  useEffect(() => {
    const funcionAsincrona = async () => {
      try {
        const listadoProductos = await obtenerProductos();
        setProd(listadoProductos);
        console.log(listadoProductos);
      } catch (error) {
        console.log("Error");
      }
    };
    funcionAsincrona();
  }, []);

  return (
    <>
      <ItemCount
        producto="Anillo Mar"
        initial={1}
        stock={15}
        imagen={anillo1}
      />
      <ItemCount
        producto="Anillo Tierra"
        initial={1}
        stock={0}
        imagen={anillo2}
      />
      <ItemCount
        producto="Anillo Mar"
        initial={1}
        stock={15}
        imagen={anillo1}
      />
      <ItemList productos= {prod}/>
    </>
  );
};
