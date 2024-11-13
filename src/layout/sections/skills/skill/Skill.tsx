import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";


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
    width: 380px;
    padding: 62px 20px 40px;
`

const IconContainer = styled.div`
    transition: transform 0.3s ease;
    transform-origin: center;

    &:hover {
        transform: scale(1.2);
    }
`

const SkillTitle = styled.h3`
    margin: 30px 0 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
`