import styled from "styled-components";
import {Link} from "../Link";
import {theme} from "../../../styles/Theme";

const Slider = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    outline: 1px solid red;
`

const Slide = styled.div`
    background-color: ${theme.colors.secondaryBg};
    text-align: center;
    min-height: 430px;

    ${Link} {
        padding-left: 0;
        padding-right: 0;

        &:hover {
            &::after {
                width: 100%;
                left: 0px;
            }
        }
    }
    
    div {
        padding: 10px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 400px;
    height: 275px;
    object-fit: cover;
`

const Title = styled.h3`
    margin-top: 15px;
    margin-bottom: 8px;
`

const Text = styled.p`
    margin-bottom: 10px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.font.fontSecondary};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Image,
    Title,
    Text,
    Pagination,
}
