import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { PlanInfo } from '../../PlanComponents/PlanInfo/PlanInfo';
import { PlanDurationInterface } from '../../../interfaces/plan.interface';
import { ChangePlan } from '../../PlanComponents/ChangePlan/ChangePlan';


export const Header = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);
    const [type, setType] = useState<'info' | 'change'>('info');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [activePlan, setActivePlan] = useState<'Basic' | 'Pro' | 'Premium'>('Basic');
    const [duration, setDuration] = useState<PlanDurationInterface>({
        name: 'monthly',
        days: 30,
    });

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
                <Button isDisabled={user.subscription.status === 'inactive'} isIcon={true}
                    onClick={() => {
                        if (user.subscription.status === 'active') {
                            setType('info');
                            setIsActive(true);
                        }
                    }} />
            </header>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                {
                    type === 'info' ?
                        <PlanInfo setType={setType} />
                    : <ChangePlan />
                }
            </Modal>
        </>
    );
};
