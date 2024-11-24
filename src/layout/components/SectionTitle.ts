import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmin: 30, Fmax: 36})};

    text-align: center;
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
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }

`
