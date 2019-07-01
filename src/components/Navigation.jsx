import React, { Component } from "react";
import { Link } from "react-router";
import { Nav, Navbar, Form } from "react-bootstrap";
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
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Nav.Link>Log Out</Nav.Link>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
