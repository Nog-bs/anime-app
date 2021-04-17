import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 85vh;
`;

export const Searchbar = styled.input`
    height: 50px;
    padding: 6px;
    border-radius: 0 6px 6px 0;
    border: none;
    outline: none;
    margin-top: 24px;
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
export const Error = styled.p`
    color: #ff0033;
    font-weight: 700;
    align-self: center;
`;

// DISPLAY CONTENT
export const SearchDisplay = styled.div`
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
