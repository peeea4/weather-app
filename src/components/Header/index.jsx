import { useDispatch } from "react-redux";

import { fetchWeatherAction } from "@/actions/weather";

import { HeaderWrapper } from "./styled";

export const Header = () => {
    const dispath = useDispatch();
    return (
        <HeaderWrapper>
            <button
                onClick={() => {
                    dispath(fetchWeatherAction());
                }}
            >click me</button>
        </HeaderWrapper>
    );
};
