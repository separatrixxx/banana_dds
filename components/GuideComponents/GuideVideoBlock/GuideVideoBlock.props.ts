import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface GuideVideoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'windows' | 'android' | 'ios',
}
