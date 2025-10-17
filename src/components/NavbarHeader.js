import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

export default function NavbarHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // Smooth scroll
      scroller.scrollTo(id, {
        duration: 600,  // adjust for speed
        smooth: "easeInOutQuad", // smooth animation
        offset: -70, // navbar height
      });

      // Update URL hash without reloading
      window.history.pushState(null, "", `/#${id}`);
    } else {
      // Navigate to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="bg-dark py-4">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="navbar-header">
        <Container>
          <Navbar.Brand onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
            Annie Wilson
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link onClick={() => scrollToSection("about")}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("experience")}>Experience</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
              <DarkModeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
