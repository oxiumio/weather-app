import { SET_WEATHER, CLEAR_WEATHER, SET_ERROR, CLEAR_ERROR } from "../types";
import axios from "axios";

const setWeather = weather => {
  return { type: SET_WEATHER, weather };
};

export const clearWeather = () => {
    return { type: CLEAR_WEATHER }
}

const setError = error => {
    return { type: SET_ERROR, error }
}

export const clearError = () => {
    return { type: CLEAR_ERROR }
}

export const convertLocation = location => async (dispatch) => {    
    await axios.post("/weather/forecast", { location })
        .then(response => dispatch(setWeather(response.data)))
        .catch(error => dispatch(setError(error)))
}


