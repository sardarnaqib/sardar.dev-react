import React from "react";
import styled from "styled-components";
import { light } from "../theme";

export default function Skeleton({
    width = "100px",
    height = "20px",
    circle = false,
    ...props
}) {
    const StyledSkeleton = styled.div`
        width: ${width};
        height: ${height};
        background-color: ${(props) =>
            props.theme === light
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.2)"};
        border-radius: ${circle
            ? () => {
                  let str = width.replace("px", "");
                  return parseInt(str) * 2 + "px";
              }
            : "5px"};
        color: ${(props) =>
            props.theme === light
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.2)"};
    `;
    return <StyledSkeleton {...props}>{props.children}</StyledSkeleton>;
}
