import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchLocationAction } from "@/actions/location";
import search from "@/assets/icons/search.png";

import {
    SearchLocationButton,
    SearchLocationInput,
    SearchLocationWrapper,
} from "./styled";

export const SearchLocation = ({ coordinates }) => {
    const [cityName, setCityName] = useState("");

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setCityName(e.target.value);
    };

    const clickHandle = () => {
        dispatch(fetchLocationAction(cityName));
    };

    const keyPressHandle = (e) => {
        if (e.key === "Enter") {
            dispatch(fetchLocationAction(cityName));
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
