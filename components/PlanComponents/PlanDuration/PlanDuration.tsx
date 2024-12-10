import { PlanDurationProps } from './PlanDuration.props';
import styles from './PlanDuration.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const PlanDuration = ({ duration, setDuration }: PlanDurationProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <div className={styles.planDaration}>
            <button className={cn(styles.durationButton, {
                [styles.weba]: webApp?.platform === 'weba',
                [styles.activeDurationButton]: duration.name === 'monthly',
            })} onClick={() => setDuration({
                name: 'monthly',
                days: 30,
            })}>
                <Htag tag='s' className={styles.durationText}>
                    {setLocale(tgUser?.language_code).monthly}
                </Htag>
            </button>
            <button className={cn(styles.durationButton, {
                [styles.weba]: webApp?.platform === 'weba',
                [styles.activeDurationButton]: duration.name === 'yearly',
            })} onClick={() => setDuration({
                name: 'yearly',
                days: 365,
            })}>
                <Htag tag='s' className={styles.durationText}>
                    {setLocale(tgUser?.language_code).yearly}
                </Htag>
            </button>
        </div>
    );
};
