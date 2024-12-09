import styles from './ServersList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ServerButton } from '../ServerButton/ServerButton';
import { ToastError } from '../../Common/Toast/Toast';
import cn from 'classnames';


export const ServersList = (): JSX.Element => {
    const { tgUser, user, servers } = useSetup();

    const availableServers = servers.filter(server => {
        if (user.plan === 'Basic') {
            return server.plan === 'Basic';
        } else if (user.plan === 'Pro') {
            return server.plan === 'Basic' || server.plan === 'Pro';
        } else if (user.plan === 'Marat') {
            return true;
        }

        return false;
    });
    
    const advancedServers = servers.filter(server => {
        if (user.plan === 'Basic') {
            return server.plan !== 'Basic';
        } else if (user.plan === 'Pro') {
            return server.plan !== 'Basic' && server.plan !== 'Pro';
        } else if (user.plan === 'Marat') {
            return false;
        }

        return true; 
    });

    return (
        <div className={styles.serversList}>
            <Htag tag='m' className={styles.serversListTitle}>
                {setLocale(tgUser?.language_code).select_server}
            </Htag>
            <Htag tag='s' className={styles.serversListText}>
                {setLocale(tgUser?.language_code).available_servers}
            </Htag>
            {availableServers.map(s => (
                <ServerButton key={s.name} text={s.name} isActive={s.name === user.current_server}
                    onClick={() => {}}/>
            ))}
            {
                user.plan !== 'Marat' &&
                    <Htag tag='s' className={cn(styles.serversListText, styles.advancedServersText)}>
                        {setLocale(tgUser?.language_code).advanced_servers}
                    </Htag>
            }
            {advancedServers.map(s => (
                <ServerButton key={s.name} text={s.name} isAdvanced={true}
                    onClick={() => ToastError(setLocale(tgUser?.language_code).upgrade_to_select_server
                        .replace('$$$', s.plan))}/>
            ))}
        </div>
    );
};
