import React, { Component } from "react";
import BarChart from "./barChart";
import Status from "./status";
import equipmentService from "../services/equipmentService";
import { getTypes } from "../utils/chartData";

class Dashboard extends Component {
  state = {
    operationalStatus: {},
  };
  async componentDidMount() {
    const allEquipments = await equipmentService.getAllEquipments();
    const {
      operational,
      nonOperational,
    } = await equipmentService.getOperationalStatus(allEquipments);
    const { types, values } = await getTypes(allEquipments);

    this.setState({
      operationalStatus: {
        operational,
        nonOperational,
      },
      chartData: {
        labels: types,
        datasets: [
          {
            data: values,
            backgroundColor: "pink",
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        <h1>Equipment Dashboard</h1>
        <Status operationalStatus={this.state.operationalStatus} />
        <BarChart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default Dashboard;
