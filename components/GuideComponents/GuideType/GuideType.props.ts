import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface GuideTypeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'windows' | 'android' | 'ios',
    setType: (e: 'windows' | 'android' | 'ios') => void,
}
