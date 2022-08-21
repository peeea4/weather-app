import { SET_LOADER_STATUS } from "@/constants/actions";

export const setLoaderStatusAction = (isLoading) => ({
    type: SET_LOADER_STATUS,
    payload: isLoading,
});
