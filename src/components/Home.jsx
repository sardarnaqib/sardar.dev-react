import React, { useEffect, useRef } from "react";
import Header, { StyledAnchor } from "./Header";
import { withTranslation } from "react-i18next";
import Skeleton from "./Skeleton";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ({ t, tReady, theme_toggler: themeToggler, theme }) => {
    const sections = useRef([]);
    sections.current = [];
    const addToRef = (el) => {
        if (el && !sections.current.includes(el)) {
            sections.current.push(el);
        }
    };
    useEffect(() => {
        const sectionOptions = {
            root: null,
            threshold: 0.25,
            rootMargin: "-80px",
        };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("fadeInUp");
                }
            });
        }, sectionOptions);
        sections.current.forEach((section) => {
            sectionObserver.observe(section);
        });
    }, []);
    return (
        <>
            <Header toggle_button={themeToggler} theme={theme} />
            <HomeSection t_ready={tReady} t={t} add_to_ref={addToRef} />
            <About add_to_ref={addToRef} />
            <Skills add_to_ref={addToRef} />
            <Portfolio add_to_ref={addToRef} />
            <Contact add_to_ref={addToRef} />
            <Footer />
        </>
    );
};

const HomeSection = ({ add_to_ref: addToRef, t_ready: tReady, t }) => {
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
                    <div className="col-12 col-lg-6 mt-5">
                        <div className="header-info">
                            <div ref={addToRef} className="nq-info animated">
                                <div className="hello">
                                    <span>
                                        {!tReady ? (
                                            <Skeleton
                                                width="100px"
                                                height="20px"
                                            />
                                        ) : (
                                            t("hello_iam")
                                        )}
                                    </span>
                                </div>
                            </div>
                            <h2 ref={addToRef} className="animated">
                                Sardar Khan Naqib
                            </h2>
                            <h4 ref={addToRef} className="animated">
                                {!tReady ? (
                                    <Skeleton
                                        width="80%"
                                        height="30px"
                                        style={{ margin: "auto" }}
                                    />
                                ) : (
                                    t("web_developer")
                                )}
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
                                        Massy, France
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

export default withTranslation()(Home);
