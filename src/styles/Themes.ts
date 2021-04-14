// theme.ts
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#202D36",
    secondaryColor: "#FAFAFA",
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#FAFAFA",
    secondaryColor: "#202D36",
};
