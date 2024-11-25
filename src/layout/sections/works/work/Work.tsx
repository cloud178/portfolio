import React from 'react';
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import { S } from '../Works_Styles';

type WorkPropsType = {
    src: string;
    title: string;
    text: string;
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>
            <S.Descrtiption>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>Live Preview</Link>
                <Link href={"#"}>View Code</Link>
            </S.Descrtiption>
        </S.Work>
    );
};
