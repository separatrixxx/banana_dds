import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';


export const Header = (): JSX.Element => {
    const { router, tgUser } = useSetup();

    return (
        <header className={styles.header}>
            <div className={styles.welcomeDiv}>
                <Htag tag='s'>
                    {setLocale(tgUser?.language_code).welcome_back + ','}
                </Htag>
                <Htag tag='m' className={styles.username}>
                    {tgUser?.username ? tgUser?.username : tgUser?.first_name}
                </Htag>
            </div>
            <Button text={setLocale(tgUser?.language_code).no_plan}
                isDisabled={true} isIcon={true} onClick={() => {}} />
        </header>
    );
};
