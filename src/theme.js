import { createGlobalStyle } from "styled-components";

// TODO when theme is changed store it in cookies or localstorage
// TODO Add multilanguage support
export const light = {
    body: "#fff",
    color: "#2e2e2e",
    menuColor: "#2e2e2e",
    carouselIconColor: "#2e2e2e",
    skillColor: "#43ab92",
    techColor: "#ff6f61",
    error: "#dc3545",
};
export const dark = {
    body: "#2e2e2e",
    color: "#fff",
    menuColor: "#ff6f61",
    carouselIconColor: "#fd7e72",
    skillColor: "#43ab92",
    techColor: "#ff6f61",
    error: "#ff6f61",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
