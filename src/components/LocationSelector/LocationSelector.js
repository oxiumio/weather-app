import React, { Component } from "react";
import { connect } from "react-redux";
import { convertLocation } from "../../redux/actions/weather.actions";

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

  render() {
    const { location } = this.state;

    return (
        <>
      <input
        type="text"
        value={location}
        onChange={this.setLocation}
        placeholder="Type in location | Ex: Seattle"
      />
      <button disabled={!location} onClick={this.convertLocationGetForecast}>Check weather</button>
      </>
    );
  }
}

const mapStateToProps = weatherState => {
    return {
        weatherState
    }
}

export default connect(null, { convertLocation })(LocationSelector);
