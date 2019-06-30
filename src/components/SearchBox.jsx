import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import '../assets/css/styles.css';
class SearchBox extends Component {
  state = {};
  render() {
    return (
      <Form>
        <span>Search</span>
        <Form.Group controlId="exampleForm.ControlInput1">         
          <Form.Label>Customer Phone</Form.Label>
          <Form.Control type="Phone" placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Task Status</Form.Label>
          <Form.Control as="select">
            <option>--Select Task Status--</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">         
          <Form.Label>Date Assigned</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>
        <Button variant="outline-secondary">Search</Button>
        <Button variant="outline-warning">Close</Button>
      </Form>
    );
  }
}

export default SearchBox;
