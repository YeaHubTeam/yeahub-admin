import { FC } from 'react';

import { AppLogo } from '@/shared/ui/AppLogo';

import { NavigationSidebarItem } from '../NavigationSidebarItem/NavigationSidebarItem';

import styles from './NavigationSidebar.module.css';

export const NavigationSidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<AppLogo />
			<NavigationSidebarItem />
		</aside>
	);
};
