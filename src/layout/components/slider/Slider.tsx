import React from 'react';
import styled from "styled-components";
import webTemplate from "../../../assets/images/blog-web-template.webp"

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Image src={webTemplate}/>
                <Title>How to make web templates</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</Text>
                <Link>Learn more</Link>
            </Slide>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    justify-content: center;
`

const Slide = styled.div`
    background-color: #ecceb8;
    max-width: 400px;
    width: 100%;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
     height: 275px;
     object-fit: cover;
`

const Text = styled.p``

const Title = styled.h3``

const Link = styled.a``
