import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import { AppWrapper, BackgroundWrapper, BlurWrapper } from "@/components/App/styled";
import { CurrentInfo } from "@/components/CurrentInfo";
import { EventContainer } from "@/components/EventContainer";
import { Header } from "@/components/Header";
import { WeeklyForecast } from "@/components/WeeklyForecast";
import { GlobalStyles } from "@/constants/globalStyles";
import { useLocation } from "@/hooks/useLocation";

export const App = () => {
    const { getLocation, coordinates } = useLocation();

    useEffect(() => {
        getLocation();
    }, []);

    const currentLocation = useSelector((state) => state.locationState.currentLocation);
    const currentWeather = useSelector(
        (state) => state.weatherState.weather[currentLocation]?.list?.slice(0, 1)[0]?.weather[0].main,
    );

    const currentTime = new Date().getHours();
    const currentWeatherName = `${currentWeather?.toLowerCase()}${
        currentTime < 5 || currentTime > 20 ? "Night" : "Day"
    }Bg`;

    return (
        <BackgroundWrapper currentWeather={currentWeatherName}>
            <AppWrapper>
                <BlurWrapper>
                    <Header coordinates={coordinates} />
                    <CurrentInfo />
                    <EventContainer />
                    <WeeklyForecast />
                    <GlobalStyles />
                </BlurWrapper>
            </AppWrapper>
        </BackgroundWrapper>
    );
};
