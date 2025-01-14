import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import {Link} from "react-scroll";

// Menu
const MenuItem = styled.li`
    position: relative;
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.font.fontSecondary};
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const NavLink = styled(Link)`
    font-family: Josefin Sans, sans-serif;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 1px;
        background-color: ${theme.colors.font.fontSecondary};
        z-index: 100;
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        transform: scale(0);
        transition: ${theme.animations.transition};
    }

    &:hover, &.active {
        
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(-15deg) translateX(5px);
            color: ${theme.colors.font.fontPrimary};

            & + ${Mask} {
                transform: skewX(-15deg) translateX(-5px);
            }
        }
    }
`;

// Mobile Menu

const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9000;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font.fontPrimary};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                background-color: rgba(255, 255, 255, 0);
            `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font.fontPrimary};
            position: absolute;
            transform: translateY(-10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(-45deg) translateY(0);
                `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font.fontPrimary};
            position: absolute;
            transform: translateY(10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(45deg) translateY(0);
                    width: 36px;
                `}
        }
    }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.5s ease-out;


    ul {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-out;
    }

    ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                transform: translateY(0);
                
                & ul {
                    gap: 70px;
                }
            `}
`;

// Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 35px;
        justify-content: center;
    }
`;

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
};
