import styles from './P.module.css';
import { PProps } from './P.props';
import cn from 'classnames';

export const P = ({ children, size = 'm', className, ...props }: PProps): JSX.Element => {
    return (
        <p
            {...props}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
            })}
        >
            {children}
        </p>
    );
};
