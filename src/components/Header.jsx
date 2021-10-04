/* eslint-disable no-undef */
import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";
import styled from "styled-components";
import Language from "./Language";

const StyledMenuIcon = styled.i`
    color: ${(props) => props.theme.menuColor};
    font-size: 30px;
`;
const StyledThemeToggle = styled.div`
    & input {
        background-color: rgba(255, 255, 255, 0.8);
        &:checked {
            background-color: #ff6f61;
        }
    }
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

// add scroll event listener

const Header = ({ toggle_button: themeToggle, theme, t, tReady }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    function scrollPos(maxScrollPos) {
        let scrollPos = document.documentElement.scrollTop;
        if (scrollPos >= maxScrollPos) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    window.addEventListener("scroll", (event) => {
        scrollPos(100);
    });
    const Icon = styled.i`
        font-size: 1.3em;
    `;
    return (
        <StyleHeader
            className={`nq-header pt-3 pb-3 fixed-top ${
                isScrolled ? "glow-shadow" : ""
            }`}
        >
            <div className="container fadeInUp">
                <div className="row">
                    <nav
                        id="navbar"
                        className="navbar navbar-expand-lg p-relative"
                    >
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
                                <Scrollspy
                                    items={[
                                        "nq-home",
                                        "nq-about",
                                        "nq-skills",
                                        "nq-portfolio",
                                    ]}
                                    currentClassName="active"
                                    className="navbar-nav me-auto mb-2 mb-lg-0"
                                    offset={-200}
                                >
                                    <li className="nav-item">
                                        <StyledAnchor
                                            className="nav-link"
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
                                </Scrollspy>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,
                                }}
                                className="d-flex justify-content-space-between"
                            >
                                <StyledThemeToggle className="form-check form-switch">
                                    <div className="d-flex">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            onClick={themeToggle}
                                            style={{
                                                width: 40,
                                                height: 20,
                                            }}
                                        />
                                        <label className="form-check-label">
                                            {theme === "light" ? (
                                                <Icon className="bi bi-moon-fill" />
                                            ) : (
                                                <Icon className="bi bi-brightness-high-fill" />
                                            )}
                                        </label>
                                    </div>
                                </StyledThemeToggle>
                                <Language />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </StyleHeader>
    );
};

export default withTranslation()(Header);
