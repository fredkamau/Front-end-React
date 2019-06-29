import React, { Component } from "react";
import Login from "./components/Login";
import TasksTable from "./components/TasksTable";
import DailyTargetsChart from "./components/DailyTargetsChart";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <TasksTable />
        <DailyTargetsChart />
      </div>
    );
  }
}

export default App;
