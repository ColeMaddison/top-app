import * as styles from './Header.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};
