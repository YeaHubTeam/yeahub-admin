import { Outlet } from 'react-router-dom';

import { AppLogo } from '@/shared/ui/AppLogo/index';

import { Header } from '@/widgets/Header/index';
import { Sidebar } from '@/widgets/Sidebar/index';

import styles from './Layout.module.css';

export const Layout = () => {
	return (
		<section className={`${styles.container} ${styles.layout}`}>
			<AppLogo className={styles.logo} />
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.content}>
				<Outlet />
			</div>
		</section>
	);
};
