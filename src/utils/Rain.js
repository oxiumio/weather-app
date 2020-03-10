import React from "react";
import "./Rain.css"

export default function() {
    let rain = [];
    for (let i = 0; i < 149; i++) {
        rain.push(<i key={i} className="rain"></i>)
    }

    return rain;
}