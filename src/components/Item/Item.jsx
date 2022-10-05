import "./Item.css";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Item = ({ informacion }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="caja">
      <div className="imagen">
        <img src={informacion.pictureUrl} className="img" alt="" />
      </div>
      <p>{informacion.title}</p>
      <p> Precio: $ {informacion.price}</p>
      <Link to={`/item/${informacion.id}`}>
        <button className="button-item">Ver Producto</button>
      </Link>
      {informacion.stock > 0 && (
        <button
          className="button-item"
          onClick={() => {
            addItem(informacion, 1);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      )}
    </div>
  );
};
