import { all } from "redux-saga/effects";

import { fetchLocationWatcher } from "./location";
import { fetchWeatherWatcher } from "./weather";

export function* rootWatcher() {
    yield all([fetchWeatherWatcher(), fetchLocationWatcher()]);
}
