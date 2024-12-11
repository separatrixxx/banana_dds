import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ServerButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    isActive?: boolean,
    isAdvanced?: boolean,
    onClick: (e: any) => void,
}
