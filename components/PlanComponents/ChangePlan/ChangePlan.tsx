import styles from './ChangePlan.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { createSubscription } from '../../../helpers/plan.helper';
import { PlanBlock } from '../PlanBlock/PlanBlock';
import { useState } from 'react';
import { PlanDurationInterface } from '../../../interfaces/plan.interface';


export const ChangePlan = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [activePlan, setActivePlan] = useState<'Basic' | 'Pro' | 'Premium'>('Basic');
    const [duration, setDuration] = useState<PlanDurationInterface>({
        name: 'monthly',
        days: 30,
    });

    return (
        <div className={styles.changePlan}>
            <PlanBlock duration={duration} isSmall={true} setDuration={setDuration} setActivePlan={setActivePlan} />
            <Button text={setLocale(tgUser?.language_code).proceed_to_payment}
                isLoading={isLoading} onClick={() => {
                    webApp?.showConfirm(setLocale(tgUser?.language_code).are_you_sure_you_want_change_plan,
                        async function (confirmed: boolean) {
                            if (confirmed) {
                                createSubscription({
                                    webApp: webApp,
                                    tgUser: tgUser,
                                    type: activePlan,
                                    duration: duration.days,
                                    setIsLoading: setIsLoading,
                                });
                            }
                        });
                }} />
        </div>
    );
};
