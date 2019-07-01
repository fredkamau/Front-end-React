import React, { Component } from "react";
import Navigation from "./Navigation";
import TasksTable from "./TasksTable";
import DailyTargetsChart from "./DailyTargetsChart";
import Footer from "./Footer";
import "../assets/css/styles.css";
class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard">
        <Navigation />
        <div className="rowB">
          <TasksTable />
          <DailyTargetsChart />
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashBoard;
