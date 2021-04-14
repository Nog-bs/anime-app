import {
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    Container,
    Head,
    HeadContainer,
    NavIcon,
} from "./Navbar.elements";
import icon from "../../assets/icons/nav-icon.svg";

const Navbar = ({ themeToggler }: any) => {
    return (
        <>
            <Container>
                <HeadContainer>
                    <NavIcon alt="anime girl icon" src={icon} />
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
