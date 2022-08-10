import { SearchLocation } from "../SearchLocation";
import { SelectAPI } from "../SelectAPI";
import { HeaderWrapper } from "./styled";

export const Header = ({ coordinates }) => (
    <HeaderWrapper>
        <SearchLocation coordinates={coordinates} />
        <SelectAPI />
    </HeaderWrapper>
);
