import { useSelector } from "react-redux";

import { WEATHER_ICONS } from "@/constants/weatherIcons";

import {
    Day,
    DetailedInfo,
    Icon,
    Info,
    InfoItem,
    Temperature,
    TodayForecastWrapper,
} from "./styled";

export const TodayForecast = () => {
    const currentWeather = useSelector(
        (state) => state?.weatherState?.weather?.list,
    )?.slice(0, 1)[0];

    const temp = `${Math.round(currentWeather?.main?.temp)}°`;
    const time = new Date(currentWeather?.dt_txt).getHours();
    const iconName = `${currentWeather?.weather[0].main.toLowerCase()}${
        time <= 5 && time <= 22 ? "Night" : "Day"
    }`;

    const icon = WEATHER_ICONS[iconName];
    return (
        <TodayForecastWrapper>
            <Icon src={icon} />
            <Info>
                <Day>TODAY</Day>
                <Temperature>{temp}</Temperature>
            </Info>
            <DetailedInfo>
                <InfoItem>
                    <p>Humidity:</p>
                    <p>{currentWeather?.main.humidity}%</p>
                </InfoItem>
                <InfoItem>
                    <p>Feels like:</p>
                    <p>{currentWeather?.main.feels_like}°</p>
                </InfoItem>
                <InfoItem>
                    <p>Wind speed:</p>
                    <p>{currentWeather?.wind.speed}</p>
                </InfoItem>
            </DetailedInfo>
        </TodayForecastWrapper>
    );
};
