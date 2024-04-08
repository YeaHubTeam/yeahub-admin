import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { NavigationSidebar } from '@/widgets/NavigationSidebar';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
	return (
		<section className={styles.layout}>
			<div className={styles.sidebar}>
				<NavigationSidebar />
			</div>
			<Header />
			<div className={styles.content}>
				<Suspense fallback="">
					<Outlet />
				</Suspense>
			</div>
		</section>
	);
};
