import React, { Component } from "react";
import "../assets/css/login.css";
import "../assets/css/spacing.css";
import mawingu from "../assets/images/mawingu.png";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="center-login">
        <form className="form-signin">
          <h3 className="h3 mb-3 font-weight-normal">Admin Login</h3>
          <img className="mb-4 img-rounded" alt="Cinque Terre" src={mawingu} />
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="Phone"
            id="inputPhone"
            className="form-control mb-2"
            placeholder="Phone"
            required
            autofocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <footer class="footer mt-3 py-3">
            <div class="container">
              <span class="text-muted">Mawingu &copy; 2019</span>
            </div>
          </footer>
        </form>
      </div>
    );
  }
}

export default Login;
