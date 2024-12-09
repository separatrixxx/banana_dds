import { ServerButtonProps } from './ServerButton.props';
import styles from './ServerButton.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import ArrowIcon from './arrow.svg';
import CrownIcon from './crown.svg';
import cn from 'classnames';


export const ServerButton = ({ text, isActive, isAdvanced, className, onClick }: ServerButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    let ServerButtonIcon = ArrowIcon;

    if (isAdvanced) {
        ServerButtonIcon = CrownIcon;
    }

    return (
        <div className={cn(styles.currentButton, className, {
            [styles.weba]: webApp?.platform === 'weba',
            [styles.activeServerButton]: isActive,
        })} onClick={onClick}>
            <Htag tag='m' className={styles.currentButtonText}>
                {text}
            </Htag>
            <ServerButtonIcon className={cn(styles.arrowIcon, {
                [styles.crownIcon]: isAdvanced,
            })} />
        </div>
    );
};
