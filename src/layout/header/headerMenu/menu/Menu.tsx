import React from 'react';
import {S} from './../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul role="menu">
            {props.menuItems.map((item, index) => {
                return (
                    <S.MenuItem key={index} role="menuitem">
                        <S.Link href={`#${item}`}>
                            {item}
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.MenuItem>
                );
            })}
        </ul>
    );
};
