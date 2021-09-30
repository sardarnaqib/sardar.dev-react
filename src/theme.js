import { createGlobalStyle } from "styled-components";

export const light = {
    body: "#fff",
    color: "#2e2e2e",
    menuColor: "#2e2e2e",
};
export const dark = {
    body: "#2e2e2e",
    color: "#fff",
    menuColor: "#ff6f61",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
