import React from 'react';
import styled from "styled-components";
import {Icon} from "../components/icon/Icon";
import {FlexWrapper} from "../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Text>My social media links</Text>
                <SocialList>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedinSvg2"} width={"20"} height={"20"} viewBox={"0 0 23 23"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"githubSvg2"} width={"20"} height={"20"} viewBox={"0 0 22 22"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"telegramSvg"} width={"20"} height={"20"} viewBox={"0 0 23 23"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"mailSvg"} width={"20"} height={"20"} viewBox={"0 0 22 22"}/>
                        </SocialLink>
                    </SocialItem>
                    </SocialList>
                <Copyright>© Denis Biryukov. All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #acffa6;
    min-height: 20vh;
`

const Text = styled.span``

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li``

const SocialLink = styled.a``

const Copyright = styled.small``
