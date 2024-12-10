import styles from './MainBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Block } from '../../Common/Block/Block';
import { StartText } from '../StartText/StartText';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { PlanBlock } from '../../PlanComponents/PlanBlock/PlanBlock';
import { createSubscription } from '../../../helpers/plan.helper';
import { PlanDurationInterface } from '../../../interfaces/plan.interface';


export const MainBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [isPlan, setIsPlan] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [activePlan, setActivePlan] = useState<'Basic' | 'Pro' | 'Premium'>('Basic');
    const [duration, setDuration] = useState<PlanDurationInterface>({
        name: 'monthly',
        days: 30,
    });

    if (webApp && isPlan) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            setIsPlan(false);
            setIsLoading(false);

            webApp?.BackButton.hide();
        });
    }

    return (
        <div className={styles.mainBlock}>
            {
                !isPlan ?
                    <Block className={styles.mainTextBlock}>
                        <StartText />
                    </Block>
                : <PlanBlock duration={duration} setDuration={setDuration} setActivePlan={setActivePlan} />
            }
            <Button text={setLocale(tgUser?.language_code)[!isPlan ? 'select_plan' : 'proceed_to_payment']}
                isLoading={isLoading} onClick={() => {
                    if (!isPlan) {
                        setIsPlan(true);
                    } else {
                        createSubscription({
                            webApp: webApp,
                            tgUser: tgUser,
                            type: activePlan,
                            duration: duration.days,
                            setIsLoading: setIsLoading,
                        });
                    }
                }} />
        </div>
    );
};
