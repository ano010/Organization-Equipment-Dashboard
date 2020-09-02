import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  render() {
    const { chartData } = this.props;
    return (
      <Bar
        data={chartData}
        options={{
          scales: {
            yAxes: [{ ticks: { beginAtZero: true } }],
          },
          legend: {
            display: false,
          },
        }}
      />
    );
  }
}

export default BarChart;
