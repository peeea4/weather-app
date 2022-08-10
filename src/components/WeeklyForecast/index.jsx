import { useSelector } from "react-redux";

import { DailyForecast } from "../DailyForecast";
import { TodayForecast } from "../TodayForecast";
import { ForecastList, WeeklyForecastWrapper } from "./styled";

export const WeeklyForecast = () => {
    const weather = useSelector(
        (state) => state.weatherState.weather.list,
    )?.slice(1);

    return (
        <WeeklyForecastWrapper>
            <TodayForecast />
            <ForecastList>
                {weather?.map((day) => (new Date(day.dt_txt).getHours() === 15 ? (
                    <DailyForecast key={day.dt} day={day} />
                ) : null))}
            </ForecastList>
        </WeeklyForecastWrapper>
    );
};
