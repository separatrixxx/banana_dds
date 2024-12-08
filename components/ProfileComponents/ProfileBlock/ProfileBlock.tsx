import styles from './ProfileBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { Block } from '../../Common/Block/Block';
import { ConnectedDevices } from '../ConnectedDevices/ConnectedDevices';
import { Modal } from '../../Common/Modal/Modal';
import { useState } from 'react';
import { DownloadLauncher } from '../DownloadLauncher/DownloadLauncher';


export const ProfileBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.profileBlock}>
                <Block className={styles.connectedDevicesBlock}>
                    <ConnectedDevices />
                </Block>
                <Button text={setLocale(tgUser?.language_code).download_launcher}
                    onClick={() => setIsActive(true)} />
            </div>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <DownloadLauncher />
            </Modal>
        </>
    );
};
