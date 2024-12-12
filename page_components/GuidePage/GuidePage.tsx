import styles from './GuidePage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { useState } from 'react';
import { GuideType } from '../../components/GuideComponents/GuideType/GuideType';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { GuideSlidesBlock } from '../../components/GuideComponents/GuideSlidesBlock/GuideSlidesBlock';
import { GuideVideoBlock } from '../../components/GuideComponents/GuideVideoBlock/GuideVideoBlock';


export const GuidePage = (): JSX.Element => {
    const { router } = useSetup();

    const [type, setType] = useState<'windows' | 'android' | 'ios'>('windows');

    return (
        <div className={styles.wrapper}>
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <GuideType type={type} setType={setType} />
            <Htag tag='xl' className={styles.guideTitle}>
                {'1. ' + setLocale(router.locale).slides}
            </Htag>
            <GuideSlidesBlock type={type} />
            <Htag tag='xl' className={styles.guideTitle}>
                {'2. ' + setLocale(router.locale).video}
            </Htag>
            <GuideVideoBlock type={type} />
            <Htag tag='xl' className={styles.guideTitle}>
                {'3. ' + setLocale(router.locale).download_pdf}
            </Htag>
        </div>
    );
};
