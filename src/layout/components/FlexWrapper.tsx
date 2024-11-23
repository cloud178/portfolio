import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    justify?: string;
    align?: string;
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    width?: string;
    gap?: string;
    flex?: string;
    alignContent?: string;
    flexGrow?: number;
    flexBasis?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    width: ${props => props.width || "auto"};
    gap: ${props => props.gap || "0px"};
    flex: ${props => props.flex || undefined};
    align-content: ${props => props.alignContent || undefined};
    flex-grow: ${props => props.flexGrow || undefined};
    flex-basis: ${props => props.flexBasis || undefined};
`
