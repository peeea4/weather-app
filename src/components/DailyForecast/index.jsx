import { WEATHER_ICONS } from "@/constants/weatherIcons";

import {
    DailyForecastWrapper, Day, Image, Temperature,
} from "./styled";

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
    const temp = `${Math.round(day.main.temp)}°`;
    const dayOfWeek = days[new Date(day.dt_txt).getDay()];

    const time = days[new Date(day.dt_txt).getHours()];
    const iconName = `${day?.weather[0].main.toLowerCase()}${
        time <= 5 && time <= 22 ? "Night" : "Day"
    }`;

    const icon = WEATHER_ICONS[iconName];

    return (
        <DailyForecastWrapper>
            <Day>{dayOfWeek}</Day>
            <Image src={icon} />
            <Temperature>{temp}</Temperature>
        </DailyForecastWrapper>
    );
};
