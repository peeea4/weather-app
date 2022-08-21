import { useSelector } from "react-redux";

import {
    Day,
    DetailedInfo,
    Icon,
    InfoItem,
    MainInfo,
    Temperature,
    TodayForecastWrapper,
    TodayForecastWrapperMobile,
} from "@/components/TodayForecast/styled";
import { WEATHER_ICONS } from "@/constants/weatherIcons";

import {
    DailyForecastWrapper,
    DayOfWeek,
    Humidity,
    Image,
    WindSpeed,
} from "../DailyForecast/styled";

export const TodayForecast = () => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);
    const currentWeather = useSelector(
        (state) => state?.weatherState?.weather[currentLocation]?.list,
    )?.slice(0, 1)[0];
    const weatherFromStormGlass = useSelector(
        (state) => state.weatherState.weatherFromStormGlass.hours,
    )
        ?.filter(
            (day) => new Date(day.time).getDate() === new Date().getDate()
                && new Date(day.time).getHours() === new Date().getHours(),
        )
        .slice(0, 1)[0];
    const currentAPI = useSelector((state) => state.apiState.currentAPI);

    let weather = {
        time: 0,
        temperature: "",
        feelsLike: "",
        windSpeed: "",
        humidity: "",
        iconName: "",
        icon: "",
    };
    if (currentAPI === "Open Weather") {
        weather = {
            time: new Date(currentWeather?.dt_txt).getHours(),
            temperature: `${Math.round(currentWeather?.main?.temp)}°`,
            feelsLike: currentWeather?.main.feels_like,
            windSpeed: currentWeather?.wind.speed,
            humidity: currentWeather?.main.humidity,
            iconName: `${currentWeather?.weather[0].main.toLowerCase()}${
                weather.time <= 5 || weather.time >= 22 ? "Day" : "Night"
            }`,
            icon: WEATHER_ICONS[weather.iconName],
        };
    } else if (currentAPI === "Storm Glass") {
        weather = {
            temperature: `${Math.round(weatherFromStormGlass?.airTemperature.noaa)}°`,
            windSpeed: weatherFromStormGlass?.windSpeed.noaa,
            humidity: weatherFromStormGlass?.humidity.noaa,
        };
    }

    return (
        <>
            <TodayForecastWrapper>
                <MainInfo>
                    <Icon src={WEATHER_ICONS[weather.iconName]} />
                    <Day>TODAY</Day>
                    <Temperature>{weather.temperature}</Temperature>
                </MainInfo>
                <DetailedInfo>
                    <InfoItem>
                        <p>Humidity:</p>
                        <p>{weather.humidity}%</p>
                    </InfoItem>
                    {weather.feelsLike && (
                        <InfoItem>
                            <p>Feels like:</p>
                            <p>{weather.feelsLike}°</p>
                        </InfoItem>
                    )}
                    <InfoItem>
                        <p>Wind speed:</p>
                        <p>{weather.windSpeed} m/s</p>
                    </InfoItem>
                </DetailedInfo>
            </TodayForecastWrapper>
            <TodayForecastWrapperMobile>
                <DailyForecastWrapper>
                    <DayOfWeek>NOW</DayOfWeek>
                    <Image src={WEATHER_ICONS[weather.iconName] || null} />
                    <Temperature>{weather.temperature}</Temperature>
                    <Humidity>{weather.humidity} %</Humidity>
                    <WindSpeed>{weather.windSpeed} m/s</WindSpeed>
                </DailyForecastWrapper>
            </TodayForecastWrapperMobile>
        </>
    );
};
