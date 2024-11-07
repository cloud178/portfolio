import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import SocialNetworkImg from "../../../assets/images/proj1 (1).webp";
import TimerImg from "../../../assets/images/proj2 (1).webp";

const worksItems = ['All', 'Landing Page', 'React', 'SPA'];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work src={SocialNetworkImg} title={"Social Network"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work src={TimerImg} title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};


type StyledWorksPropsType = {}

const StyledWorks = styled.section<StyledWorksPropsType>`
    min-height: 100vh;
    background-color: #f8aeff;
`
