import React from "react";
import styled from "styled-components";

export const StyledIcon = styled.span`
    font-size: 3rem;
    & > i {
        color: ${(props) => props.theme.carouselIconColor};
    }
`;
const StyledTitle = styled.h4`
    font-size: 1.5rem;
    color: ${(props) => props.theme.carouselIconColor};
    font-weight: 600;
`;
export default function CarouselItem(props) {
    const { icon, title, description } = props;
    return (
        <div {...props}>
            <div>
                <StyledIcon>{icon}</StyledIcon>
                <StyledTitle className="text-uppercase my-4">
                    {title}
                </StyledTitle>
                <p className="pfont-size">{description}</p>
            </div>
        </div>
    );
}
