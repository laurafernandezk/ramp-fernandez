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
       <Link to='/category/'>Nuestros Productos</Link>
       <Link to='/category/mar'>Colección Mar</Link>
       <Link to='/category/nudos'>Colección Nudos</Link>
       <Link to='/cart'><CartWidget icon={faCartShopping}></CartWidget></Link>
      </Nav>
    </Container>
  </Navbar>
  
    </>

    )
}

export default NavBar;