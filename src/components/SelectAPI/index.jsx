import { SelectWrapper } from "./styled";

export const SelectAPI = () => {
    const chooseAPIHandle = (e) => {
        console.log(e.target.name);
    };

    return (
        <SelectWrapper onChange={chooseAPIHandle}>
            <option name="openWeather">First</option>
            <option name="stormGlass">Second</option>
        </SelectWrapper>
    );
};
