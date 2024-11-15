import React from 'react';
import styled from "styled-components";
import webTemplate from "../../../assets/images/blog-web-template.webp"
import { FlexWrapper } from '../FlexWrapper';
import {theme} from "../../../styles/Theme";
import {Link} from "../Link";

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
                <span className={"active"}> </span>
                <span> </span>   
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 10px;
`

const Slide = styled.div`
    background-color: ${theme.colors.secondaryBg};
    text-align: center;
    height: 430px;
    
    ${Link} {
        padding-left: 0;
        padding-right: 0;

        &:hover {
            &::after {
                width: 100%;
                left: 0px;
            }
    }
`

const Image = styled.img`
    width: 100%;
     height: 275px;
     object-fit: cover;
`

const Title = styled.h3`
    margin-top: 25px;
    margin-bottom: 8px;
`

const Text = styled.p`
    margin-bottom: 10px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.font.fontSecondary};
            width: 20px;
        }
    }
`
