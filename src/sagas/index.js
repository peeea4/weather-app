import { all } from "redux-saga/effects";

import { fetchWeatherWatcher } from "./weather";

export function* rootWatcher() {
    yield all([fetchWeatherWatcher()]);
}
