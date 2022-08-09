import { useSelector } from "react-redux/es/exports";

import { CurrentInfoWrapper } from "./styled";

export const CurrentInfo = () => {
    const weather = useSelector((state) => state.weather.weather);
    console.log(weather);
    return <CurrentInfoWrapper>CurrentInfo</CurrentInfoWrapper>;
};
