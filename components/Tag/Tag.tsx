import * as styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ children, size = 's', href, color = 'ghost', className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            {...props}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
                [styles.red]: color === 'red',
                [styles.primary]: color === 'primary',
            })}
        >
            {
                href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};
