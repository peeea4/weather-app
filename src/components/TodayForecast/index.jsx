import { useSelector } from "react-redux";

import { TodayForecastWrapper } from "./styled";

export const TodayForecast = () => {
    const currentWeather = useSelector(
        (state) => state?.weatherState?.weather?.list,
    )?.slice(0, 1)[0];
    return (
        <TodayForecastWrapper>
            {String(Math.round(currentWeather?.main?.temp))}
        </TodayForecastWrapper>
    );
};
