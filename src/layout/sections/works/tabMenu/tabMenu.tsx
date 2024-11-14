import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";

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
    margin-bottom: 40px;
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const ListItem = styled.li`
`
