import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { PlanInfo } from '../../PlanComponents/PlanInfo/PlanInfo';


export const Header = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.welcomeDiv}>
                    <Htag tag='s'>
                        {setLocale(tgUser?.language_code).welcome_back + ','}
                    </Htag>
                    <Htag tag='m' className={styles.username}>
                        {tgUser?.username ? tgUser?.username : tgUser?.first_name}
                    </Htag>
                </div>
                <Button isDisabled={user.plan === 'None'} isIcon={true}
                    onClick={() => {
                        if (user.plan !== 'None') {
                            setIsActive(true);
                        }
                    }} />
            </header>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <PlanInfo />
            </Modal>
        </>
    );
};
