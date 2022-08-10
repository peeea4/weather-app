import { GET_LOCATION } from "@/constants/actions";

export const fetchLocationAction = (cityName) => ({
    type: GET_LOCATION,
    payload: cityName,
});
