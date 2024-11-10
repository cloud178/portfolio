import React from 'react';
import profilePicture from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                <span>Hi There,</span>
                    <Name>My name is Denis Biryukov</Name>
                    <MainTitle>I am a Web developer 😎</MainTitle>
                </div>
                <Photo src={profilePicture} alt="my profile picture"/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #baffb5;
`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`
