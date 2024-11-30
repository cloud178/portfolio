import React from "react";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "htmlSvg",
        title: "html5",
        height: "80",
        width: "80",
        viewBox: "6 7 107 107",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "cssSvg",
        title: "css3",
        height: "80",
        width: "80",
        viewBox: "8 7 106 106",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "jsSvg",
        title: "js",
        height: "80",
        width: "80",
        viewBox: "5 5 108 108",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "reactSvg",
        title: "react",
        height: "80",
        width: "80",
        viewBox: "0 -5 113 113",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "gitSvg",
        title: "git",
        height: "80",
        width: "80",
        viewBox: "0 0 105 105",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "githubSvg2",
        title: "github",
        height: "80",
        width: "80",
        viewBox: "0 0 48 48",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enimLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "typeScriptSvg",
        title: "typescript",
        width: "80",
        height: "80",
        viewBox: "1 1 29 29",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
    {
        iconId: "styledComponentsSvg",
        title: "styled components",
        width: "80",
        height: "80",
        viewBox: "2 1 29 29",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        ,
    },
];

export const Skills = () => {
    return (
        <S.Skills id='tech stack'>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill
                                iconId={s.iconId} key={index}
                                title={s.title}
                                height={s.height}
                                width={s.width}
                                viewBox={s.viewBox}
                                description={s.description}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
