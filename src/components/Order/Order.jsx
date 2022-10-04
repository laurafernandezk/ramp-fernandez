import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { baseDatos } from "../../utils/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Order.css";

export const Order = () => {
  const { productCartList, getTotalPrice } = useContext(CartContext);
  const [selectOrder, setSelectOrder] = useState("Efectivo");
  const [inputValue, setInputValue] = useState("hola")

  const handleOnchange = (e) => setSelectOrder(e.target.value);

  
  const sendOrder = (e) => {
    e.preventDefault();
    const handleOnchangeInput= (e)=> {console.log("hola")
    }


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

    addDoc(queryRef, orden).then((response) =>
      Swal.fire({
        icon: "success",
        title: `Pedido procesado. Su número de orden es: ${response.id}`,
        showConfirmButton: false,
        timer: 2000,
      })
    );

    productCartList.forEach((element) => {
      updateDoc(doc(baseDatos, "items", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };
  return (
    <>
      <h2 className="h2-order">Datos de contacto</h2>
      <form onSubmit={sendOrder}>
        <input type="text " placeholder="name" className="input-order" onChange={handleOnchangeInput} />
        {selectOrder === "" && <p>no puede estar vacio</p> }
        <input type="number " placeholder="phone" className="input-order" />
        <input type="email " placeholder="email" className="input-order" />
        <label className="input-order">
          {" "}
          Medio de pago:
          <select className="select-order" onChange={handleOnchange}>
            <option>Efectivo</option>
            <option>Tarjeta de Debito</option>
            <option>Tarjeta de Credito</option>
          </select>
        </label>
        {selectOrder === "Efectivo" ? (
          ""
        ) : (
          <>
            <input
              type="text "
              placeholder="Titular de la tarjeta"
              className="input-order"
            />
            <input
              type="number"
              placeholder="Número de la tarjeta"
              className="input-order"
            />
            <input
              type="number "
              placeholder="Código de seguridad"
              className="input-order"
            />
            <input
              type="date"
              placeholder="Fecha de vencimiento"
              className="input-order"
            />
          </>
        )}
        <button type="submit">Finalizar Compra</button>
      </form>
    </>
  );
};
