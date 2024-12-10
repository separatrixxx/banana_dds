import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PlanDurationInterface } from '../../../interfaces/plan.interface';


export interface PlanDurationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    duration: PlanDurationInterface,
    setDuration: (e: PlanDurationInterface) => void,
}
