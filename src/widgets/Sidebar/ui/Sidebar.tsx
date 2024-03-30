import React, { FC, ReactNode } from 'react';

import { NavigationSidebar } from '@/shared/ui/NavigationSidebar';

import styles from './Sidebar.module.css';

interface SidebarProps {
	className: string;
	children?: ReactNode;
}

export const Sidebar: FC<SidebarProps> = () => {
	return (
		<aside className={styles.sidebar}>
			<NavigationSidebar />
		</aside>
	);
};
