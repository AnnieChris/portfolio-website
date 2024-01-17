import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';
import annieIcon from '../images/AnnieW.jpg'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container >
        <Navbar.Brand href="/portfolio-website">
          <Image src={annieIcon} alt='annie'/>
          ANNIE ESTHER WILSON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HashLink smooth to="/portfolio-website/#home" className="nav-link"> Home</HashLink>
            <HashLink smooth to="/portfolio-website/#projects" className="nav-link"> Projects</HashLink>
            <HashLink smooth to="/portfolio-website/#skills" className="nav-link"> Skills</HashLink>
            <HashLink smooth to="/portfolio-website/#contact" className="nav-link"> Contact</HashLink>             
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar