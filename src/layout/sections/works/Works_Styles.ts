import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "../../components/Link";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";


type StyledWorksPropsType = {};

const Works = styled.section<StyledWorksPropsType>`
    ${FlexWrapper} {
        gap: 30px;
    }
`;

const Work = styled.div`
    position: relative;
    background-color: ${theme.colors.primaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            padding-left: 20px;

            &:hover {
                &::after {
                    width: calc(100% - 20px);
                    left: 20px;
                }
            }
        }
    }

    @media ${theme.media.desktop} {
        max-width: 500px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: 0;

        &::before {
            width: 100%;
            height: 100%;
            z-index: -100;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }
    
    &:hover {
        
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 275px;
    object-fit: cover;
`

const Descrtiption = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Descrtiption,
    Title,
    Text,
}
