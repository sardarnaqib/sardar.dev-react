import React from "react";
import styled from "styled-components";
import { StyledAnchor } from "./Header";
const Icon = styled.i`
    font-size: 2em;
`;
export default function Footer() {
    return (
        <footer>
            <div className="container d-flex justify-content-between">
                <ul className="pl-0 list-inline animated fadeInUp">
                    <li className="list-inline-item mx-3">
                        <StyledAnchor
                            target="_blank"
                            href="https://github.com/sardarnaqib"
                            rel="noreferrer"
                        >
                            <Icon className="bi bi-github" />
                        </StyledAnchor>
                    </li>
                    <li className="list-inline-item mx-3">
                        <StyledAnchor
                            target="_blank"
                            href="https://www.linkedin.com/in/naqib-sardar-khan-522899170/"
                            rel="noreferrer"
                        >
                            <Icon className="bi bi-linkedin" />
                        </StyledAnchor>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
