import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul  role="menu">
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index} role="menuitem">
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 35px;
        justify-content: center;
    }
`

const ListItem = styled.li`
`

const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;

    position: relative;

    &::after {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.font.fontSecondary};
        height: 10px;
        width: 100%;
        bottom: 0;

        position: absolute;
        bottom: 0;
        left: -10px;
        right: 10px;
    }
`
