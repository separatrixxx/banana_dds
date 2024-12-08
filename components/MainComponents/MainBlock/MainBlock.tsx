import styles from './MainBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Block } from '../../Common/Block/Block';
import { StartText } from '../StartText/StartText';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { PlanBlock } from '../../PlanComponents/PlanBlock/PlanBlock';
import { setUserPlan } from '../../../features/user/userSlice';


export const MainBlock = (): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isPlan, setIsPlan] = useState<boolean>(false);
    const [activePlan, setActibePlan] = useState<'Basic' | 'Pro' | 'Marat'>('Basic');

    if (webApp && isPlan) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            setIsPlan(false);
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
                : <PlanBlock setActibePlan={setActibePlan} />
            }
            <Button text={setLocale(tgUser?.language_code)[!isPlan ? 'select_plan' : 'proceed_to_payment']}
                onClick={() => {
                    if (!isPlan) {
                        setIsPlan(true);
                    } else {
                        dispatch(setUserPlan(activePlan));
                    }
                }} />
        </div>
    );
};
