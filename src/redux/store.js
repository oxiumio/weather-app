import { createStore, applyMiddleware } from "redux";
import weatherReducer from "./reducers/weather.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export default createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
