import { useSelector } from "react-redux";

import { SearchLocation } from "../SearchLocation";
import { SelectAPI } from "../SelectAPI";
import { HeaderWrapper } from "./styled";

export const Header = () => {
    const currentLocation = useSelector(
        (state) => state.weatherState.currentLocation,
    );
    return (
        <HeaderWrapper>
            <SearchLocation currentLocation={currentLocation} />
            <SelectAPI />
        </HeaderWrapper>
    );
};
