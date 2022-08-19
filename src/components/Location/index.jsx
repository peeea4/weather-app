import { useSelector } from "react-redux";

import { LocationWrapper } from "@/components/Location/styled";

export const Location = () => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);

    return <LocationWrapper>{currentLocation}</LocationWrapper>;
};
