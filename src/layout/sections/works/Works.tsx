import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { TabMenu } from "./tabMenu/tabMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Work } from "./work/Work";
import SocialNetworkImg from "../../../assets/images/proj1 (1).webp";
import TimerImg from "../../../assets/images/proj2 (1).webp";
import { Container } from "../../components/Container";

const worksItems = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
    return (
        <StyledWorks id='Projects'>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work
                        src={SocialNetworkImg}
                        title={"Social Network"}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }
                    />
                    <Work
                        src={TimerImg}
                        title={"Timer"}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

type StyledWorksPropsType = {};

const StyledWorks = styled.section<StyledWorksPropsType>`
    ${FlexWrapper} {
        gap: 30px;
    }
`;
