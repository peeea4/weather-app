import { GET_LOCATION, SET_CURRENT_LOCATION } from "@/constants/actions";

export const fetchLocationAction = (cityName) => ({
    type: GET_LOCATION,
    payload: cityName,
});

export const setCurrentLocation = (cityName) => ({
    type: SET_CURRENT_LOCATION,
    payload: cityName,
});
