import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;

    position: relative;
    z-index: 0;

    &:hover {
        &::after {
            height: 10px;
        }
    }

    &::after {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.font.fontSecondary};

        position: absolute;
        bottom: 6px;
        width: calc(100% + 4px);
        left: -2px;
        z-index: -100;
        
        //left: -2px;
        //right: -2px;
    }
`
