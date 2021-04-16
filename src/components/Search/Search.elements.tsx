import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
`;

export const Searchbar = styled.input`
    height: 50px;
    padding: 6px;
    border-radius: 0 6px 6px 0;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    height: 50px;
    padding: 6px;
    border-radius: 6px 0 0 6px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
`;

export const Form = styled.form``;
