import { DeviceItemProps } from './DeviceItem.props';
import styles from './DeviceItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { formatDeviceName } from '../../../helpers/format.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { removeDevice } from '../../../helpers/device.helper';
import CopyIcon from './copy.svg';
import RemoveIcon from './remove.svg';
import { useState } from 'react';
import cn from 'classnames';


export const DeviceItem = ({ deviceHash, isAuthorized, isFullHash, setIsFullHash }: DeviceItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={styles.deviceItem}>
            <span className={cn(styles.onlineMarker, {
                [styles.offlineMarker]: !isAuthorized,
            })} />
            <Htag tag='s' className={styles.deviceItemText}>
                {isFullHash !== deviceHash ? formatDeviceName(deviceHash)
                    : `happ://add/https://api-vpn.banana.codes/sub/${deviceHash}#BananaCodes`}
            </Htag>
            <CopyIcon className={cn(styles.copyIcon, {
                [styles.webaCopy]: webApp?.platform === 'weba',
            })} onClick={() => {
                copyToClipboard(deviceHash, isFullHash, setIsFullHash);
            }} />
            {
                !isLoading ?
                    <RemoveIcon className={cn(styles.copyIcon, styles.removeIcon, {
                        [styles.webaRemove]: webApp?.platform === 'weba',
                    })} onClick={() => removeDevice(deviceHash, setIsLoading, {
                        dispatch: dispatch,
                        webApp: webApp,
                        tgUser: tgUser,
                    })} />
                : <div className={styles.spinner} />
            }
        </div>
    );
};
