import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar(){
    return(<div>
        
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ramp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Nuestros Productos</Nav.Link>
            <Nav.Link href="#carrito">Carrito de Compras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

    )
}

export default NavBar;