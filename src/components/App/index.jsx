import { useState } from "react";
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

export const App = () => {
    const [backgroundImage, setBackgroundImage] = useState();
    const [backgroundColor, setBackgroundColor] = useState();
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    const dispath = useDispatch();

    const success = (pos) => {
        const crd = pos.coords;
        dispath(fetchWeatherAction(crd));
        console.log(
            "Ваше текущее местоположение:",
            `Широта: ${crd.latitude}`,
            `Долгота: ${crd.longitude}`,
            `Плюс-минус ${crd.accuracy} метров.`,
        );
    };

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
        <BackgroundWrapper backgroundColor={backgroundColor}>
            <AppWrapper>
                <BlurWrapper backgroundImage={backgroundImage}>
                    <Header />
                    <CurrentInfo />
                    <EventList />
                    <WeeklyForecast />
                    <GlobalStyles />
                </BlurWrapper>
            </AppWrapper>
        </BackgroundWrapper>
    );
};
