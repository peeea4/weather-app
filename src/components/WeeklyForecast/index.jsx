import { useSelector } from "react-redux";

import { DailyForecast } from "../DailyForecast";
import { TodayForecast } from "../TodayForecast";
import { ForecastList, WeeklyForecastWrapper } from "./styled";

export const WeeklyForecast = () => {
    const weather = useSelector(
        (state) => state.weatherState.weather.list,
    )?.slice(1);

    const currentDate = new Date();
    const forecastList = weather
        ?.filter(
            (day) => new Date(day.dt_txt).getHours() === 15
                && new Date(day.dt_txt).getDate() !== currentDate.getDate(),
        )
        .slice(0, 4);

    return (
        <WeeklyForecastWrapper>
            <TodayForecast />
            <ForecastList>
                {forecastList?.map((day) => (
                    <DailyForecast key={day.dt} day={day} />
                ))}
            </ForecastList>
        </WeeklyForecastWrapper>
    );
};
