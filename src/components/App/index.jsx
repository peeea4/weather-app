import { useState } from "react";

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
