import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface GuideSlidesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'windows' | 'android' | 'ios',
}
