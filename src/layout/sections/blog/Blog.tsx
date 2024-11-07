import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle>Blog</SectionTitle>
            <FlexWrapper justify={"center"}>
                <Icon iconId={"blogSvg"} width={"120"} height={"120"} viewBox={"0 0 34 34"}/>
            </FlexWrapper>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua Ut enim
            </Text>
            <Slider></Slider>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #8effe5;
    min-height: 100vh;
`

const Text = styled.p`

`
