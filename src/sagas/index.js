import { all } from "redux-saga/effects";

import { fetchLocationWatcher } from "./location";
import { fetchWeatherWatcher, fetchWeatherWatcher2 } from "./weather";

export function* rootWatcher() {
    yield all([
        fetchWeatherWatcher(),
        fetchLocationWatcher(),
        fetchWeatherWatcher2(),
    ]);
}
