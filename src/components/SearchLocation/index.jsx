import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLocationAction, setCurrentLocation } from "@/actions/location";
import search from "@/assets/icons/search.png";
import {
    SearchLocationButton,
    SearchLocationInput,
    SearchLocationWrapper,
} from "@/components/SearchLocation/styled";

export const SearchLocation = ({ currentLocation, onClose }) => {
    const [cityName, setCityName] = useState(currentLocation);

    const lastUpdate = useSelector((state) => state.weatherState.lastUpdate);
    const currentWeather = useSelector((state) => state.weatherState?.weather[cityName]);

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setCityName(e.target.value);
    };

    useEffect(() => {
        setCityName(currentLocation);
    }, [currentLocation]);

    const clickHandle = () => {
        if (!currentWeather) {
            dispatch(fetchLocationAction(cityName));
        }
        if (currentWeather && new Date().getTime() - lastUpdate >= 36000000) {
            dispatch(fetchLocationAction(cityName));
        }
        dispatch(setCurrentLocation(cityName));
        if (onClose) {
            onClose();
        }
    };

    const keyPressHandle = (e) => {
        if (e.key === "Enter") {
            clickHandle();
        }
    };

    return (
        <SearchLocationWrapper>
            <SearchLocationInput
                type="text"
                placeholder="Enter location"
                value={cityName}
                onChange={changeHandler}
                onKeyDown={keyPressHandle}
            />
            <SearchLocationButton onClick={clickHandle} backgroundImage={search} />
        </SearchLocationWrapper>
    );
};
