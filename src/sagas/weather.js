import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { setLoaderStatusAction } from "@/actions/loader";
import { setCurrentLocation } from "@/actions/location";
import { setWeather, setWeatherStorm } from "@/actions/weather";
import { GET_FORECAST } from "@/constants/actions";

const params = "airTemperature,windSpeed,humidity";

export const fetchWeatherFromApi = ({ latitude, longitude }) => axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${"c75a2e7ac927f44818a689ec31f36fd5"}&units=metric`,
);

export const fetchWeatherFromApiStorm = ({ latitude, longitude }) => axios.get(
    `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
    {
        headers: {
            Authorization:
                    "8d10ca84-1a32-11ed-a3aa-0242ac130002-8d10cafc-1a32-11ed-a3aa-0242ac130002",
        },
    },
);

export function* fetchWeatherWorker({ payload: coords }) {
    yield put(setLoaderStatusAction(true));
    const { data } = yield call(fetchWeatherFromApi, coords);
    yield put(setWeather({ cityName: data?.city?.name, data }));
    const dataStorm = yield call(fetchWeatherFromApiStorm, coords);
    yield put(setWeatherStorm({ cityName: data?.city?.name, data: dataStorm.data }));
    yield put(setCurrentLocation(data?.city?.name));
    yield put(setLoaderStatusAction(false));
}

export function* fetchWeatherWatcher() {
    yield takeEvery(GET_FORECAST, fetchWeatherWorker);
}
