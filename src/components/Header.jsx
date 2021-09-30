import React from "react";
import styled from "styled-components";
import { light } from "../theme";

const StyledMenuIcon = styled.i`
    color: ${(props) => props.theme.menuColor};
    font-size: 30px;
`;
const StyledThemeToggle = styled.div`
    position: absolute;
    right: 10px;
    top: 15px;
`;
export const StyledAnchor = styled.a`
    color: ${(props) => props.theme.color};
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.color};
    }
`;
const StyleHeader = styled.header`
    background: ${(props) => props.theme.body};
`;
export default function Header({ toggle_button: themeToggle, theme }) {
    return (
        <StyleHeader className={`nq-header pt-3 pb-3 fixed-top`}>
            <div className="container fadeInUp">
                <div className="row">
                    <nav className="navbar navbar-expand-lg p-relative">
                        <div className="container-fluid px-0">
                            <button
                                className="navbar-toggler p-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <StyledMenuIcon className="bi bi-list"></StyledMenuIcon>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link active"
                                            href="#nq-home"
                                        >
                                            Home
                                        </StyledAnchor>
                                    </li>
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link"
                                            href="#nq-about"
                                        >
                                            About
                                        </StyledAnchor>
                                    </li>
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link"
                                            href="#nq-skills"
                                        >
                                            Skills
                                        </StyledAnchor>
                                    </li>
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link"
                                            href="#nq-portfolio"
                                        >
                                            Portfolio
                                        </StyledAnchor>
                                    </li>
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link"
                                            href="#nq-contact"
                                        >
                                            Contact
                                        </StyledAnchor>
                                    </li>
                                </ul>
                            </div>
                            <StyledThemeToggle className="form-check form-switch">
                                <div className="d-flex">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onClick={themeToggle}
                                    />
                                    <label className="form-check-label">
                                        {theme === "light" ? (
                                            <i className="bi bi-moon-fill"></i>
                                        ) : (
                                            <i className="bi bi-brightness-high-fill"></i>
                                        )}
                                    </label>
                                </div>
                            </StyledThemeToggle>
                        </div>
                    </nav>
                </div>
            </div>
        </StyleHeader>
    );
}
