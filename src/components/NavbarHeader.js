import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";

export default function NavbarHeader() { 
  return (
    <header id="header" className="header-section">
      <Navbar variant="dark"  className="navbar-header py-3 shadow-lg" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="portfolio-website">
            Annie Wilson
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#about" >About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <DarkModeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
