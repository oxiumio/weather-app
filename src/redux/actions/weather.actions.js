import { SET_WEATHER, CLEAR_WEATHER, SET_LOCATION, CLEAR_LOCATION, SET_ERROR, CLEAR_ERROR } from "../types";
import axios from "axios";

const setWeather = weather => {
  return { type: SET_WEATHER, weather };
};

export const clearWeather = () => {
    return { type: CLEAR_WEATHER }
}

const setLocationOptions = locationOptions => {
    return { type: SET_LOCATION, locationOptions }
}

const setError = error => {
    return { type: SET_ERROR, error }
}

export const clearError = () => {
    return { type: CLEAR_ERROR }
}

// const fetchWeather = location => dispatch => {
//     console.log(location);
//     axios.post("/weather/forecast")
//         .then(response => console.log(response))
//         .catch(error => dispatch(setError(error)))
// }

export const convertLocation = location => dispatch => {    
    axios.post("/weather/forecast", location)
        .then(response => {                
                console.log(response);
            
        }) // TODO: support multiple places
        .catch(error => dispatch(setError(error)))
}


