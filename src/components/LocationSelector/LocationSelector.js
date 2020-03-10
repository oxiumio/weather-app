import React, { Component } from "react";
import { connect } from "react-redux";
import { convertLocation } from "../../redux/actions/weather.actions";
import "./LocationSelector.css";

class LocationSelector extends Component {
  state = {
    location: ""
  };

  setLocation = ev => {
    this.setState({ location: ev.target.value });
  };

  convertLocationGetForecast = () => {
      this.props.convertLocation(this.state.location)
  }

  checkAndExecute = (ev) => {
    if (ev.key === "Enter") {
      this.convertLocationGetForecast();
    }
  }

  render() {
    const { location } = this.state;

    return (
        <div className="input-container">
          <input
            type="text"
            value={location}
            onChange={this.setLocation}
            placeholder="Type in location | Ex: Seattle"
            onKeyDown={this.checkAndExecute}
            />          
      </div>
    );
  }
}

export default connect(null, { convertLocation })(LocationSelector);
