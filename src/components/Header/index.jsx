import { useState } from "react";
import { useSelector } from "react-redux";

import {
    HeaderWrapper, NavBar, NavBarMobile, NavBtn, Span,
} from "@/components/Header/styled";
import { NavigationModal } from "@/components/NavigationModal";
import { Portal } from "@/components/Portal";
import { SearchLocation } from "@/components/SearchLocation";
import { SelectAPI } from "@/components/SelectAPI";

export const Header = () => {
    const currentLocation = useSelector((state) => state.locationState.currentLocation);
    const [showModal, setShowModal] = useState(false);

    return (
        <HeaderWrapper>
            <NavBar>
                <SearchLocation currentLocation={currentLocation} />
                <SelectAPI />
            </NavBar>
            <NavBarMobile>
                <NavBtn onClick={() => setShowModal(!showModal)}>
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>
                </NavBtn>
                {showModal && (
                    <Portal>
                        <NavigationModal onClose={setShowModal} />
                    </Portal>
                )}
            </NavBarMobile>
        </HeaderWrapper>
    );
};
