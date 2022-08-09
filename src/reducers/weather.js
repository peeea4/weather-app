import { SET_FORECAST } from "@/constants/actions";

const defaultState = {
    weather: {},
};

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                weather: action.payload,
            };
        default:
            return state;
    }
};
