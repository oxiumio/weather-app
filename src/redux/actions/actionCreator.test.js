import moxios from "moxios";
import { convertLocation, clearWeather, clearError } from "./weather.actions";
import { testStore } from "../testStore";
import getWeatherForSeattle from "./seattle";

describe("Fetches weather forecast for a selected location and updates Redux store with data or an error", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("getting empty response -> no state changes", () => {
        const initState = [{
            weather: null,            
            error: null
        }];
        const store = testStore();
        
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: initState.weather
            })
        });

        return store.dispatch(convertLocation())
            .then(() => {
                const newState = store.getState();
                expect(newState.weather).toBe(initState.weather);
            })
    });

    test("getting valid response -> setting weather in state", () => {        
        const store = testStore();
        
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getWeatherForSeattle()
            })
        });

        const prevState = store.getState();

        return store.dispatch(convertLocation())
            .then(() => {
                const newState = store.getState();
                // new state is different
                expect(newState).not.toBe(prevState);
                // new state has value returned from the server
                expect(newState.weather).toStrictEqual(getWeatherForSeattle());
                // API sends forecast for today + the next week
                expect(newState.weather.daily.data.length).toBe(8); 
                // no errors are set in the store
                expect(newState.error).toBe(null);
            })
    });

    test("clearing weather data from the store", () => {        
        const initState = [{
            weather: getWeatherForSeattle(),            
            error: null
        }];
        const store = testStore(initState);            
    
        store.dispatch(clearWeather())            
                const newState = store.getState();                
                expect(newState.weather).toBe(null);             
    });

    test("Setting error in the store", () => {
        
        const store = testStore();
        
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500
            })
        });

        return store.dispatch(convertLocation())
            .then(() => {
                const newState = store.getState();
                expect(newState.error).not.toBe(null)
            })
    });

    test("Clearing error in the store", () => {
        const initState = [{
            weather: null,            
            error: "[ERROR]: Something went wrong"
        }];
        const store = testStore(initState);
        store.dispatch(clearError())
        const newState = store.getState();
        expect(newState.error).toBe(null)
    });
})