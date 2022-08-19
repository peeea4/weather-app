import { SET_CURRENT_LOCATION } from "@/constants/actions";

const defaultState = {
    currentLocation: "",
};

export const locationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload,
            };
        default:
            return state;
    }
};
