import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="navigation-link" to="/">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="navigation-link" to="/services">
              Services
            </Link>

            <Link className="navigation-link" to="/products">
              Products
            </Link>
          </Nav>
          <Nav>
            <Link to="/signup">
              <Button variant="outline-light">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
