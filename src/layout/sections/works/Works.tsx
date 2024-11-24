import React, {useState} from "react";
import {SectionTitle} from "../../components/SectionTitle";
import {TabMenu} from "./tabMenu/tabMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import SocialNetworkImg from "../../../assets/images/proj1 (1).webp";
import TimerImg from "../../../assets/images/proj2 (1).webp";
import {Container} from "../../components/Container";
import {S} from "./Works_Styles";

// const tabsItems = ["All", "Landing Page", "React", "SPA"];

const tabsItems: Array<{ title: string, status: "all" | "landing" | "React" | "spa" }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing Page",
        status: "landing",
    },
    {
        title: "React",
        status: "React",
    },
    {
        title: "SPA",
        status: "spa",
    },
]

const worksData = [
    {
        src: SocialNetworkImg,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        src: TimerImg,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "React",
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "React") {
        filteredWorks = worksData.filter(work => work.type === "React");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa");
    }

    function changeFilterStatus(value: "all" | "landing" | "React" | "spa") {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id='Projects'>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {filteredWorks.map((w, index) => {
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
