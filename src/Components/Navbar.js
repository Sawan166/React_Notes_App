// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <BootstrapNavbar.Brand href="#home">Notes App</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
}

export default Navbar;
