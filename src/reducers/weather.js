import { GET_FORECAST } from "@/constants/actions";

const defaultState = {};

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FORECAST:
            return {};
        default:
            return state;
    }
};
