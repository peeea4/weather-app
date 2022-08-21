import { all } from "redux-saga/effects";

import { fetchLocationWatcher } from "@/sagas/location";
import { fetchWeatherWatcher } from "@/sagas/weather";

export function* rootWatcher() {
    yield all([fetchWeatherWatcher(), fetchLocationWatcher()]);
}
