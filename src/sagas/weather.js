import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { setWeather } from "@/actions/weather";
import { GET_FORECAST } from "@/constants/actions";

const fetchWeatherFromApi = (coords) => axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${
        coords.latitude
    }&lon=${coords.longitude}&appid=${"c75a2e7ac927f44818a689ec31f36fd5"}`,
);

export function* fetchWeatherWorker({ payload: coords }) {
    const { data } = yield call(fetchWeatherFromApi, coords);
    yield put(setWeather(data));
}

export function* fetchWeatherWatcher() {
    yield takeEvery(GET_FORECAST, fetchWeatherWorker);
}
