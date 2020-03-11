import React from "react";
import "./DailyWeatherCard.css";

export default function(props) {
    return <div className="daily-weather-card">
        <img src={props.icon} alt="icon" className="card-icon"/>
        <div className="weekday">
            <div>{props.weekday}</div>        
            <div><b>{props.temperature}</b></div>
        </div>
    </div>
}