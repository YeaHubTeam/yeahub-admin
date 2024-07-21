import { FC } from 'react';

import { SearchSection } from '@/widgets/SearchSection';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
	return (
		<main>
			<SearchSection />
			<div className={styles.box}></div>
		</main>
	);
};

export default MainPage;
