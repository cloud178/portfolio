import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Slider} from "../../components/slider/Slider";

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle>Blog</SectionTitle>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                <StyledICon iconId={"blogSvg"} width={"60"} height={"60"} viewBox={"0 0 32 32"}/>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua Ut enim
                </Text>
                <Slider/>
            </FlexWrapper>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
`

const StyledICon = styled(Icon)`
    margin-bottom: 50px;
`

const Text = styled.p`
`
