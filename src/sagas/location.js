import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { setCurrentLocation } from "@/actions/location";
import { setWeather } from "@/actions/weather";
import { GET_LOCATION, SET_CURRENT_LOCATION } from "@/constants/actions";

import { fetchWeatherFromApi } from "./weather";

const fetchCoordsFromApi = (cityName) => axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=c75a2e7ac927f44818a689ec31f36fd5`,
);

export function* fetchLocationWorker({ payload: cityName }) {
    try {
        const res = yield call(fetchCoordsFromApi, cityName);
        const { data } = yield call(fetchWeatherFromApi, {
            latitude: res.data[0].lat,
            longitude: res.data[0].lon,
        });
        yield put(setWeather(data));
    } catch {
        yield put(setCurrentLocation("Nothing found"));
        console.log("Nothing found. Try again");
    }
}

export function* fetchLocationWatcher() {
    yield takeEvery(GET_LOCATION, fetchLocationWorker);
}

// setCurrentLocation

export function* setCurrentLocationWorker({ payload: cityName }) {
    yield put(setCurrentLocation(cityName));
}

export function* setCurrentLocationWatcher() {
    yield takeEvery(SET_CURRENT_LOCATION, setCurrentLocationWorker);
}
