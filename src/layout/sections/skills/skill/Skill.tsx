import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <IconContainer>
                    <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
                </IconContainer>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
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