import React from "react";
import {Icon} from "../components/icon/Icon";
import {FlexWrapper} from "../components/FlexWrapper";
import { S } from "./Footer_Styles";

const SocialItemData = [
    {
        href: "https://www.linkedin.com/in/denis-birukou-6845a9245/",
        iconId: "linkedinSvg2",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
    },
    {
        href: "https://github.com/cloud178",
        iconId: "githubSvg4",
        width: "20",
        height: "20",
        viewBox: "1 1 22 22",
    },
    {
        href: "https://t.me/Biryuko_ov",
        iconId: "telegramSvg",
        width: "20",
        height: "20",
        viewBox: "1 1 23 23",
    },
    {
        href: "",
        iconId: "mailSvg",
        width: "20",
        height: "20",
        viewBox: "1 1 22 22",
    },
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Text>My social media links</S.Text>
                <S.SocialList>

                    {SocialItemData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink href={s.href} target={"_blank"}>
                                <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                    </S.SocialList>
                <S.Copyright>© Denis Biryukov. All rights reserved</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
