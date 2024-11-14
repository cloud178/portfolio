import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 3px;
    font-weight: 600;
    margin-bottom: 90px;

    position: relative;

    &::after {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.font.fontSecondary};
        height: 3px;
        width: 55px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }

`
