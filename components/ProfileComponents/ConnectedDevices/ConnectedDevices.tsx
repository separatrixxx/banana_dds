import styles from './ConnectedDevices.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDeviceName } from '../../../helpers/format.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { addDevice, removeDevice } from '../../../helpers/device.helper';
import PlusIcon from './plus.svg';
import CopyIcon from './copy.svg';
import RemoveIcon from './remove.svg';
import cn from 'classnames';

export const ConnectedDevices = (): JSX.Element => {
    const { dispatch, webApp, tgUser, user } = useSetup();

    return (
        <div className={styles.connectedDevices}>
            <Htag tag='m' className={styles.connectedDevicesTitle}>
                {setLocale(tgUser?.language_code).connected_devices}
                {
                    webApp?.platform !== 'weba' &&
                    user.devices.length < user.subscription.maximum_devices &&
                        <PlusIcon className={cn(styles.plusIcon, {
                            [styles.webaPlus]: webApp?.platform === 'weba',
                        })} onClick={() => addDevice({
                            dispatch: dispatch,
                            webApp: webApp,
                            tgUser: tgUser,
                        })} />
                }
            </Htag>
            {user.devices.map(d => (
                <div key={d.device_hash} className={cn(styles.connectedDeviceItem, {
                    [styles.webaDeviceItem]: webApp?.platform === 'weba',
                })}>
                    <span className={cn(styles.onlineMarker, {
                        [styles.offlineMarker]: !d.is_authorized,
                    })} />
                    <Htag tag='s' className={styles.connectedDevicesText}>
                        {formatDeviceName(d.device_hash)}
                    </Htag>
                    {
                        webApp?.platform !== 'weba' &&
                            <CopyIcon className={cn(styles.copyIcon, {
                                [styles.webaPlus]: webApp?.platform === 'weba',
                            })} onClick={() => copyToClipboard(d.device_hash)} />
                    }
                    <RemoveIcon className={cn(styles.copyIcon, styles.removeIcon, {
                        [styles.webaRemove]: webApp?.platform === 'weba',
                    })} onClick={() => removeDevice(d.device_hash, {
                        dispatch: dispatch,
                        webApp: webApp,
                        tgUser: tgUser,
                    })} />
                </div>
            ))}
        </div>
    );
};
