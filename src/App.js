import React, { Component } from "react";
import Login from "./components/Login";
import "./assets/css/styles.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TasksTable from "./components/TasksTable";
import DailyTargetsChart from "./components/DailyTargetsChart";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
        <Route path="/" exact strict render={
          () => {
            return(
              <Login />
            );
          }
        }
        />
        <Route path="/dashboard" exact strict render={
          () => {
            return(
              <Navigation />
            );
          }
        }
        />
        </div>
     </Router>
    );
  }
}

export default App;
