import React from "react";
import CarouselHolder from "./CarouselHolder";
import { StyledAnchor } from "./Header";

export default function About({ add_to_ref: addToRef }) {
    const programerImage = process.env.PUBLIC_URL + "/programmer.png";
    return (
        <section className="nq-about pb-4" id="nq-about">
            <div className="container">
                <div className="row py-5">
                    <div className="w-100 py-3 text-center p-relative">
                        <h1 className="title text-uppercase p-relative">
                            About me
                        </h1>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 nq-desc">
                        <div ref={addToRef} className="p-5 animated">
                            <p className="pfont-size">
                                Hello, I'm SARDAR KHAN a{" "}
                                <strong>
                                    Full-stack Web developer / Reactjs / Symfony
                                    4+ / Api-platform
                                </strong>{" "}
                                who specializes in creating dynamic and
                                beautiful web pages.
                            </p>
                            <p className="pfont-size">
                                I have been in the field for nearly 2+ years,
                                and have been loving every minute of it. I am a
                                researcher, entrepreneur, developer and over all
                                problem solver. Check out some of my work below
                                to see what I’ve been up to lately.
                            </p>
                        </div>
                        <div
                            ref={addToRef}
                            className="w-100 lets-chat py-2 animated"
                        >
                            <p>Lets have a quick chat</p>
                            <StyledAnchor
                                href="mailto:"
                                className="outline-btn"
                            >
                                <i className="bi bi-envelope-fill"></i>
                                <span>Email</span>
                            </StyledAnchor>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 nq-image">
                        <div ref={addToRef} className="animated">
                            <img
                                className="img-fluid"
                                src={programerImage}
                                alt="Programmer"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={addToRef} className="container animated">
                <CarouselHolder />
            </div>
        </section>
    );
}
