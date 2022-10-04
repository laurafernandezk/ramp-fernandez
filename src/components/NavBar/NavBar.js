import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Ramp from './../../assets/images/Ramp.jpg'

function NavBar() {
  const { productCartList } = useContext(CartContext);

  return (
    <>
      <Navbar bg="white"collapseOnSelect expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand className= "brand"><img src={Ramp} className= "brand-img"/></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-link"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav">
            <NavLink to="/category/" className={({isActive})=>isActive ? "nav-link-active" :"nav-link"} >Nuestros Productos</NavLink>
            <NavLink to="/category/mar" className={({isActive})=>isActive ? "nav-link-active" :"nav-link"}>Colección Mar</NavLink>
            <NavLink to="/category/nudos"className={({isActive})=>isActive ? "nav-link-active" :"nav-link"}>Colección Nudos</NavLink>
            {productCartList.length > 0 && (
              <NavLink to="/cart" className={({isActive})=>isActive ? "nav-link-active" :"nav-link"}>
                <CartWidget icon={faCartShopping}></CartWidget>
              </NavLink>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
