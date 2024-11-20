import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul role="menu">
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index} role="menuitem">
                            <Link href={`#${item}`}>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    );
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

    @media ${theme.media.tablet} {
        display: none;
    }
`;

const Link = styled.a`
    font-family:
        Josefin Sans,
        sans-serif;
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
        transition: transform 0.3s ease;
    }

    &:hover {
        &::before {
            transform: scale(1);
        }
    }
`;

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
`;

const ListItem = styled.li`
    position: relative;

    &:hover {
        transform: scale(1.2);

        &:active {
            transform: scale(1.2) translateY(2px);
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
