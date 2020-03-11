import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import getIcon from "./utils/getIcon";
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherOutput from "./components/WeatherOutput/WeatherOutput";
import Error from "./components/Error/Error";
import Rain from "./utils/Rain";
import Snow from "./utils/Snow";
import { clearError } from "./redux/actions/weather.actions";
import "./App.css";

class App extends Component {

  state = {
    bracket: "evening",
    icon: null
  }

  componentDidUpdate(prevProps, prevState) {
    
    const { latitude, longitude, offset } = this.props.weatherState.weather || {};

    if ((latitude && longitude) 
        && 
        (latitude !== (prevProps.weatherState.weather || {}).latitude) 
        && 
        (longitude !== (prevProps.weatherState.weather || {}).latitude)) {
        
        let localHours = +moment.utc().format("HH") + offset;
        if (localHours < 0) {
          localHours += 24;
        }
        const bracket = this.getDayBracket(localHours);        
        
        this.setState({bracket})
        
    }
  }

  getDayBracket = (locationTime) => {        
    if (locationTime >= 6 && locationTime < 11) {
      return "morning"      
    } else 
    if (locationTime >= 11 && locationTime < 17) {
      return "day"      
    } else
    if (locationTime >= 17 && locationTime < 21) {
      return "evening"      
    } else
    if ((locationTime >= 21 && locationTime <= 23) || locationTime < 6) {
      return "night"    
    } else {
      return "neutral"
    }    
  }

  render() {
    const { error } = this.props.weatherState;
    const { bracket } = this.state;
    const { currently, offset } = this.props.weatherState.weather || "";
    
    return (
      <div className={"weather-wrapper " + bracket}>        
      {getIcon(currently).desc === "rain" ? <Rain /> : null}
      {getIcon(currently).desc === "snow" ? <Snow /> : null}
        <Error clearError={this.props.clearError} error={error} errClass={error ? "enter" : "exit"} />
        <Sidebar offset={offset}/>
        <WeatherOutput icon={getIcon(currently).icon} currently={currently} offset={offset}/>
      </div>
    );
  }
}
// Sunnmorsalpane - snow 
// Munich - rain
const mapStateToProps = weatherState => {
  return {
    weatherState
  };
};

export default connect(mapStateToProps, { clearError })(App);
