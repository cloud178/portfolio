import React from 'react';
import styled from "styled-components";
import {theme} from '../../../../styles/Theme';
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

type WorkPropsType = {
    src: string;
    title: string;
    text: string;
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>VIEW PROJECT</Button>
            </ImageWrapper>
            <Descrtiption>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>Live Preview</Link>
                <Link href={"#"}>View Code</Link>
            </Descrtiption>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.primaryBg};
    max-width: 500px;
    width: 100%;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            padding-left: 20px;
            
            &:hover {
                &::after {
                    width: calc(100% - 20px);
                    left: 20px;
            }
        }
    }

    &::after {
        width: 100%;
        left: 0;

    }
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: 0;

        &::before {
            width: 100%;
            height: 100%;
            z-index: -100;
    }
`

const Image = styled.img`
    width: 100%;
    height: 275px;
    object-fit: cover;
`

const Descrtiption = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
    margin: 14px 0 10px;
`
