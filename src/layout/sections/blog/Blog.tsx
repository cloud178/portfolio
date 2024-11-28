import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Slider } from "../../components/slider/Slider";
import { Container } from "../../components/Container";

export const Blog: React.FC = () => {
    return (
        <StyledBlog id="blog">
            <Container>
                <SectionTitle>Blog</SectionTitle>
                <FlexWrapper
                    justify={"center"}
                    align={"center"}
                    direction={"column"}
                >
                    {/* <StyledICon
                        iconId={"blogSvg"}
                        width={"60"}
                        height={"60"}
                        viewBox={"0 0 32 32"}
                    /> */}
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Ut enim
                    </Text>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`

`;

// const StyledICon = styled(Icon)`
//     margin-bottom: 30px;
// `;

const Text = styled.p`
    margin-bottom: 20px;
`;
