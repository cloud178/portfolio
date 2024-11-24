import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { S } from '../Skills_Styles';

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
        <S.Skill>
            <FlexWrapper direction="column" align="center">
                <S.IconContainer>
                    <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
                </S.IconContainer>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};
