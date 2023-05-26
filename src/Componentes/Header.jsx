import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/directory" className="nav-link" activeClassName="active">
            Directorio
          </NavLink>
          <NavLink to="/home" className="nav-link" activeClassName="active">
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


