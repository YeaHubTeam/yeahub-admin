import { Suspense } from 'react';

import { MainLayout } from './layouts/MainLayout/MainLayout';
import styles from './styles/App.module.css';
import './styles/normalize.css';

export const App = () => {
	return (
		<Suspense fallback="">
			<div className={styles.container}>
				<MainLayout />
			</div>
		</Suspense>
	);
};
