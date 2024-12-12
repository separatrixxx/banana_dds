import { PlanInfoProps } from './PlanInfo.props';
import styles from './PlanInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDate } from '../../../helpers/format.helper';
import { Button } from '../../Common/Button/Button';
import { cancelSubscription, createSubscription, getPlans } from '../../../helpers/plan.helper';
import StarIcon from './star.svg';
import cn from 'classnames';


export const PlanInfo = ({ setType, }: PlanInfoProps): JSX.Element => {
    const { dispatch, webApp, tgUser, user } = useSetup();

    const plan = getPlans().find(p => p.name.toLowerCase() === user.subscription.type);
    const planPrice = user.subscription.last_subcription_days <= 30 ? plan?.priceM : plan?.priceY;

    return (
        <div className={styles.planInfo}>
            <Button text={plan?.name} isDisabled={true} isIcon={true} />
            <div className={styles.planPriceDiv}>
                <Htag tag='xxl' className={styles.planPrice}>
                    {planPrice && planPrice.toLocaleString(tgUser?.language_code)}
                    <StarIcon />
                </Htag>
                <Htag tag='s' className={styles.planTextS}>
                    {setLocale(tgUser?.language_code)[user.subscription.last_subcription_days <= 30 ? 'per_month' : 'per_year']}
                </Htag>
            </div>
            <Htag tag='s' className={styles.planTextS}>
                {setLocale(tgUser?.language_code).plan_available_until + ' '
                    + formatDate(user.subscription.valid_until || '2024-12-11')}
            </Htag>
            <div className={styles.planButtonsDiv}>
                <Button text={setLocale(tgUser?.language_code).change_plan}
                    onClick={() => setType('change')} />
                <Htag tag='s' className={cn(styles.planTextS, styles.cancelSubscription, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} onClick={() => {
                    webApp?.showConfirm(setLocale(tgUser?.language_code).are_you_sure_you_want_cancel_subscription,
                        async function (confirmed: boolean) {
                            if (confirmed) {
                                cancelSubscription({
                                    dispatch: dispatch,
                                    webApp: webApp,
                                    tgUser: tgUser,
                                });
                            }
                        });
                }}>
                    {setLocale(tgUser?.language_code).cancel_subscription}
                </Htag>
            </div>
        </div>
    );
};
