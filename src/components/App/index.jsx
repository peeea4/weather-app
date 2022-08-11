import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";

import { fetchWeatherAction } from "@/actions/weather";
import {
    AppWrapper,
    BackgroundWrapper,
    BlurWrapper,
} from "@/components/App/styled";
import { CurrentInfo } from "@/components/CurrentInfo";
import { EventList } from "@/components/EventList";
import { Header } from "@/components/Header";
import { WeeklyForecast } from "@/components/WeeklyForecast";
import { GlobalStyles } from "@/constants/globalStyles";
import { useLocation } from "@/hooks/useLocation";

export const App = () => {
    const currentDate = new Date().getHours();
    const backgroundImageTime =
        currentDate <= 5 && currentDate <= 22 ? "night" : "day";
    const { getLocation, coordinates } = useLocation();
    useEffect(() => {
        getLocation();
    }, []);
    return (
        <BackgroundWrapper backgroundImageTime={backgroundImageTime}>
            <AppWrapper>
                <BlurWrapper>
                    <Header coordinates={coordinates} />
                    <CurrentInfo />
                    <EventList />
                    <WeeklyForecast />
                    <GlobalStyles />
                </BlurWrapper>
            </AppWrapper>
        </BackgroundWrapper>
    );
};
