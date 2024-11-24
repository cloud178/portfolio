import React from 'react';
import iconsSprite from '../../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    className?: string,
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg className={props.className} width={props.width || '120'} height={props.height || '120'}
             viewBox={props.viewBox || '0 0 120 120'}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
