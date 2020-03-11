import React from "react";
import "./WeatherOutput.css";
import clock from "../../assets/icons/clock.svg";
import moment from "moment";

export default function(props) {

  return (
    <div className="current-weather">
      <div className="flex-container">
        {props.icon ? <img src={props.icon} alt="icon" className="icon" /> : ""}
        <div className="temp">
          {props.currently ? props.currently.temperature + " °F" : ""}
        </div>
      </div>
      <div className="flex-container">
        <div className="summary">
          {props.currently ? props.currently.summary : ""}
        </div>
        <div className="local-time">
          {props.currently
            ? <>
            <img src={clock} alt="clock" className="clock"/>
            {moment.utc(new Date().getTime() + props.offset * 3600 * 1000 ).format("HH:mm")}
              </>
            : ""}            
        </div>
      </div>
    </div>
  );
}
