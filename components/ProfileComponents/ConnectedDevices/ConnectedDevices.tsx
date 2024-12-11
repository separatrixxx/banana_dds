import styles from './ConnectedDevices.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { addDevice } from '../../../helpers/device.helper';
import PlusIcon from './plus.svg';
import { useState } from 'react';
import { DeviceItem } from '../DeviceItem/DeviceItem';
import cn from 'classnames';


export const ConnectedDevices = (): JSX.Element => {
    const { dispatch, webApp, tgUser, user } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={styles.connectedDevices}>
            <Htag tag='m' className={styles.connectedDevicesTitle}>
                {setLocale(tgUser?.language_code).connected_devices}
                {
                    !isLoading && user.devices.length < user.subscription.maximum_devices ?
                        <PlusIcon className={cn(styles.plusIcon, {
                            [styles.webaPlus]: webApp?.platform === 'weba',
                        })} onClick={() => addDevice(setIsLoading, {
                            dispatch: dispatch,
                            webApp: webApp,
                            tgUser: tgUser,
                        })} />
                    : isLoading && user.devices.length <= user.subscription.maximum_devices ?
                        <div className={styles.spinner} />
                    : <></>
                }
            </Htag>
            {[...user.devices].reverse().map(d => (
                <DeviceItem key={d.device_hash} deviceHash={d.device_hash}
                    isAuthorized={d.is_authorized} />
            ))}
        </div>
    );
};
