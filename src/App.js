import React, { Component } from "react";
import Login from "./components/Login";
import TasksTable from "./components/TasksTable";
import DailyTargetsChart from "./components/DailyTargetsChart";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

export default App;
