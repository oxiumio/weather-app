import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import getIcon from "./utils/getIcon";
import getDayBracket from "./utils/getDayBracket";
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherOutput from "./components/WeatherOutput/WeatherOutput";
import Error from "./components/Error/Error";
import Precipitation from "./utils/precipitation";
import { clearError } from "./redux/actions/weather.actions";
import "./App.css";

class App extends Component {
  state = {
    bracket: "evening",
    icon: null
  };

  componentDidUpdate(prevProps, prevState) {
    const { latitude, longitude, offset } =
      this.props.weatherState.weather || {};

    if (
      latitude &&
      longitude &&
      latitude !== (prevProps.weatherState.weather || {}).latitude &&
      longitude !== (prevProps.weatherState.weather || {}).latitude
    ) {
      let localHours = +moment.utc().format("HH") + offset;
      if (localHours < 0) {
        localHours += 24;
      }
      const bracket = getDayBracket(localHours);
      this.setState({ bracket });
    }
  }



  render() {
    const { error } = this.props.weatherState;
    const { bracket } = this.state;
    const { currently, offset } = this.props.weatherState.weather || "";

    return (
      <div className={"weather-wrapper " + bracket}>
        <Precipitation precipitation={(getIcon(currently) || {}).desc}/>        
        <Error
          clearError={this.props.clearError}
          error={error}
          errClass={error ? "enter" : "exit"}
        />
        <Sidebar offset={offset} />
        <WeatherOutput
          icon={(getIcon(currently) || {}).icon}
          currently={currently}
          offset={offset}
        />
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
