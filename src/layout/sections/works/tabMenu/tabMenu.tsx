import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: "all" | "landing" | "React" | "spa" }>,
    changeFilterStatus: (value: "all" | "landing" | "React" | "spa") => void,
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul  role="menu">
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index} role="menuitem">
                        <Link href="#">{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`
