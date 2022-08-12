import { useDispatch, useSelector } from "react-redux";

import { fetchLocationAction } from "@/actions/location";
import { fetchWeatherAction } from "@/actions/weather";

export const useLocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    const dispath = useDispatch();

    const cityName = useSelector((state) => state.weatherState.currentLocation);

    const success = (pos) => {
        if (cityName) {
            fetchLocationAction(cityName);
        } else {
            const crd = pos.coords;
            dispath(fetchWeatherAction(crd));
        // dispath(fetchWeatherAction2(crd));
        }
    };

    const error = (err) => {
        // eslint-disable-next-line no-console
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const getLocation = () => navigator.geolocation.getCurrentPosition(success, error, options);
    return { getLocation };
};
