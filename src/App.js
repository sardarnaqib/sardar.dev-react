import React, { useEffect } from "react";
import "./scss/App.scss";
import styled, { ThemeProvider } from "styled-components";
import { dark, GlobalStyles, light } from "./theme";
import Home from "./components/Home";
import { getCookie } from "./components/Language";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Examples from "./components/examples/Examples";
import MultiStepForms from "./components/examples/MultiStepForms";

const StyledApp = styled.div`
    color: ${(props) => props.theme.color};
`;
// const StyledChatBot = styled.div`
//     position: fixed;
//     bottom: 50px;
//     right: 50px;
//     z-index: 999999;
// `;
// const chatBotTheme = {
//     background: "#f5f8fb",
//     // fontFamily: "Helvetica Neue",
//     headerBgColor: "#ff6f61",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#ff6f61",
//     botFontColor: "#fff",
//     userBubbleColor: "#fff",
//     userFontColor: "#4a4a4a",
// };
// TODO before making it to produce change email settings (headers) in php file
function App() {
    let currentTheme = getCookie("theme") || "dark";
    const [theme, setTheme] = React.useState(currentTheme);
    const themeToggler = () => {
        // set theme cookie to light or dark
        document.cookie = `theme=${theme === "light" ? "dark" : "light"}`;
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        console.log("pathChanged");
        // add class to all ref elements
        document.cookie = `theme=${theme}`;
    }, [theme]);

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}>
            <GlobalStyles />
            <StyledApp>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home theme={theme} theme_toggler={themeToggler} />
                        </Route>
                        <Route exact path="/examples">
                            <Examples />
                        </Route>
                        <Route exact path="/examples/multistepforms">
                            <MultiStepForms />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
