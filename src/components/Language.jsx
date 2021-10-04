import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
    { code: "en", name: "English", country_code: "gb" },
    { code: "fr", name: "Français", country_code: "fr" },
];
export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return parts
            .pop()
            .split(";")
            .shift();
}
const LngButton = styled.button`
    background: #ff6f61;
    color: ${(props) => props.theme.color};
    z-index: 1;
    &:after {
        margin-left: 20px;
    }
    &:hover {
        color: ${(props) => props.theme.color};
    }
`;
const Menu = styled.ul`
    min-width: 9.1rem;
    background-color: #ff867a;
    li {
        padding: 5px 10px;
        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        button {
            color: ${(props) => props.theme.color};
            &:hover {
                background: none;
            }
            &:disabled {
                color: ${(props) => props.theme.color};
                opacity: 0.5;
            }
        }
    }
`;

const Language = ({ t, tReady }) => {
    const currentLanguageCode = getCookie("i18next") || "en";

    return (
        <>
            <div className="btn-group mx-2">
                <LngButton
                    className="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {!tReady ? "Loading..." : t("config.language")}
                </LngButton>
                <Menu className="dropdown-menu">
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button
                                className="dropdown-item"
                                disabled={currentLanguageCode === lang.code}
                                onClick={() => {
                                    i18next.changeLanguage(lang.code);
                                }}
                            >
                                <span
                                    className={`flag-icon flag-icon-${lang.country_code} mx-2`}
                                    style={{
                                        opacity:
                                            currentLanguageCode === lang.code
                                                ? 0.5
                                                : 1,
                                    }}
                                ></span>
                                {lang.name}
                            </button>
                        </li>
                    ))}
                </Menu>
            </div>
        </>
    );
};
export default withTranslation()(Language);
