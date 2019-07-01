import React, { Component } from "react";
import Login from "./components/Login";
import "./assets/css/styles.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
