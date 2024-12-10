import styles from './ServersList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ServerButton } from '../ServerButton/ServerButton';
import { ToastError, ToastSuccess } from '../../Common/Toast/Toast';
import cn from 'classnames';
import { getPlans } from '../../../helpers/plan.helper';


export const ServersList = (): JSX.Element => {
    const { tgUser, user, servers } = useSetup();

    const availableServers = servers.filter(server => server.sub_rank.includes(user.subscription.type));
    const advancedServers = servers.filter(server => !server.sub_rank.includes(user.subscription.type));

    return (
        <div className={styles.serversList}>
            <Htag tag='s' className={styles.serversListText}>
                {setLocale(tgUser?.language_code).available_servers}
            </Htag>
            {availableServers.map(s => (
                <ServerButton key={s.zone} text={s.zone} isActive={false}
                    onClick={() => ToastSuccess(setLocale(tgUser?.language_code).you_can_select_this_server_in_launcher)} />
            ))}
            {
                advancedServers.length > 0 &&
                    <Htag tag='s' className={cn(styles.serversListText, styles.advancedServersText)}>
                        {setLocale(tgUser?.language_code).advanced_servers}
                    </Htag>
            }
            {advancedServers.map(s => (
                <ServerButton key={s.zone} text={s.zone} isAdvanced={true}
                    onClick={() => {
                        const plan = getPlans().find(p => p.name.toLowerCase() === s.sub_rank[s.sub_rank.length - 1]);

                        ToastError(setLocale(tgUser?.language_code).upgrade_to_select_server
                            .replace('$$$', plan?.name || ''))
                    }} />
            ))}
        </div>
    );
};
