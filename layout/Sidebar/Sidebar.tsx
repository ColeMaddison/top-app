import { Menu } from '../Menu/Menu';
import * as styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};
