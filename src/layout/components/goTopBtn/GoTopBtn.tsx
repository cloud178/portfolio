import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledButton onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowTopSvg"} width={"30px"} height={"30px"} viewBox={"0 -1.4 16 16"}/>
                </StyledButton>

            )}
        </>

    );
};

const StyledButton = styled.button`
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    padding: 8px;
`
