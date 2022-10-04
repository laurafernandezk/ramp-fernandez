import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDatos } from "../../utils/firebase";
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        //referencia a dónde se consulta en la base de datos
        let queryRef = !categoryId
          ? collection(baseDatos, "items")
          : query(
              collection(baseDatos, "items"),
              where("category", "==", categoryId)
            );
        //llamado final a la base de datos que retorna una promesa
        const response = await getDocs(queryRef);
        //se accede a la propiedad de la promesa que tiene guardados los docs
        const docs = response.docs;
        //se itera en el array y se crean nuevos objetos formado por la info (docs.data()) y el id (docs.id) que vienen por separado
        const data = docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setListadoProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [categoryId]);
  console.log("listado productos", listadoProductos);
  return (
   
     <Container  className="contenedor fluid">
      <ItemList productos={listadoProductos} />
      </Container>
  );
};
