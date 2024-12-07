import { PlanItemProps } from './PlanItem.props';
import styles from './PlanItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { formatPrice, formatText } from '../../../helpers/format.helper';
import CheckIcon from './check.svg';


export const PlanItem = ({ name, priceM, priceY, duration, devices, servers, speed }: PlanItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.planItem}>
            <Htag tag='m' className={styles.planName}>
                {name}
            </Htag>
            <div className={styles.planPriceDiv}>
                <Htag tag='xxl' className={styles.planPrice}>
                    {duration === 'monthly' ? formatPrice(priceM, tgUser?.language_code)
                        : formatPrice(priceY, tgUser?.language_code)}
                </Htag>
                <Htag tag='s' className={styles.planDuration}>
                    {setLocale(tgUser?.language_code)[duration === 'monthly' ? 'per_month' : 'per_year']}
                </Htag>
            </div>
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
                    {setLocale(tgUser?.language_code)[speed + '_speed' as 'normal_speed']}
                </Htag>
            </div>
        </div>
    );
};
