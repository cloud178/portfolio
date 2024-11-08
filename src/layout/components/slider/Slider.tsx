import React from 'react';
import styled from "styled-components";
import webTemplate from "../../../assets/images/blog-web-template.webp"
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Image src={webTemplate}/>
                    <Title>How to make web templates</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</Text>
                    <Link>Learn more</Link>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>   
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    // display: flex;
    // justify-content: center;
    border: 1px solid red;
    max-width: 400px;
    display: flex;
    flex-direction: column; 
    align-items: center;
`

const Slide = styled.div`
    background-color: #ecceb8;
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

const Pagination = styled.div`
    // background-color: #ecceb8;
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: deeppink;
    }
`
