import { BlockProps } from './Block.props';
import styles from './Block.module.css';
import cn from 'classnames';


export const Block = ({ children, className }: BlockProps): JSX.Element => {
    return (
        <div className={cn(styles.block, className)}>
            {children}
        </div>
    );
};
