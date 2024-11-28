import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <Link onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={"logoSvg"} width={"60"} height={"60"} viewBox={"0 0 64 64"}/>
        </Link>
    );
};


const Link = styled.a`
    display: inline-flex;
`
