import { GET_FORECAST, SET_FORECAST } from "@/constants/actions";

export const fetchWeatherAction = (coords) => ({
    type: GET_FORECAST,
    payload: coords,
});

export const setWeather = (payload) => ({
    type: SET_FORECAST,
    payload,
});
