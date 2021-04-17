// theme.ts
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        cardPimary?: string;
        cardSecondary?: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#202D36",
    secondaryColor: "#FCFBF6",
    cardPimary: "#ECE9E0",
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#FCFBF6",
    secondaryColor: "#3B393C",
    cardPimary: "#69696C",
};
