import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PlanItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    priceM: number,
    priceY: number,
    duration: 'monthly' | 'yearly',
    devices: number,
    servers: number,
    speed: 'normal' | 'limited' | 'increased',
}
