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
            <div className="mb-3">
                <Link className="btn btn-primary" to="/">
                    Go back home
                </Link>
            </div>
            <ul className="list-group">
                <Link
                    className="list-group-item list-group-item-action"
                    to="/examples/multistepforms"
                >
                    Multi step forms
                </Link>
            </ul>
        </WhiteBG>
    );
}
