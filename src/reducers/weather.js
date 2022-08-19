import { SET_FORECAST, SET_FORECAST_STORM } from "@/constants/actions";

const defaultState = {
    weather: {},
    weatherFromStormGlass: {},
    lastUpdate: "",
};

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                weather: { ...state.weather, [action.payload.cityName]: action.payload.data },
                lastUpdate: new Date().getTime(),
            };
        case SET_FORECAST_STORM:
            return {
                ...state,
                weatherFromStormGlass: { ...state.weatherFromStormGlass, [action.payload.cityName]: action.payload.data },
                lastUpdate: new Date().getTime(),
            };
        default:
            return state;
    }
};
