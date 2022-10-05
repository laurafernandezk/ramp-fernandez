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

  const [userForm, setUserForm] = useState({
    name: "",
    phone: "",
    email: "",
    select: "Efectivo",
  });

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const validate = (name, phone, email) => {
    if ((name || "invalid") === "invalid" || name.length < 4)
      return "El campo Name es incorrecto";
    if ((phone || "invalid") === "invalid" || isNaN(phone) || phone.length < 7)
      return "El campo Phone es incorrecto";
    if (
      (email || "invalid") === "invalid" ||
      !email.includes("@") ||
      email.lenght < 6
    )
      return "El campo Email es incorrecto";
  };

  const errorMessage = validate(userForm.name, userForm.phone, userForm.email);

  const inputArray = [
    {
      type: "text",
      name: "name",
    },
    { type: "number", name: "phone" },
    { type: "email", name: "email" },
  ];
  const sendOrder = (e) => {
    e.preventDefault();
    validate(userForm.name, userForm.phone, userForm.email);
    const orden = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
        pago: userForm.select,
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
        {inputArray.map((input) => (
          <input
            key={input.name}
            type={input.type}
            placeholder={input.name}
            name={input.name}
            className="input-order"
            onChange={handleChange}
          />
        ))}
        <label className="input-order">
          Medio de pago:
          <select
            name="select"
            className="select-order"
            onChange={handleChange}
          >
            <option>Efectivo al retirar</option>
            <option>Transferencia Bancaria</option>
          </select>
        </label>
        {userForm.select === "Efectivo" ? (
          ""
        ) : (
          <div className="div-order">
            <p>Datos bancarios</p>
            <p>Titular de Cuenta: Mónica Guzman</p>
            <p>Banco Macro</p>
            <p>Número de cuenta: 26568133692</p>
            <p>CBU: 25486565689462333 </p>
          </div>
        )}
        <p className="p-order">{errorMessage}</p>
        <button type="submit" disabled={errorMessage}>
          Finalizar Compra
        </button>
      </form>
    </>
  );
};
