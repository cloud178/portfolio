import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    <Skill iconId={"htmlSvg"} title={"html5"} height={"80"} width={"80"} viewBox={"6 7 107 107"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"cssSvg"} title={"css3"} height={"80"} width={"80"} viewBox={"8 7 106 106"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"jsSvg"} title={"js"} height={"80"} width={"80"} viewBox={"5 5 108 108"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"reactSvg"} title={"react"} height={"80"} width={"80"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"gitSvg"} title={"git"} height={"80"} width={"80"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"githubSvg"} title={"github"} height={"80"} width={"80"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"typeScriptSvg"} title={"typescript"} viewBox={"0 0  35 35"} height={"80"}
                           width={"80"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"styledComponentsSvg"} title={"styled components"} height={"80"} width={"80"}
                           viewBox={"0 0  35 35"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
`
