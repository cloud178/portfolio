import styled from "styled-components";
import {Icon} from "../components/icon/Icon";
import {FlexWrapper} from "../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Text>My social media links</Text>
                <SocialList>
                    <SocialItem>
                        <SocialLink href="https://www.linkedin.com/in/denis-birukou-6845a9245/">
                            <Icon iconId={"linkedinSvg2"} width={"20"} height={"20"} viewBox={"0 0 24 24"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="https://github.com/cloud178">
                            <Icon iconId={"githubSvg4"} width={"20"} height={"20"} viewBox={"1 1 22 22"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="https://t.me/Biryuko_ov">
                            <Icon iconId={"telegramSvg"} width={"20"} height={"20"} viewBox={"1 1 23 23"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"mailSvg"} width={"20"} height={"20"} viewBox={"1 1 22 22"}/>
                        </SocialLink>
                    </SocialItem>
                    </SocialList>
                <Copyright>© Denis Biryukov. All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Text = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 1px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 10px 0;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: ${theme.colors.font.fontSecondary};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    
    &:hover {
        color: ${theme.colors.font.fontPrimary};
        transform: translateY(-5px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`
