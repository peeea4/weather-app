import { SET_LOADER_STATUS } from "@/constants/actions";

const defaultState = {
    isLoading: false,
};

export const loaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOADER_STATUS:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};
