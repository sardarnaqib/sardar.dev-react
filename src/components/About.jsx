import React from "react";
import CarouselHolder from "./CarouselHolder";
import { StyledAnchor } from "./Header";
import { withTranslation } from "react-i18next";
import Skeleton from "./Skeleton";

const About = ({ add_to_ref: addToRef, t, tReady }) => {
    const programerImage = process.env.PUBLIC_URL + "/programmer1.png";
    return (
        <section className="nq-about pb-4" id="nq-about">
            <div className="container">
                <div className="row ">
                    <div className="w-100 py-3 text-center p-relative">
                        <h1 className="title text-uppercase p-relative">
                            {!tReady ? (
                                <Skeleton
                                    width="200px"
                                    height="40px"
                                    style={{ margin: "auto" }}
                                />
                            ) : (
                                t("about.about_me")
                            )}
                        </h1>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 nq-desc">
                        <div ref={addToRef} className="p-5 animated">
                            {!tReady ? (
                                <>
                                    {[...Array(7)].map((_, index) => {
                                        return (
                                            <Skeleton
                                                key={index}
                                                width={
                                                    index === 2 || index === 4
                                                        ? "50%"
                                                        : "100%"
                                                }
                                                height="10px"
                                                style={{
                                                    marginBottom: "10px",
                                                }}
                                            />
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    <p className="pfont-size">
                                        {t("hello_iam")} SARDAR KHAN
                                        <strong>
                                            {" "}
                                            {t("web_developer")}
                                        </strong>{" "}
                                        {t("about.about_me_bio.line1")}
                                    </p>
                                    <p className="pfont-size">
                                        {t("about.about_me_bio.line2")}
                                    </p>
                                </>
                            )}
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
            <div ref={addToRef} className="container lets-chat pb-3 animated">
                {!tReady ? (
                    <Skeleton width="50%" height="10px" />
                ) : (
                    <p>{t("about.lets_have_chat")}</p>
                )}
                <StyledAnchor href="mailto:" className="outline-btn">
                    <i className="bi bi-envelope-fill"></i>
                    <span>Email</span>
                </StyledAnchor>
            </div>
            <div ref={addToRef} className="container animated">
                <CarouselHolder />
            </div>
        </section>
    );
};
export default withTranslation()(About);
