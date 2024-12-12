import { GuideVideoBlockProps } from './GuideVideoBlock.props';
import styles from './GuideVideoBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';


export const GuideVideoBlock = ({ type }: GuideVideoBlockProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={styles.guideVideoBlock}>

        </div>
    );
};
