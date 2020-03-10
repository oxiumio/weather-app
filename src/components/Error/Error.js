import React from "react";
import close from "../../assets/icons/close.svg";
import "./Error.css";

export default function(props) {
    return <div className={"error " + props.errClass}>        
        Something went wrong. Please try again later
        <img src={close} alt="X" onClick={props.clearError} className="err-svg"/>    
    </div>
}