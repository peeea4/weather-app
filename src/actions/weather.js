import {
    GET_FORECAST,
    GET_FORECAST_STORM,
    SET_FORECAST,
    SET_FORECAST_STORM,
} from "@/constants/actions";

export const fetchWeatherAction = (coords) => ({
    type: GET_FORECAST,
    payload: coords,
});

export const setWeather = (payload) => ({
    type: SET_FORECAST,
    payload,
});

export const fetchWeatherActionStorm = (coords) => ({
    type: GET_FORECAST_STORM,
    payload: coords,
});

export const setWeatherStorm = (payload) => ({
    type: SET_FORECAST_STORM,
    payload,
});
