import reducer from "../reducers/weather.reducer";
import { SET_WEATHER, CLEAR_WEATHER, SET_ERROR, CLEAR_ERROR } from "../types";
import getWeatherForSeattle from "../actions/seattle";

describe("Fetches weather forecast for a selected location and updates Redux store with data or an error", () => {

    test("Reducer returns weather data passed with SET_WEATHER action type", () => {
        const weather = getWeatherForSeattle();
        const setWeather = {
            type: SET_WEATHER, weather
        }
        expect(reducer({}, setWeather).weather).toEqual(weather);
    });

    test("Reducer returns null when CLEAR_WEATHER action type is dispatched", () => {
        const weather = getWeatherForSeattle();
        const setWeather = {
            type: CLEAR_WEATHER, weather
        }
        expect(reducer({weather}, setWeather).weather).toEqual(null);
    });

    test("Reducer returns error passed with SET_ERROR action type", () => {
        const error = "[ERROR]: Something went wrong";
        const setError = {
            type: SET_ERROR, error
        }
        expect(reducer({error: null}, setError).error).toEqual(error);
    });

    test("Reducer returns null when CLEAR_ERROR action type is dispatched", () => {
        const error = "[ERROR]: Something went wrong";
        const clearError = {
            type: CLEAR_ERROR
        }
        expect(reducer({error}, clearError).error).toEqual(null);
    });
})