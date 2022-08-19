import { combineReducers } from "@reduxjs/toolkit";

import { apiReducer } from "@/reducers/api";
import { locationReducer } from "@/reducers/location";
import { weatherReducer } from "@/reducers/weather";

export const rootReducer = combineReducers({
    weatherState: weatherReducer,
    locationState: locationReducer,
    apiState: apiReducer,
});
