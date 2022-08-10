import { combineReducers } from "@reduxjs/toolkit";

import { weatherReducer } from "./weather";

export const rootReducer = combineReducers({
    weatherState: weatherReducer,
});
