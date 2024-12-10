import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PlanInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setType: (e: 'info' | 'change') => void,
}
