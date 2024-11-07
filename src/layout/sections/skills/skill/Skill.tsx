import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
    viewBox?: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(255, 246, 246, 0.62);
    margin: 10px;
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`

`