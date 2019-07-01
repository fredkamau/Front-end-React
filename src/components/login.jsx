import React, { Component } from "react";
import "../assets/css/login.css";
import mawingu from "../assets/images/mawingu.png";
import validateInput from "./Validation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onChange.bind(this);
  }
  isValid() {}

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      //dispath action to server
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    //reconstruct variables from state
    const { errors, phone, password, isLoading } = this.state;
    return (
      <div className="center-login">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h3 className="h3 mb-3 font-weight-normal">Admin Login</h3>
          <img className="mb-4 img-rounded" alt="Mawingu.png" src={mawingu} />
          <label className="sr-only">Email address</label>
          <input
            type="phone"
            name="phone"
            value={phone}
            id="inputPhone"
            className="form-control mb-2"
            placeholder="Phone"
            onChange={this.onChange}
            errors={errors.phone}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={this.onChange}
            errors={errors.password}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={isLoading}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
