import React, { Component } from "react";
import { connect } from "react-redux";
import { convertLocation, clearWeather, clearError } from "../../redux/actions/weather.actions";
import DailyWeatherCard from "./DailyWeatherCard/DailyWeatherCard";
import getIcon from "../../utils/getIcon";
import moment from "moment";
import "./Sidebar.css";

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
      this.props.clearWeather();
      this.props.clearError();
    }
  }

  renderCards = () => {
    const { daily } = this.props.weatherState.weather || {};    
    if (daily) {
      let cards = [];
      daily.data.forEach((day, i) => {
        if (i !== 0) {
          cards.push(<DailyWeatherCard 
            key={i} 
            icon={getIcon(day).icon} 
            temperature={day.temperatureHigh + " °F - " + day.apparentTemperatureLow + " °F"}
            weekday={moment.utc(new Date(day.time * 1000).getTime() + this.props.offset * 3600 * 1000 ).format("dddd")}/>) 
        }        
      })
      return cards      
    }
  }

  render() {
    const { location } = this.state;

    return (
        <div className="input-container">
          <div className="sidebar">
          <input
            type="text"
            value={location}
            onChange={this.setLocation}
            placeholder="Ex: Seattle"
            onKeyDown={this.checkAndExecute}
            />          
            <div className="helper-text">Type in a location, then press Enter</div>            
          </div>
          <div className="cards-container">{this.renderCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = weatherState => {
  return {
    weatherState
  };
};

export default connect(mapStateToProps, { convertLocation, clearWeather, clearError })(LocationSelector);
