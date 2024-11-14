import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul  role="menu">
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index} role="menuitem">
                        <Link href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 35px;
        justify-content: center;
    }
`

const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.font.fontSecondary};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.font.fontSecondary};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 100;
        
        transform: scale(0);
    }

    &:hover {
        transform: scale(1.2);
        
        &:active {
            transform: scale(1.2) translateY(2px);
        }
        
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
`
