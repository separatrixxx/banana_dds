import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string,
    isLoading?: boolean,
    isDisabled?: boolean,
    isIcon?: boolean,
    onClick?: (e: any) => void,
}
