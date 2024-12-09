import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ServerButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    isActive?: boolean,
    isAdvanced?: boolean,
    onClick: (e: any) => void,
}
