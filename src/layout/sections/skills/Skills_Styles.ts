import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`

`;

const Skill = styled.div`
    width: 360px;
    padding: 62px 20px 40px;
    flex-grow: 1;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

const IconContainer = styled.div`

    @media (pointer: fine) {
        filter: grayscale(1);

        transition: transform 0.3s ease;
        transform-origin: center;

        &:hover {
            transform: scale(1.2);
            filter: grayscale(0);
        }
    }
`

const SkillTitle = styled.h3`
    margin: 30px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
`

export const S = {
    Skills,
    Skill,
    IconContainer,
    SkillTitle,
    SkillText,
}
