import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
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
            <Link to="/sign-up">
              <Button variant="outline-light">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
