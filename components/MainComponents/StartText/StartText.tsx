import styles from './StartText.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const StartText = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.startTextDiv}>
            <Htag tag='m' className={styles.startTitle}>
                {setLocale(tgUser?.language_code).welcome_to_banana_vpn}
            </Htag>
            <Htag tag='s' className={styles.startText}>
                {setLocale(tgUser?.language_code).start_text1}
            </Htag>
            <Htag tag='s' className={styles.startText}>
                {setLocale(tgUser?.language_code).start_text2}
            </Htag>
        </div>
    );
};
