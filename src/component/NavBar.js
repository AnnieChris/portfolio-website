import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import annieIcon from '../images/AnnieW.jpg'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container >
        <Navbar.Brand href="/">
          <Image src={annieIcon} alt='annie' />
          ANNIE ESTHER WILSON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <HashLink smooth to="/#home" className="nav-link"> Home</HashLink>
            <HashLink smooth to="/#projects" className="nav-link"> Projects</HashLink>
            <HashLink smooth to="/#skills" className="nav-link"> Skills</HashLink>
            <HashLink smooth to="/#contact" className="nav-link"> Contact</HashLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar