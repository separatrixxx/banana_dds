import styles from './CurrentServer.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { ServersList } from '../ServersList/ServersList';
import { ServerButton } from '../ServerButton/ServerButton';


export const CurrentServer = (): JSX.Element => {
    const { user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <ServerButton className={styles.currentServerButton} text={user.current_server}
                onClick={() => setIsActive(true)}/>
            <Modal className={styles.serversModal} isActive={isActive} setIsActive={setIsActive}>
                <ServersList />
            </Modal>
        </>
    );
};
