import React from 'react';
import {S} from './../HeaderMenu_Styles'

const Items = [
    {
        title: 'Home',
        href: 'home',
    },
    {
        title: 'Tech Stack',
        href: 'tech stack',
    },
    {
        title: 'Projects',
        href: 'projects',
    },
    {
        title: 'Blog',
        href: 'blog',
    },
    {
        title: 'Contacts',
        href: 'contact',
    },
]

export const Menu: React.FC = () => {
    return (
        <ul role="menu">
            {Items.map((item, index) => {
                return (
                    <S.MenuItem key={index} role="menuitem">
                        <S.NavLink
                            to={item.href}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-20}
                        >
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};
