import styles from './ConnectedDevices.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ConnectedDevices = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={styles.connectedDevices}>
            <Htag tag='m' className={styles.connectedDevicesTitle}>
                {setLocale(tgUser?.language_code).connected_devices}
            </Htag>
            {user.devices.map(d => (
                <Htag key={d} tag='s' className={styles.connectedDevicesText}>
                    {d}
                </Htag>
            ))}
        </div>
    );
};
