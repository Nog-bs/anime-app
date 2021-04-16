import React from "react";
import {
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    Container,
    Head,
    HeadContainer,
    Icon,
} from "./Navbar.elements";
import navIcon from "../../assets/icons/nav-icon.svg";

const Navbar = ({ themeToggler }: any) => {
    return (
        <>
            <Container>
                <HeadContainer>
                    <Icon alt="anime girl icon" src={navIcon} />
                    <Head>Baka List</Head>
                </HeadContainer>
                <CheckBoxWrapper>
                    <CheckBox
                        onClick={themeToggler}
                        id="checkbox"
                        type="checkbox"
                    />
                    <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
            </Container>
        </>
    );
};

export default Navbar;
