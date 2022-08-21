import { useDispatch, useSelector } from "react-redux";

import { fetchLocationAction } from "@/actions/location";
import { fetchWeatherAction } from "@/actions/weather";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

export const useLocation = () => {
    const dispath = useDispatch();

    const currentLocation = useSelector((state) => state.locationState.currentLocation);
    const lastUpdate = useSelector((state) => state.weatherState.lastUpdate);
    const currentWeather = useSelector((state) => state.weatherState?.weather[currentLocation]);

    const success = (pos) => {
        if (!currentWeather || new Date().getTime() - lastUpdate >= 72000000) {
            if (currentLocation) {
                dispath(fetchLocationAction(currentLocation));
            } else {
                const crd = pos.coords;
                dispath(fetchWeatherAction(crd));
            }
        }
    };

    const error = (err) => {
        // eslint-disable-next-line no-console
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const getLocation = () => navigator.geolocation.getCurrentPosition(success, error, options);

    return { getLocation };
};
