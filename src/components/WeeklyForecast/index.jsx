import { useSelector } from "react-redux";

import { DailyForecast } from "@/components/DailyForecast";
import { TodayForecast } from "@/components/TodayForecast";
import { ForecastList, WeeklyForecastWrapper } from "@/components/WeeklyForecast/styled";

export const WeeklyForecast = () => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);
    const currentWeather = useSelector(
        (state) => state?.weatherState?.weather[currentLocation]?.list,
    )?.slice(1);
    const weatherFromStormGlass = useSelector(
        (state) => state.weatherState.weatherFromStormGlass.hours,
    );
    const currentAPI = useSelector((state) => state.apiState.currentAPI);

    const currentDate = new Date();
    let forecastList = [];

    if (currentAPI === "Open Weather") {
        forecastList = currentWeather
            ?.filter(
                (day) => new Date(day.dt_txt).getHours() === 12
                    && new Date(day.dt_txt).getDate() !== currentDate.getDate(),
            )
            .slice(0, 4);
    } else if (currentAPI === "Storm Glass") {
        forecastList = weatherFromStormGlass
            ?.filter(
                (day) => new Date(day.time).getHours() === 12
                    && new Date(day.time).getDate() > currentDate.getDate(),
            )
            .slice(0, 4);
    }

    return (
        <WeeklyForecastWrapper>
            <TodayForecast />
            <ForecastList>
                {forecastList?.map((day, index) => (
                    <DailyForecast key={index} day={day} />
                ))}
            </ForecastList>
        </WeeklyForecastWrapper>
    );
};
