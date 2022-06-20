import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, SVGAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

export interface ArrowProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}
