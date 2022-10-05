import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDatos } from "../../utils/firebase";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = !categoryId
          ? collection(baseDatos, "items")
          : query(
              collection(baseDatos, "items"),
              where("category", "==", categoryId)
            );
        const response = await getDocs(queryRef);
        const docs = response.docs;
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
  return (
    <Container className="contenedor fluid">
      <ItemList productos={listadoProductos} />
    </Container>
  );
};
