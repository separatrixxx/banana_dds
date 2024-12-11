import styles from './StartText.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import cn from 'classnames';


export const StartText = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

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
            <div className={styles.linkDiv}>
                <Link href='https://banana.codes' className={cn(styles.startLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}
                    target='_blank'>
                    {'by 🍌 codes'}
                </Link>
                <Htag tag='s' className={styles.startText}>
                    {process.env.NEXT_PUBLIC_VERSION}
                </Htag>
            </div>
        </div>
    );
};
