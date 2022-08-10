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
    const [backgroundImage, setBackgroundImage] = useState();
    const [backgroundColor, setBackgroundColor] = useState();
    const { getLocation, coordinates } = useLocation();
    useEffect(() => {
        getLocation();
    }, []);
    return (
        <BackgroundWrapper backgroundColor={backgroundColor}>
            <AppWrapper>
                <BlurWrapper backgroundImage={backgroundImage}>
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
