import { SET_CURRENT_API } from "@/constants/actions";

const defaultState = {
    currentAPI: "Open Weather",
};

export const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_API:
            return {
                ...state,
                currentAPI: action.payload,
            };
        default:
            return state;
    }
};
