import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isActive: boolean,
	setIsActive: (e: any) => void,
	children: ReactNode,
}