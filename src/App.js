import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import LocationSelector from "./components/LocationSelector/LocationSelector";
import WeatherOutput from "./components/WeatherOutput/WeatherOutput";
import Error from "./components/Error/Error";
import Rain from "./utils/Rain";
import Snow from "./utils/Snow";

import { clearError } from "./redux/actions/weather.actions";

import "./App.css";

class App extends Component {
  render() {
    const { error } = this.props.weatherState;

    return (
      <div className="weather-wrapper raining">        
      <Rain />
      {/* <Snow /> */}
        <Error clearError={this.props.clearError} error={error} errClass={error ? "enter" : "exit"} />
        <LocationSelector />
        <WeatherOutput />
      </div>
    );
  }
}

const mapStateToProps = weatherState => {
  return {
    weatherState
  };
};

export default connect(mapStateToProps, { clearError })(App);
