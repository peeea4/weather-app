import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchLocationAction, setCurrentLocation } from "@/actions/location";
import search from "@/assets/icons/search.png";

import {
    SearchLocationButton,
    SearchLocationInput,
    SearchLocationWrapper,
} from "./styled";

export const SearchLocation = ({ currentLocation }) => {
    const [cityName, setCityName] = useState(currentLocation);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setCityName(e.target.value);
    };

    useEffect(() => {
        setCityName(currentLocation);
    }, [currentLocation]);

    const clickHandle = () => {
        dispatch(fetchLocationAction(cityName));
        dispatch(setCurrentLocation(cityName));
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
            <SearchLocationButton
                onClick={clickHandle}
                backgroundImage={search}
            />
        </SearchLocationWrapper>
    );
};
