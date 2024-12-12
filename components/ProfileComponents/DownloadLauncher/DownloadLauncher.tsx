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
                <Link href='https://gitlab.com/wan2ted/banana-vpn-release/-/raw/main/Bananacodes%20VPN%20launcher.exe?ref_type=heads&inline=false'
                    className={cn(styles.downloadLauncherLink, {
                        [styles.weba]: webApp?.platform === 'weba',
                    })} target='_blank'>
                    <Htag tag='m'>
                        {'Windows'}
                    </Htag>
                    <ArrowIcon />
                </Link>
                {/* <Link href='/' className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} target='_blank'>
                    <Htag tag='m'>
                        {'MacOS'}
                    </Htag>
                    <ArrowIcon />
                </Link> */}
                <Link href='https://github.com/FlyFrg/Happ_android_update/releases/download/1.5/Happ_1.5.0_1069_all.apk'
                    className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} target='_blank'>
                    <Htag tag='m'>
                        {'Android'}
                    </Htag>
                    <ArrowIcon />
                </Link>
                <Link href='https://apps.apple.com/us/app/happ-proxy-utility/id6504287215'
                    className={cn(styles.downloadLauncherLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} target='_blank'>
                    <Htag tag='m'>
                        {'iOS'}
                    </Htag>
                    <ArrowIcon />
                </Link>
            </div>
            <Button className={styles.downloadButton} text={setLocale(tgUser?.language_code).installation_guide}
                onClick={() => webApp?.openLink('/guide')} />
        </div>
    );
};
