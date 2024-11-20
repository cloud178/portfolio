import React from 'react';
import profilePicture from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain id='Home'>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <FlexWrapper direction={"column"} justify={"center"} width={"50%"}>
                        <SmallText>Hi There,</SmallText>
                        <Name>My name is <span>Denis Biryukov</span></Name>
                        <MainTitle>I am a Web developer 😎</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium, voluptas?
                            Amet
                            aperiam eos facere, illo laborum nulla odio reprehenderit. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci alias aspernatur beatae consectetur consequuntur
                            deserunt
                            eos exercitationem, illum itaque, magnam mollitia necessitatibus nemo non pariatur
                            repellendus
                            sequi ut. Alias, quisquam?</Text>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Photo src={profilePicture} alt="my profile picture"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`

const PhotoWrapper = styled.div`
    position: relative;  
    
    z-index: 0;
    
    &::before {
        position: absolute;

        content: "";
        display: inline-block;
        width: 100%;
        height: 110%;
        border: 2px solid ${theme.colors.font.fontSecondary};
        bottom: -15px;
        left: 20px;
        z-index: -100;
    }
    
    &::after {
        position: absolute;

        content: "";
        display: inline-block;
        background-color: ${theme.colors.font.fontSecondary};
        width: 50%;
        height: 2px;
        bottom: -35px;
        right: 0;
        z-index: -100;

    }
`

const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 0.05rem;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            background-color: ${theme.colors.font.fontSecondary};

            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -100;
        }
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    margin-bottom: 10px;
`


const Text = styled.p`

`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`
