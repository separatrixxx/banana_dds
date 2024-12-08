import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PlanBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setActibePlan: (e: 'Basic' | 'Pro' | 'Marat') => void,
}
