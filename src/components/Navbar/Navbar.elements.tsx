import styled from "styled-components";

export const Container = styled.section`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`;

export const Head = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryColor};
`;

export const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
`;

export const NavIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const CheckBoxWrapper = styled.div`
    position: relative;
`;
export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;
export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: #4fbe79;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;
