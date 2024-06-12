import classnames from 'classnames';
import { FC, useState } from 'react';

import { AppLogo } from '@/shared/ui/AppLogo';

import { NavigationSidebarItem } from '../NavigationSidebarItem/NavigationSidebarItem';

import styles from './NavigationSidebar.module.css';

export const NavigationSidebar: FC = () => {
	const [isOpen, setIsOPen] = useState(true);

	return (
		<aside className={classnames(styles.sidebar)}>
			<AppLogo isOpen={isOpen} setIsOpen={setIsOPen} />
			<NavigationSidebarItem isOpen={isOpen} />
		</aside>
	);
};
