import { useSelector } from "react-redux";

import {
    DailyForecastWrapper,
    DayOfWeek,
    Humidity,
    Image,
    Temperature,
    WindSpeed,
} from "@/components/DailyForecast/styled";
import { WEATHER_ICONS } from "@/constants/weatherIcons";

const days = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
};

export const DailyForecast = ({ day }) => {
    const currentApi = useSelector((state) => state.apiState.currentAPI);
    let weather = {
        temp: "",
        time: 0,
        dayOfWeek: 0,
        iconName: "",
        icon: "",
        windSpeed: 0,
        humidity: "",
    };

    if (currentApi === "Open Weather") {
        weather = {
            temp: `${Math.round(day.main.temp)}°`,
            time: new Date(day.dt_txt).getHours(),
            windSpeed: `${day.wind.speed} m/s`,
            humidity: `${day.main.humidity}%`,
            dayOfWeek: days[new Date(day.dt_txt).getDay()],
            iconName: `${day?.weather[0].main.toLowerCase()}${
                weather.time <= 5 && weather.time >= 22 ? "Night" : "Day"
            }`,
        };
    } else if (currentApi === "Storm Glass") {
        weather = {
            temp: `${Math.round(day.airTemperature.noaa)}°`,
            time: new Date(day.time).getHours(),
            dayOfWeek: days[new Date(day.time).getDay()],
        };
    }

    return (
        <DailyForecastWrapper>
            <DayOfWeek>{weather.dayOfWeek}</DayOfWeek>
            <Image src={WEATHER_ICONS[weather.iconName] || null} />
            <Temperature>{weather.temp}</Temperature>
            <Humidity>{weather.humidity}</Humidity>
            <WindSpeed>{weather.windSpeed}</WindSpeed>
        </DailyForecastWrapper>
    );
};
