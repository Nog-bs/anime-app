import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/Themes";
import { Navbar, Search } from "./components";

const App: React.FC = () => {
    const [theme, setTheme] = React.useState("light");
    const themeToggler = () => {
        return theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar themeToggler={themeToggler} />
            <Search />
        </ThemeProvider>
    );
};

export default App;
