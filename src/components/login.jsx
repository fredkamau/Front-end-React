import React, { Component } from "react";
import "../assets/css/login.css";
import mawingu from "../assets/images/mawingu.png";
import validateInput from "./Validation";
import { Link } from "react-router";
import { connect } from "react-redux";
import { LoginAction } from "./LoginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        res => this.context.router.push("/"),
        err =>
          this.setState({
            errors: err.response.data.errors,
            isLoading: false
          })
      );
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
        <Link to={"/dashboard"} className="nav-link">
          {" "}
          Dashboard
        </Link>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h3 className="h3 mb-3 font-weight-normal">Admin Login</h3>
          {errors.form && (
            <div className="alert alert-danger">{errors.form}</div>
          )}
          <img className="mb-4 img-rounded" alt="Mawingu.png" src={mawingu} />
          <label className="sr-only">Email address</label>
          <input
            field="phone"
            type="phone"
            s
            name="phone"
            value={phone}
            id="inputPhone"
            className="form-control mb-2"
            placeholder="Phone"
            onChange={this.onChange}
            error={errors.phone}
          />
          <label className="sr-only">Password</label>
          <input
            field="password"
            type="Password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={this.onChange}
            error={errors.password}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
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
