import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {CartWidget} from '../CartWidget/CartWidget'
function NavBar(){
    return(<><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Ramp</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        <Nav.Link href="#productos">Nuestros Productos</Nav.Link>
        <Nav.Link href="#carrito"><CartWidget icon={faCartShopping}></CartWidget></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
    </>

    )
}

export default NavBar;