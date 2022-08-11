import { useDispatch } from "react-redux";

import { fetchWeatherAction } from "@/actions/weather";

export const useLocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    const dispath = useDispatch();

    const success = (pos) => {
        const crd = pos.coords;
        dispath(fetchWeatherAction(crd));
    };

    const error = (err) => {
        // eslint-disable-next-line no-console
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const getLocation = () => navigator.geolocation.getCurrentPosition(success, error, options);
    return { getLocation };
};
