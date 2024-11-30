import React, {useState} from "react";
import {SectionTitle} from "../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/tabMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import SocialNetworkImg from "../../../assets/images/proj1 (1).webp";
import TimerImg from "../../../assets/images/proj2 (1).webp";
import {Container} from "../../components/Container";
import {S} from "./Works_Styles";
import {Fade} from "react-awesome-reveal";
import {motion} from "motion/react"
import {AnimatePresence} from "motion/react"

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
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
        status: "react",
    },
    {
        title: "SPA",
        status: "spa",
    },
]

const worksData = [
    {
        id: 1,
        src: SocialNetworkImg,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        id: 2,
        src: TimerImg,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
    },
    {
        id: 3,
        src: SocialNetworkImg,
        title: "Social Network2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "landing",
    },
    {
        id: 4,
        src: TimerImg,
        title: "Timer2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
    },
    {
        id: 5,
        src: SocialNetworkImg,
        title: "Social Network3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        id: 6,
        src: TimerImg,
        title: "Timer3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa");
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id='projects'>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <Fade delay={200}>
                    <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                        <AnimatePresence>
                            {filteredWorks.map((w) => {
                                return (
                                    <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "500px"}}
                                        key={w.id}
                                        layout={true}
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                    >
                                        <Work
                                            key={w.id}
                                            src={w.src}
                                            title={w.title}
                                            text={w.text}
                                        />
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </FlexWrapper>
                </Fade>
            </Container>
        </S.Works>
    );
};
