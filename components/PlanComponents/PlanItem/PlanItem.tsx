import { PlanItemProps } from './PlanItem.props';
import styles from './PlanItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { formatText } from '../../../helpers/format.helper';
import CheckIcon from './check.svg';
import StarIcon from './star.svg';


export const PlanItem = ({ name, priceM, priceY, duration, devices, servers, traffic, isSmall }: PlanItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.planItem}>
            <Htag tag='m' className={styles.planName}>
                {name}
            </Htag>
            <div className={styles.planPriceDiv}>
                <Htag tag='xxl' className={styles.planPrice}>
                    {duration === 'monthly' ? priceM.toLocaleString(tgUser?.language_code)
                        : priceY.toLocaleString(tgUser?.language_code)}
                    <StarIcon />
                </Htag>
                <Htag tag='s' className={styles.planDuration}>
                    {setLocale(tgUser?.language_code)[duration === 'monthly' ? 'per_month' : 'per_year']}
                </Htag>
            </div>
            {
                !isSmall &&
                    <div className={styles.planFeaturesDiv}>
                        <Htag tag='s' className={styles.planFeature}>
                            <CheckIcon />
                            {devices + ' ' + setLocale(tgUser?.language_code).format_devices[formatText(devices)]}
                        </Htag>
                        <Htag tag='s' className={styles.planFeature}>
                            <CheckIcon />
                            {servers + ' ' + setLocale(tgUser?.language_code).format_servers[formatText(servers)]}
                        </Htag>
                        <Htag tag='s' className={styles.planFeature}>
                            <CheckIcon />
                            {(traffic < 1000 ? traffic : '')
                                + setLocale(tgUser?.language_code)[traffic < 1000 ? 'gb_of_traffic' : 'unlimited_traffic']}
                        </Htag>
                    </div>
            }
        </div>
    );
};
