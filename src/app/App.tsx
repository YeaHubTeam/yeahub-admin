import { MainLayout } from './layouts/MainLayout/MainLayout';
import styles from './styles/App.module.css';
import './styles/normalize.css';

export const App = () => {
	return (
		<div className={styles.container}>
			<MainLayout />
		</div>
	);
};
