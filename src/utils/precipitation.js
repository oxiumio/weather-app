import React from "react";
import "./precipitation.css";

export default function(props) {
  if (props.precipitation === "rain") {
    let precipitation = [];
    for (let i = 0; i < 149; i++) {
      precipitation.push(<i key={i} className="rain"></i>);
    }
    return precipitation;
  } else if (props.precipitation === "snow") {
    return (
      <div className="snow-wrapper">
        <div className="snow layer1 a"></div>
        <div className="snow layer1"></div>
        <div className="snow layer2 a"></div>
        <div className="snow layer2"></div>
        <div className="snow layer3 a"></div>
        <div className="snow layer3"></div>
      </div>
    );
  } else {
      return null
  }
}
