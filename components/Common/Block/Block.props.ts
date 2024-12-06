import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface BlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
}
