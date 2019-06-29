import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import mawingu from "../assets/images/mawingu.png";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={mawingu} style={{ width: 100, marginTop: -7 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
