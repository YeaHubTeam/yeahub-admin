import { FC } from 'react';

import { SearchSection } from '@/widgets/SearchSection';

import styles from './Main.module.css';

export const Main: FC = () => {
	return (
		<main className={styles.main}>
			<SearchSection />
			<div className={styles.box}></div>
		</main>
	);
};
