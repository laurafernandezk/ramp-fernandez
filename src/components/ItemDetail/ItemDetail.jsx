import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ItemDetail = ({ producto }) => {
  const [eventOnAdd, setEventOnAdd] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (contador) => {
    addItem(producto, contador);
    setEventOnAdd(!eventOnAdd);
  };

  return (
    <Row className="row-item-detail">
      <Col xxs={12} xs={12} md={12} lg={7} xl={7}>
        <img src={producto.pictureUrl} alt="" />
      </Col>
      <Col xxs={12} xs={12} md={12} lg={5} xl={5} className="col-item-detail">
        <h2>{producto.title}</h2>
        {producto.stock > 0 ? (
          <ItemCount
            initial={1}
            stock={producto.stock}
            onAdd={onAdd}
            eventOnAdd={eventOnAdd}
          />
        ) : (
          <p>Producto sin stock disponible</p>
        )}
        <div className="div-item-detail">
          <p> Precio: $ {producto.price}</p>
          <p>{producto.description}</p>
          <p>{producto.information}</p>
        </div>
      </Col>
    </Row>
  );
};
