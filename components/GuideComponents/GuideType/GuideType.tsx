import { GuideTypeProps } from './GuideType.props';
import styles from './GuideType.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const GuideType = ({ type, setType }: GuideTypeProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={styles.guideType}>
            <button className={cn(styles.guideTypeButton, {
                [styles.weba]: webApp?.platform === 'weba',
                [styles.activeButton]: type === 'windows',
            })} onClick={() => setType('windows')}>
                <Htag tag='s' className={styles.guideTypeText}>
                    {'Windows'}
                </Htag>
            </button>
            <button className={cn(styles.guideTypeButton, {
                [styles.weba]: webApp?.platform === 'weba',
                [styles.activeButton]: type === 'android',
            })} onClick={() => setType('android')}>
                <Htag tag='s' className={styles.guideTypeText}>
                    {'Android'}
                </Htag>
            </button>
            <button className={cn(styles.guideTypeButton, {
                [styles.weba]: webApp?.platform === 'weba',
                [styles.activeButton]: type === 'ios',
            })} onClick={() => setType('ios')}>
                <Htag tag='s' className={styles.guideTypeText}>
                    {'iOS'}
                </Htag>
            </button>
        </div>
    );
};
