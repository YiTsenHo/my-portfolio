import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar glass-effect"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img 
            src="/images/site_logo.gif" 
            alt="Site Logo" 
            className="site-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/" className="nav-item">
              作品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-item">
              關於我
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
