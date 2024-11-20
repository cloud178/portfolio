import React from 'react';
import profilePicture from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain id='Home'>
            <Container>
                <StyledFlexWrapper justify="space-between" align={"center"} wrap={"wrap"}
                                   gap={"100px"}
                >
                    <FlexWrapper direction={"column"} justify={"center"}
                                 // flex={"1 1 50%"}
                        // width={"50%"}
                        flexGrow={1}
                        flexBasis={"50%"}

                    >
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
                </StyledFlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    
    @media ${theme.media.mobile} {
        width: 250px;
        height: 300px;
    }
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
        left: 10px;
        z-index: -100;

        @media ${theme.media.mobile} {
            height: 105%;
            left: 5px;
            bottom: -6px;
        }
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

        @media ${theme.media.mobile} {
            bottom: -16px;
        }

    }
`

const Name = styled.h2`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})};
    letter-spacing: 0.05rem;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

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
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmin: 20, Fmax: 27})};
    margin-bottom: 10px;
`


const Text = styled.p`
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        gap: 65px;

    }
    
    @media screen and (max-width: 846px) {
        justify-content: center;
    }
`

// const TextFlexWrapper = styled(FlexWrapper)`
//     align-items: center;
// `
