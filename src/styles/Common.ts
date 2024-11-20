import {theme} from "./Theme";

type FontPopsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPopsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font.fontPrimary};
    line-height: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`
