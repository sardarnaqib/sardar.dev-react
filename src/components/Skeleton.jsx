import React from "react";
import styled from "styled-components";
import { light } from "../theme";
const StyledSkeleton = styled.div`
    //
    width: ${(props) => {
        // @ts-ignore
        return props.width ? props.width : "200px";
    }};
    height: ${(props) => {
        // @ts-ignore
        return props.height ? props.height : "30px";
    }};
    background-color: ${(props) =>
        props.theme === light
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)"};
    border-radius: ${(props) => {
        // @ts-ignore
        return props.circle
            ? () => {
                  // @ts-ignore
                  let str = props.width.replace("px", "");
                  return parseInt(str) * 2 + "px";
              }
            : "5px";
    }}
    color: ${(props) =>
        props.theme === light
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)"};
`;
export default function Skeleton(props) {
    return <StyledSkeleton {...props}>{props.children}</StyledSkeleton>;
}
