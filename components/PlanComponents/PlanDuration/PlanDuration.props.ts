import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PlanDurationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    duration: 'monthly' | 'yearly',
    setDuration: (e: 'monthly' | 'yearly') => void,
}
