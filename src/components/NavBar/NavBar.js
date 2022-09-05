import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {CartWidget} from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar(){
    return(<><Navbar bg="dark" variant="dark">
    <Container>
      <Link to ='/'><Navbar.Brand>Ramp</Navbar.Brand></Link>
      <Nav className="me-auto">
       <Link to='/category/:categoryId'><Nav.Link href="productos">Nuestros Productos</Nav.Link></Link>
       <Link to='/category/:categoryId'><Nav.Link href="coleccionMar">Colección Mar</Nav.Link></Link>
       <Link to='/category/:categoryId'><Nav.Link href="collecionNudos">Colección Nudos</Nav.Link></Link>
       <Link to='/'><Nav.Link href="carrito"><CartWidget icon={faCartShopping}></CartWidget></Nav.Link></Link>
      </Nav>
    </Container>
  </Navbar>
  
    </>

    )
}

export default NavBar;