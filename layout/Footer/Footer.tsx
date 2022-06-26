import * as styles from './Sidebar.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};
