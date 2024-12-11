import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface DeviceItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    deviceHash: string,
    isAuthorized: boolean,
    isFullHash: string | null,
    setIsFullHash: (e: string | null) => void,
}
