import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './CartItem.css'
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CartItem =({item})=>{

const {removeItem} = useContext(CartContext)

    return(
    <Container className="cart-item">
        <Row>
          <Col xxs={12} xs={12} md={12} lg={12} xl={12} className="cart-btn">
          <h3>{item.title}</h3>
          </Col>
        </Row>
        <Row>
        <Col  xxs={12} xs={12} md={7} lg={7} xl={7}>
          <img className="cart-img"src={item.pictureUrl} alt="" />
        </Col>
        <Col className="cart-description" xxs={12} xs={12} md={5} lg={5} xl={5}>
        <p>Precio Unitartio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio Total: ${item.totalPrice}</p>
        </Col>
        </Row>
        <Row>
          <Col xxs={12} xs={12} md={12} lg={12} xl={12} className="cart-btn">
          <button onClick={() => removeItem(item.id)}> Eliminar Producto </button>
          </Col>
        </Row>
    </Container>)
}