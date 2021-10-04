import React from "react";
import { withTranslation } from "react-i18next";
import Project from "./Project";
import Skeleton from "./Skeleton";

const Portfolio = ({ add_to_ref: addToRef, t, tReady }) => {
    const projects = [
        {
            id: 1,
            title: "Resturant Istanbul",
            link: "http://restoistanbul.com/",
            techs: ["Reactjs", "SCSS", "Bootstrap 4"],
            imageUrl: process.env.PUBLIC_URL + "restoIstanbul.png",
        },
        {
            id: 2,
            title: "BeSound",
            link: "https://codepen.io/KhanSar/full/RJqORr",
            techs: ["Html", "Css"],
            imageUrl: process.env.PUBLIC_URL + "beSound.png",
        },
    ];
    return (
        <section id="nq-portfolio" className="nq-portfolio">
            <div className="container">
                <div className="w-100 py-3 text-center position-relative">
                    <h1 className="title text-uppercase">
                        {!tReady ? (
                            <Skeleton
                                width="200px"
                                height="40px"
                                style={{ margin: "auto" }}
                            />
                        ) : (
                            t("portfolio.title")
                        )}
                    </h1>
                </div>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        index={index}
                        title={project.title}
                        link={project.link}
                        techs={project.techs}
                        image_url={project.imageUrl}
                        add_to_ref={addToRef}
                    />
                ))}
            </div>
        </section>
    );
};
export default withTranslation()(Portfolio);
