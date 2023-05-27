import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="/" className="mr-auto ml-4">
          Roberto Baggio
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/directory" className="nav-link" activeClassName="active">
            Directorio
          </NavLink>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Restaurantes
          </NavLink>
          <NavLink to="/search" className="nav-link" activeClassName="active">
            Busqueda
          </NavLink>
          <NavLink to="/new" className="nav-link" activeClassName="active">
            Nuevo
          </NavLink>
        </Nav>
      </Container>
    </Navbar>

  );
}

export default Header;


