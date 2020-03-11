import moon from "../assets/icons/moon.svg";
import fog from "../assets/icons/fog.svg";
import cloudy from "../assets/icons/cloud.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snow.svg";
import sun from "../assets/icons/sun.svg";
import wind from "../assets/icons/wind.svg";

export default function(currently) {    
    if (currently) {    
      if (currently.icon === "clear-night") {
        return {icon: moon, desc: "moon"}
      } else if (currently.icon === "fog") {
        return {icon: fog, desc: "fog"}
      } else if (currently.icon.includes("cloudy")) {
        return {icon: cloudy, desc: "cloudy"}
      } else if (currently.icon === "rain") {
        return {icon: rain, desc: "rain"}
      } else if (currently.icon === "snow") {
        return {icon: snow, desc: "snow"}
      } else if (currently.icon === "sun" || currently.icon === "clear-day") {
        return {icon: sun, desc: "sun"}
      } else if (currently.icon === "wind") {
        return {icon: wind, desc: "wind"}
      }
    } 
  }