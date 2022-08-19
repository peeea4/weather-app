import { SET_CURRENT_API } from "@/constants/actions";

export const setApiAction = (apiName) => ({
    type: SET_CURRENT_API,
    payload: apiName,
});
