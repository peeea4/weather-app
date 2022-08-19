import { useSelector } from "react-redux";

import {
    CloseBtn,
    ContentWrapper,
    NavigationModalWrapper,
} from "@/components/NavigationModal/styled";
import { SearchLocation } from "@/components/SearchLocation";
import { SelectAPI } from "@/components/SelectAPI";

export const NavigationModal = (props) => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);

    return (
        <NavigationModalWrapper>
            <ContentWrapper>
                <SearchLocation currentLocation={currentLocation} />
                <SelectAPI />
            </ContentWrapper>
            <CloseBtn onClick={() => props.onClose(false)}>
                <span></span>
                <span></span>
            </CloseBtn>
        </NavigationModalWrapper>
    );
};
