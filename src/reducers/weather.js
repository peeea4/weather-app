import {
    SET_CURRENT_LOCATION,
    SET_FORECAST,
    SET_FORECAST2,
} from "@/constants/actions";

const defaultState = {
    weather: {},
    weatherFromStormGlass: {},
    currentLocation: "",
};

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                weather: action.payload,
            };
        case SET_FORECAST2:
            return {
                ...state,
                weatherFromStormGlass: action.payload,
            };
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload,
            };
        default:
            return state;
    }
};
