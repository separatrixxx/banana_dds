import styles from './PlanInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDate, formatPrice } from '../../../helpers/format.helper';
import { Button } from '../../Common/Button/Button';
import cn from 'classnames';


export const PlanInfo = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    return (
        <div className={styles.planInfo}>
            <Button text={user.plan} isDisabled={true} isIcon={true}
                onClick={() => {}} />
            <div className={styles.planPriceDiv}>
                <Htag tag='xxl' className={styles.planPrice}>
                    {formatPrice(user.price, tgUser?.language_code)}
                </Htag>
                <Htag tag='s' className={styles.planTextS}>
                    {setLocale(tgUser?.language_code)[user.duration === 'monthly' ? 'per_month' : 'per_year']}
                </Htag>
            </div>
            <Htag tag='s' className={styles.planTextS}>
                {setLocale(tgUser?.language_code).plan_available_until + ' ' + formatDate(user.datePlan)}
            </Htag>
            <div className={styles.planButtonsDiv}>
                <Button text={setLocale(tgUser?.language_code).change_plan}
                    onClick={() => {}} />
                <Htag tag='s' className={cn(styles.planTextS, styles.cancelSubscription, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    {setLocale(tgUser?.language_code).cancel_subscription}
                </Htag>
            </div>
        </div>
    );
};
