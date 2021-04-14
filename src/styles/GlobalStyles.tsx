import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/roboto-regular.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url(${Roboto});
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif, 'Times New Roman', Times, serif
  }
  
  body {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
    font-family: Tahoma, Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
  }
`;
