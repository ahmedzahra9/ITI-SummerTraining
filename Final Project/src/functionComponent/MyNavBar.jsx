import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavBar() {
  return (
    <Navbar bg="dark" text="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="nav-link text-info" to="/home">
          <h3>ZAHRA SHOPPING</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link text-info" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link text-info" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link text-info" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link text-info" to="/contactus">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
