import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CrownIcon from './crown.svg';
import cn from 'classnames';


export const Button = ({ text, isLoading, isDisabled, isIcon, className, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.button, className, {
            [styles.weba]: webApp?.platform === 'weba',
            [styles.disableButton]: isDisabled,
            [styles.iconButton]: isIcon,
        })} onClick={onClick}>
            {
                !isLoading ?
                    <Htag tag='m' className={cn(styles.text, {
                        [styles.iconText]: isIcon && text,
                    })}>
                        {
                            isIcon && <CrownIcon />
                        }
                        {text}
                    </Htag>
                :
                    <div className={styles.spinner} />
            }
        </div>
    );
};
