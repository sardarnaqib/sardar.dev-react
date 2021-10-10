// TODO design 404 page
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NotFoundIcon } from "./Icons";

const HomeButton = styled(Link)`
    padding: 10px 20px;
    background-color: #ff6f61;
    color: #fff;
    font-size: 20px;
    border-radius: 50px;
    & + div > p {
        color: ${(props) => props.theme.color};
    }
`;

export default function Page404() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-lg-6 mx-auto">
                    <NotFoundIcon />
                </div>
            </div>
            <div className="row">
                <div className=" col-sm-10 col-lg-6 mx-auto">
                    <div className="text-center">
                        <HomeButton className="btn" to="/">
                            Return to home
                        </HomeButton>
                        <div className="mt-3">
                            <p className="h4">
                                Oops the page you looking for is not found.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
