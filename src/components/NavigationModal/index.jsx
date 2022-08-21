import { useSelector } from "react-redux";

import {
    CloseBtn,
    ContentWrapper,
    Header,
    NavigationModalWrapper,
    Title,
} from "@/components/NavigationModal/styled";
import { SearchLocation } from "@/components/SearchLocation";
import { SelectAPI } from "@/components/SelectAPI";

export const NavigationModal = ({ onClose }) => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);

    return (
        <NavigationModalWrapper>
            <Header>
                <Title>Weather</Title>
                <CloseBtn onClick={() => onClose()}>
                    <span></span>
                    <span></span>
                </CloseBtn>
            </Header>
            <ContentWrapper>
                <SearchLocation currentLocation={currentLocation} onClose={onClose} />
                <SelectAPI />
            </ContentWrapper>
        </NavigationModalWrapper>
    );
};
