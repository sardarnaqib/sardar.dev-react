import React, { useEffect, useRef } from "react";
import { withTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import Skeleton from "./Skeleton";

const Skills = ({ add_to_ref: addToRef, t, tReady }) => {
    const rank = useRef([]);
    const theme = useTheme();
    const skills = [
        { id: 1, width: "90%", text: "Html" },
        { id: 2, width: "90%", text: "Css" },
        { id: 3, width: "75%", text: "Bootstrap" },
        { id: 4, width: "85%", text: "Material-ui" },
        { id: 5, width: "85%", text: "JavaScript" },
        { id: 6, width: "75%", text: "jQuery" },
        { id: 7, width: "80%", text: "Reactjs" },
        { id: 8, width: "80%", text: "PHP" },
        { id: 9, width: "80%", text: "Symfony" },
        { id: 10, width: "75%", text: "api-platform" },
        { id: 11, width: "75%", text: "MySql" },
        { id: 12, width: "75%", text: "Git" },
    ];
    const StyledLine = styled.div`
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.menuColor};
        margin-top: 5px;
        position: relative;
        &:after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: ${(props) => props.width};
            height: 10px;
            background-color: #43ab92;
            border-radius: 5px;
        }
    `;
    const StyledListGroupItem = styled.div`
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.color};
        & > div.percentage {
        }
        & > div.tech-line-holder {
            width: calc(100% - 20px);
            margin-left: 20px;
            height: 50px;
        }
    `;

    useEffect(() => {
        rank.current.forEach((element) => {
            let ranks = element.childNodes;
            let rankNumber = element.getAttribute("data-rank");
            ranks.forEach((el, index) => {
                if (!el.classList.contains("rank-bg")) {
                    if (index >= rankNumber) {
                        return;
                    }
                    el.classList.add("rank-bg");
                }
            });
        });
    }, [theme]);
    const proSkillAddToRef = (el) => {
        if (el && !rank.current.includes(el)) {
            rank.current.push(el);
        }
    };
    return (
        <section id="nq-skills" className="nq-skills pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 position-relative ">
                        <div className="py-2 text-center position-relative">
                            <h1 className="title text-uppercase">
                                {!tReady ? (
                                    <Skeleton
                                        width="150px"
                                        height="40px"
                                        style={{ margin: "auto" }}
                                    />
                                ) : (
                                    t("skills")
                                )}
                            </h1>
                        </div>
                        <ul className="skills list-group-flush mt-4">
                            {skills.map((skill) => (
                                <li
                                    key={skill.id}
                                    ref={addToRef}
                                    className="list-group-item animated p-0"
                                >
                                    <StyledListGroupItem>
                                        <div className="percentage">
                                            {skill.width}
                                        </div>
                                        <div className="tech-line-holder">
                                            <span className="tech">
                                                {skill.text}
                                            </span>
                                            <StyledLine
                                                width={skill.width}
                                            ></StyledLine>
                                        </div>
                                    </StyledListGroupItem>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 pro-skills pb-3">
                        <div className="py-3 text-center position-relative">
                            <h1 className="title text-uppercase">
                                {!tReady ? (
                                    <Skeleton
                                        width="250px"
                                        height="40px"
                                        style={{ margin: "auto" }}
                                    />
                                ) : (
                                    t("professional_skills.title")
                                )}
                            </h1>
                        </div>
                        <ul>
                            <li
                                ref={addToRef}
                                className="d-flex flex-row justify-content-between align-items-center animated"
                            >
                                <h6>
                                    {!tReady ? (
                                        <Skeleton width="250px" height="15px" />
                                    ) : (
                                        t("professional_skills.problem_solving")
                                    )}
                                </h6>
                                <Rank
                                    custom_ref={proSkillAddToRef}
                                    rank_number={5}
                                />
                            </li>
                            <li
                                ref={addToRef}
                                className="d-flex flex-row justify-content-between align-items-center animated"
                            >
                                <h6>
                                    {!tReady ? (
                                        <Skeleton width="250px" height="15px" />
                                    ) : (
                                        t("professional_skills.communication")
                                    )}
                                </h6>
                                <Rank
                                    custom_ref={proSkillAddToRef}
                                    rank_number={5}
                                />
                            </li>
                            <li
                                ref={addToRef}
                                className="d-flex flex-row justify-content-between align-items-center animated"
                            >
                                <h6>
                                    {!tReady ? (
                                        <Skeleton width="250px" height="15px" />
                                    ) : (
                                        t("professional_skills.creative")
                                    )}
                                </h6>
                                <Rank
                                    custom_ref={proSkillAddToRef}
                                    rank_number={5}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default withTranslation()(Skills);

const Rank = ({ custom_ref: customRef, rank_number: rankNumber }) => {
    const StyledRank = styled.div`
        & > span {
            width: 15px;
            height: 15px;
            border-radius: 30px;
            margin-right: 5px;
            background-color: ${(props) => props.theme.menuColor};
            &:last-child {
                margin-right: 0px;
            }
        }
        & span.rank-bg {
            background-color: ${(props) => props.theme.skillColor};
        }
    `;

    return (
        <StyledRank
            className="d-flex flex-row justify-content-end"
            ref={customRef}
            data-rank={rankNumber}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </StyledRank>
    );
};
