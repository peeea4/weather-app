import { useSelector } from "react-redux";

import { LocationWrapper } from "./styled";

export const Location = () => {
    const currentLocation = useSelector((state) => state.weatherState.weather?.city?.name);

    return <LocationWrapper>{currentLocation}</LocationWrapper>;
};
