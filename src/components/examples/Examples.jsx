import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WhiteBG = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eee;
    color: #000;
`;

export default function Examples() {
    return (
        <WhiteBG className=" py-5 px-5">
            <GoBackHome />

            <div className="mt-5">
                <h4>Examples</h4>
                <ul className="list-group">
                    <Link
                        className="list-group-item list-group-item-action"
                        to="/examples/multistepforms"
                    >
                        Multi step forms
                    </Link>
                </ul>
            </div>
        </WhiteBG>
    );
}

export const GoBackHome = () => {
    const BackHomeButton = styled.div`
        position: fixed;
        top: 50px;
        right: 50px;
    `;
    return (
        <BackHomeButton className="mb-3">
            <Link className="btn btn-primary" to="/">
                Go back home
            </Link>
        </BackHomeButton>
    );
};
