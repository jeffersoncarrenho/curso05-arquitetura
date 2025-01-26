import React from "react";
import styled from "styled-components";

const StyledTxt = styled.span`
    font-family: sans-serif;
`;

interface TextProps {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    children: React.ReactNode;
}
export function Text({ children, tag, ...props }: TextProps) {
    return (
        <StyledTxt as={tag} {...props}>
            {children}
        </StyledTxt>
    );
}
