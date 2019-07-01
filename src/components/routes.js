import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import Dashboard from "../components/Dashboard";
import App from "../App";
export default (
  <Router>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);
