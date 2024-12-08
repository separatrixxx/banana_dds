import styles from './DownloadLauncher.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import ArrowIcon from './arrow.svg';
import Link from 'next/link';
import cn from 'classnames';


export const DownloadLauncher = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <div className={styles.downloadLauncher}>
            <Htag tag='m' className={styles.downloadLauncherTitle}>
                {setLocale(tgUser?.language_code).download_launcher}
            </Htag>
            <div className={styles.downloadLinksDiv}>
            <Link href='/' className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    <Htag tag='m'>
                        {'Windows'}
                    </Htag>
                    <ArrowIcon />
                </Link>
                <Link href='/' className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    <Htag tag='m'>
                        {'MacOS'}
                    </Htag>
                    <ArrowIcon />
                </Link>
                <Link href='/' className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    <Htag tag='m'>
                        {'Android'}
                    </Htag>
                    <ArrowIcon />
                </Link>
                <Link href='/' className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    <Htag tag='m'>
                        {'iOS'}
                    </Htag>
                    <ArrowIcon />
                </Link>
            </div>
            <Button className={styles.downloadButton} text={setLocale(tgUser?.language_code).installation_guide}
                onClick={() => {}} />
        </div>
    );
};
