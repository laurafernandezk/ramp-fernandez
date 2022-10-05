import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd, eventOnAdd }) => {
  const [contador, setContador] = useState(initial);

  const addCount = () => {
    contador < stock && setContador(contador + 1);
  };

  const subCount = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <div className="div-item-count">
      {
        <>
          <button onClick={addCount} className="btn-item-count">
            +
          </button>
          <span> {contador} </span>
          <button onClick={subCount} className="btn-item-count">
            -
          </button>
          <br />
          <button
            onClick={() => {
              onAdd(contador);
            }}
            className="btn-item-count"
          >
            Agregar al carrito
          </button>
        </>
      }
      <>
        <p>Stock disponible: {stock}</p>
        {eventOnAdd && (
          <Link to="/cart">
            <button className="btn-item-count">Finalizar Compra</button>
          </Link>
        )}
      </>
    </div>
  );
};
