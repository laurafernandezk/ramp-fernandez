import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { baseDatos } from "../../utils/firebase";
import { collection, addDoc, Timestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
export const Order = () => {
  const { productCartList, getTotalPrice } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const orden = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList.map((product) => {
        return {
          id: product.id,
          price: product.price,
          title: product.title,
          quantity: product.quantity,
        };
      }),
      date: Timestamp.now().toDate(),
      total: getTotalPrice(),
    };
 
    const queryRef = collection(baseDatos, "orders");

    addDoc(queryRef, orden).then((response) => setIdOrder(response.id));

     productCartList.forEach(element => {
        updateDoc(doc(baseDatos, "items", element.id), {stock:element.stock-element.quantity})
    })  

  

    alert(`Su número de pedido es: ${idOrder}`);
  };
  return (
    <form onSubmit={sendOrder}>
      <input type="text " placeholder="name"></input>
      <input type="number " placeholder="phone"></input>
      <input type="email " placeholder="email"></input>
      <button type="submit">Comprar</button>
    </form>
  );
};
