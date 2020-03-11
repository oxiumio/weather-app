import { applyMiddleware, createStore } from "redux";
import weatherReducer from "../redux/reducers/weather.reducer";
import thunk from "redux-thunk";

export const testStore = (initStore) => {
    return applyMiddleware(thunk)(createStore)(weatherReducer, initStore);    
}