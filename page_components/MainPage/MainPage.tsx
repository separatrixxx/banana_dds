import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Header } from '../../components/MainComponents/Header/Header';
import MapPattern from './map.svg';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

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
                        <MainBlock />
                        <MapPattern className={styles.mapPattern} />
                        <div className={styles.gradient} />

                    </>
            }
        </div>
    );
};
