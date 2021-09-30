import React from "react";
import { StyledAnchor } from "./Header";

const Home = ({ add_to_ref: addToRef }) => {
    const profileImage = process.env.PUBLIC_URL + "/nq-image.jpeg";
    return (
        <section className="nq-home" id="nq-home">
            <div className="container">
                <div className="row home-row">
                    <div className="img-col col-12 col-lg-6">
                        <div
                            ref={addToRef}
                            className="mx-auto text-center animated"
                        >
                            <div className="img-border">
                                <img
                                    className="img-fluid"
                                    src={profileImage}
                                    alt="Sardar Khan"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="header-info">
                            <div ref={addToRef} className="nq-info animated">
                                <div className="hello">
                                    <span>Hello I'm</span>
                                </div>
                            </div>
                            <h2 ref={addToRef} className="animated">
                                Sardar Khan Naqib
                            </h2>
                            <h4 ref={addToRef} className="animated">
                                Full Stack Web Developer
                            </h4>
                            <ul
                                ref={addToRef}
                                className="pl-0 mt-4 animated info"
                            >
                                <li>
                                    <i className="bi bi-envelope-fill"></i>
                                    <StyledAnchor href="mailto:">
                                        sarkhan.naqib@gmail.com
                                    </StyledAnchor>
                                </li>
                                <li>
                                    <i className="bi bi-phone"></i>
                                    <span>+33 7 78 05 84 48</span>
                                </li>
                                <li>
                                    <i className="bi bi-geo-alt"></i>
                                    <StyledAnchor
                                        target="_blank"
                                        href=" http://maps.google.com/?q=8 allee des irlandais 91300 Massy France"
                                    >
                                        8 allee des irlandais 91300 Massy France
                                    </StyledAnchor>
                                </li>
                            </ul>

                            <hr
                                ref={addToRef}
                                className="animated glow-shadow"
                            />
                            <ul
                                ref={addToRef}
                                className="pl-0 list-inline animated"
                            >
                                <li className="list-inline-item">
                                    <StyledAnchor
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/sardarnaqib"
                                    >
                                        <i className="bi bi-github"></i>
                                    </StyledAnchor>
                                </li>
                                {/* <li className="list-inline-item">
                                    <StyledAnchor
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://codepen.io/KhanSar"
                                    >
                                        <i className="fab fa-codepen"></i>
                                    </StyledAnchor>
                                </li> */}
                                <li className="list-inline-item">
                                    <StyledAnchor
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/in/naqib-sardar-khan-522899170/"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </StyledAnchor>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
