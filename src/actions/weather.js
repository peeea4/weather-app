import {
    GET_FORECAST, GET_FORECAST2, SET_FORECAST, SET_FORECAST2,
} from "@/constants/actions";

export const fetchWeatherAction = (coords) => ({
    type: GET_FORECAST,
    payload: coords,
});

export const setWeather = (payload) => ({
    type: SET_FORECAST,
    payload,
});

export const fetchWeatherAction2 = (coords) => ({
    type: GET_FORECAST2,
    payload: coords,
});

export const setWeather2 = (payload) => ({
    type: SET_FORECAST2,
    payload,
});
