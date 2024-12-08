import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { Header } from '../../components/Common/Header/Header';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import MapPattern from './map.svg';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';
import { ProfileBlock } from '../../components/ProfileComponents/ProfileBlock/ProfileBlock';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                :
                    <>
                        <Toaster
                            position="top-center"
                            reverseOrder={true}
                            toastOptions={{
                                duration: 2000,
                            }}
                        />
                        <Header />
                        {
                            user.plan === 'None' ?
                                <MainBlock />
                            : <ProfileBlock />
                        }
                        <MapPattern className={styles.mapPattern} />
                        <div className={styles.gradient} />

                    </>
            }
        </div>
    );
};
