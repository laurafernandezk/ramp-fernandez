import { ItemCount } from "../ItemCount/ItemCount";
import anilloMar from "../../assets/images/anilloMar.jpg";
import anilloOceano from "../../assets/images/anilloOceano.jpg";
import anilloOlas from "../../assets/images/anilloOlas.jpg";
import anilloMarea from "../../assets/images/anilloMarea.jpg";
import anilloGotas from "../../assets/images/anilloGotas.jpg";
import anilloFruto from "../../assets/images/anilloFruto.jpg";
import anilloDelta from "../../assets/images/anilloDelta.jpg";
import anilloAmanecer from "../../assets/images/anilloAmanecer.jpg"
import anilloNudos from "../../assets/images/anilloNudos.jpg"
import { ItemList } from "../ItemList/ItemList";
import { productos } from "../../data/data";
import { useEffect, useState } from "react";
import  { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
  const {categoryId} = useParams();
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
        if(!categoryId){
          setProd(listadoProductos)
        }else{
        const filtroProd = listadoProductos.filter((item)=>item.category === categoryId)
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
      <ItemCount
        producto="Anillo Mar"
        initial={1}
        stock={15}
        imagen={anilloMar}
      />
      <ItemCount
        producto="Anillo Oceano"
        initial={1}
        stock={0}
        imagen={anilloOceano}
      />
      <ItemCount
        producto="Anillo Olas"
        initial={1}
        stock={15}
        imagen={anilloOlas}
      />
      <ItemCount
        producto="Anillo Marea"
        initial={1}
        stock={15}
        imagen={anilloMarea}
      />
      <ItemCount
        producto="Anillo Gotas"
        initial={1}
        stock={15}
        imagen={anilloGotas}
      />
       <ItemCount
        producto="Anillo Fruto"
        initial={1}
        stock={15}
        imagen={anilloFruto}
      />
       <ItemCount
        producto="Anillo Delta"
        initial={1}
        stock={15}
        imagen={anilloDelta}
      />
      <ItemCount
        producto="Anillo Amanecer"
        initial={1}
        stock={15}
        imagen={anilloAmanecer}
      />
      <ItemCount
        producto="Anillo Nudos"
        initial={1}
        stock={15}
        imagen={anilloNudos}
      />

      <ItemList productos= {prod}/>
    </>
  );
};
