import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcons from "./CartWidgetIcons";
import { NavLink } from "react-router-dom";

function NavBarBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./logo.png" alt="logo" style={{width:'8rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item> */}
              <NavDropdown.Item as={NavLink} to="/category/nuevos">
                Nuevos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/mas vendidos">
                Más Vendidos
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item> */}
              <NavDropdown.Item as={NavLink} to="/category/ofertas">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;