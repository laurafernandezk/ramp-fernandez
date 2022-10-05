import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseDatos } from "../../utils/firebase";
import { Container } from "react-bootstrap";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const queryRef = doc(baseDatos, "items", id);
        const response = await getDoc(queryRef);

        const data = { ...response.data(), id: response.id };

        setProducto(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  
  return (
    <Container className="fluid container-detail">
      <ItemDetail producto={producto} />
    </Container>
  );
};
