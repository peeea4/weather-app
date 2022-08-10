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

    return (
        <DailyForecastWrapper>
            <Day>{dayOfWeek}</Day>
            <Image />
            <Temperature>{temp}</Temperature>
        </DailyForecastWrapper>
    );
};
