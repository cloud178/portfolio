import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../components/FlexWrapper";

const Main = styled.section`
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 250px;
        height: 300px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;

    z-index: 0;

    &::before {
        position: absolute;

        content: "";
        display: inline-block;
        width: 100%;
        height: 110%;
        border: 2px solid ${theme.colors.font.fontSecondary};
        bottom: -15px;
        left: 10px;
        z-index: -100;

        @media ${theme.media.mobile} {
            height: 105%;
            left: 5px;
            bottom: -6px;
        }
    }

    &::after {
        position: absolute;

        content: "";
        display: inline-block;
        background-color: ${theme.colors.font.fontSecondary};
        width: 50%;
        height: 2px;
        bottom: -35px;
        right: 0;
        z-index: -100;

        @media ${theme.media.mobile} {
            bottom: -16px;
        }

    }
`

const Name = styled.h2`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})};
    letter-spacing: 0.05rem;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            background-color: ${theme.colors.font.fontSecondary};

            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -100;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmin: 20, Fmax: 27})};
    margin-bottom: 10px;

    p {
        display: none;
    }
`

const Text = styled.p`
    
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        gap: 65px;
    }

    @media screen and (max-width: 846px) {
        justify-content: center;
    }
`

export const S = {
    Main,
    Photo,
    PhotoWrapper,
    Name,
    MainTitle,
    Text,
    SmallText,
    StyledFlexWrapper,
}
