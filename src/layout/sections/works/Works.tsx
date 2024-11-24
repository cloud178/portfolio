import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { TabMenu } from "./tabMenu/tabMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Work } from "./work/Work";
import SocialNetworkImg from "../../../assets/images/proj1 (1).webp";
import TimerImg from "../../../assets/images/proj2 (1).webp";
import { Container } from "../../components/Container";
import { S } from "./Works_Styles";

const worksItems = ["All", "Landing Page", "React", "SPA"];

const workData = [
    {
        src: SocialNetworkImg,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        src: TimerImg,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
];

export const Works: React.FC = () => {
    return (
        <S.Works id='Projects'>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {workData.map((w, index) => {
                        return <Work
                            src={w.src} key={index}
                            title={w.title}
                            text={w.text}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
