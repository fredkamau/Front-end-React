import React, { Component } from "react";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import DailyTargets from "./components/DailyTargets";
import "./App.css";
import DailyTragets from "./components/DailyTargets";

class App extends Component {
  render() {
    return (
      //set charts data as a property
      <DailyTragets />
    );
  }
}

export default App;
