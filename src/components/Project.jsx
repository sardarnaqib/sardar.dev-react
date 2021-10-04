import React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { StyledAnchor } from "./Header";
import Skeleton from "./Skeleton";

const Tech = styled.li`
    color: #eee;
    list-style: none;
    display: inline;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 15px;
    font-size: 16px;
    background-color: ${(props) => props.theme.skillColor};
`;
const StyledProject = styled.div`
    position: relative;
    padding: 0;
    &:after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.color};
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;

const Project = ({
    title,
    link,
    techs,
    image_url: imageUrl,
    add_to_ref: addToRef,
    index,
    t,
    tReady,
}) => {
    return (
        <StyledProject className="row py-5">
            <div className="col-12 col-md-12 col-lg-6 pt-5 proj-detail">
                <div ref={addToRef} className="animated proj-header">
                    <StyledAnchor target="_blank" href={link} rel="noreferrer">
                        <h3 className="">{title}</h3>
                    </StyledAnchor>
                </div>
                <div className="py-3 my-4">
                    <div ref={addToRef} className="pfont-size animated">
                        {!tReady ? (
                            <>
                                <Skeleton
                                    width="100%"
                                    height="15px"
                                    style={{
                                        margin: "auto",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Skeleton
                                    width="70%"
                                    height="15px"
                                    style={{ margin: "auto" }}
                                />
                            </>
                        ) : (
                            t("portfolio.project", {
                                returnObjects: true,
                            })[index].description
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        <h4 ref={addToRef} className="animated">
                            {!tReady ? (
                                <Skeleton
                                    width="200px"
                                    height="20px"
                                    className="tech_skeleton"
                                />
                            ) : (
                                t("portfolio.tech_used")
                            )}
                        </h4>
                    </div>
                    <ul ref={addToRef} className="p-0 mt-3 animated">
                        {techs.map((tech, index) => (
                            <Tech key={index} className="tech-lang">
                                {tech}
                            </Tech>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 pt-5">
                <div ref={addToRef} className="animated">
                    <img className="img-fluid" src={imageUrl} alt={title} />
                </div>
            </div>
        </StyledProject>
    );
};

export default withTranslation()(Project);
