import { GuideSlidesBlockProps } from './GuideSlidesBlock.props';
import styles from './GuideSlidesBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';


export const GuideSlidesBlock = ({ type }: GuideSlidesBlockProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={styles.guideSlidesBlock}>

        </div>
    );
};
