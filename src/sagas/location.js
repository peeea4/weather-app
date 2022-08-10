import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { fetchWeatherAction, setWeather } from "@/actions/weather";
import { GET_LOCATION } from "@/constants/actions";

import { fetchWeatherFromApi } from "./weather";

const fetchCoordsFromApi = (cityName) => axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=c75a2e7ac927f44818a689ec31f36fd5`,
);

export function* fetchLocationWorker({ payload: cityName }) {
    const res = yield call(fetchCoordsFromApi, cityName);

    const { data } = yield call(fetchWeatherFromApi, {
        latitude: res.data[0].lat,
        longitude: res.data[0].lon,
    });
    yield put(setWeather(data));
}

export function* fetchLocationWatcher() {
    yield takeEvery(GET_LOCATION, fetchLocationWorker);
}
