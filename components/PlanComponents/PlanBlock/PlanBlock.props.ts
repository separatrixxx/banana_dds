import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PlanDurationInterface } from '../../../interfaces/plan.interface';


export interface PlanBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    duration: PlanDurationInterface,
    isSmall?: boolean,
    setDuration: (e: PlanDurationInterface) => void,
    setActivePlan: (e: 'Basic' | 'Pro' | 'Premium') => void,
}
