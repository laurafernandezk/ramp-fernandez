import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";
import { Link } from 'react-router-dom'
import { Order } from '../Order/Order'
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"



export const CartContainer = () => {
  const { productCartList, clear, getTotalPrice } = useContext(CartContext);

  return (
    <Container fluid>
      <Row className="row-cart-container">
        {
      productCartList.length > 0 ?
      <>
      <Col xxs={12} xs={12} md={12} lg={7} xl={7}>
      {productCartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
        <h2>Precio Total: $ {getTotalPrice()}</h2>
        <button onClick={clear}>Vaciar Carrito</button>
        </Col>
        <Col xxs={12} xs={12} md={12} lg={5} xl={5}>
        <Order/>
        </Col>
      </>
       : 
       <>
        <h2>No hay productos en el carrito</h2>
       <Link to="/category/"><button>Ir a la tienda</button></Link>
        </>
      }
      </Row>
    </Container>
  );
};
