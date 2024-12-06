import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Header } from '../../components/MainComponents/Header/Header';
import { Button } from '../../components/Common/Button/Button';
import { setLocale } from '../../helpers/locale.helper';
import { Block } from '../../components/Common/Block/Block';
import { StartText } from '../../components/MainComponents/StartText/StartText';
import MapPattern from './map.svg';


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
                        <MapPattern className={styles.mapPattern} />
                        <Block className={styles.mainBlock}>
                            <StartText />
                        </Block>
                        <div className={styles.gradient} />
                        <Button text={setLocale(tgUser.language_code).select_plan}
                            onClick={() => {}} />
                    </>
            }
        </div>
    );
};
