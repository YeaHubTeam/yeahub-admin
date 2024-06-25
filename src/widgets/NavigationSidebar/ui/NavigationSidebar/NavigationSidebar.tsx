import classnames from 'classnames';
import { FC, useState } from 'react';

import { AppLogo } from '@/shared/ui/AppLogo';

import { NavigationSidebarItem } from '../NavigationSidebarItem/NavigationSidebarItem';

import styles from './NavigationSidebar.module.css';

export const NavigationSidebar: FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true);

	const handleToggleSidebar = () => {
		setIsOpenSidebar((open) => !open);
	};

	return (
		<aside className={classnames(styles.sidebar)}>
			<AppLogo isOpen={isOpenSidebar} onToggleSidebar={handleToggleSidebar} />
			<NavigationSidebarItem isOpen={isOpenSidebar} />
		</aside>
	);
};
