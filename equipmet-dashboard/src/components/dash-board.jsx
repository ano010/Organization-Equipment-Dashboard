import React, { Component } from "react";
import {
  getAllEquipments,
  getOperationalStatus,
} from "../services/equipmentService";

class Dashboard extends Component {
  state = {};

  async componentDidMount() {
    const equipments = await getAllEquipments();

    console.log(getOperationalStatus());
  }
  render() {
    return null;
  }
}

export default Dashboard;
