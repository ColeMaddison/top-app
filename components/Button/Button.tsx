import * as styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            {...props}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
        >
            {children}
            {
                arrow !== 'none' && 
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow === 'down',
                    [styles.right]: arrow === 'right',
                })}>
                    <ArrowIcon />
                </span>
            }
        </button>
    );
};
