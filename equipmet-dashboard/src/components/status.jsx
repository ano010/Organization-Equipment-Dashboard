import React, { Component } from "react";

class Status extends Component {
  render() {
    const { operational, nonOperational } = this.props.operationalStatus;
    return (
      <div>
        <div className="row">
          <div className="col">
            <h3>Operational: {operational}</h3>
          </div>
          <div className="col">
            <h3>Non-Operational: {nonOperational}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
