import React from 'react';
import styled from "styled-components";
import {Logo} from "../components/logo/Logo";
import {Menu} from "../components/menu/Menu";


const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #a6fff3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`
