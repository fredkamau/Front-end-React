import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import mawingu from "../assets/images/mawingu.png";
import "../assets/css/styles.css";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={mawingu} style={{ width: 80, marginTop: -7 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Customers</Nav.Link>
              <Nav.Link>Tasks</Nav.Link>
              <Nav.Link>Personnel</Nav.Link>
              <NavDropdown title="Fred" id="basic-nav-dropdown" className="navbar-nav navbar-right">
                <NavDropdown.Item href="#action/3.1">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" />
                <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
