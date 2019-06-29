import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
class DailyTragets extends Component {
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
            backgroundColor: ["#ff8397",]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="chart">
        <Pie data={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}

export default DailyTragets;
