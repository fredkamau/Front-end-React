import React, { Component } from "react";
import Login from "./components/Login";
import "./assets/css/styles.css";
import TasksTable from "./components/TasksTable";
import DailyTargetsChart from "./components/DailyTargetsChart";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        </div>
    );
  }
}

export default App;
