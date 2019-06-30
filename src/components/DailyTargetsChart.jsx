import React, { Component } from "react";
import {Pie } from "react-chartjs-2";
import SearchBox from "./SearchBox";
import "../assets/css/styles.css";
class DailyTargetsChart extends Component {
  constructor(props) {
    super(props);
    //put chart data in our state when it comes in as a property
    this.state = {
      chartData: props.chartData
    };
  }
  //runs when component is mounted
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    //ajax call to our api
    this.setState({
      chartData: {
        labels: ["Pending", "Completed"],
        datasets: [
          {
            label: "Population",
            data: [250, 1000],
            backgroundColor: ["#ff8397","#CCFF33"]
          }
        ]
      }
    });
  }
  render() {
    return (
 
        <div className="main-content col-lg-4 col-md-4 col-sm-4 p-0">       
        <Pie data={this.state.chartData} legendPosition="bottom" />
        <div className="row task-status mt-5">
          <div className="col-sm-3 bg-primary text-center">
            <span className="myFont">Assigned</span>
            <div>5</div>
          </div>
          <div className="col-sm-3 bg-warning text-center">
            <span className="myFont">Progress</span>
            <div>5</div>
          </div>
          <div className="col-sm-3 bg-success text-center">
            <span className="myFont">Completed</span>
            <div>5</div>
          </div>
          <div className="col-sm-3 bg-danger text-center">
            <span className="myFont">Deferred</span>
            <div>5</div>
          </div>
        </div>
         </div>
         
    );
  }
}

export default DailyTargetsChart;
