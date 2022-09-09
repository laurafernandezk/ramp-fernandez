import { ItemList } from "../ItemList/ItemList";
import { productos } from "../../data/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
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
        if (!categoryId) {
          setProd(listadoProductos);
        } else {
          const filtroProd = listadoProductos.filter(
            (item) => item.category === categoryId
          );
          setProd(filtroProd);
          console.log(filtroProd);
        }
      } catch (error) {
        console.log("Error");
      }
    };
    funcionAsincrona();
  }, [categoryId]);

  return (
    <>
      <ItemList productos={prod} />
    </>
  );
};
