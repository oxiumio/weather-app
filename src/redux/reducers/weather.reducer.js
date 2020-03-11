const initState = {
    weather: null,
    error: null
}

export default function(state = initState, action) {
    switch(action.type) {
        case("SET_WEATHER"):
            return {...state, weather: action.weather};
        case("CLEAR_WEATHER"):
            return {...state, weather: null}                    
        case("SET_ERROR"):
            return {...state, error: action.error};
        case("CLEAR_ERROR"):
            return {...state, error: null}
        default:
            return state
    }
}