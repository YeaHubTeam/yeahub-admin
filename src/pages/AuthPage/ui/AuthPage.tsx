import { FC } from 'react';

import { LoginForm } from '@/features/auth';

import styles from './AuthPage.module.css';

const AuthPage: FC = () => {
	// const [login, setLogin] = useState(false);

	return (
		<section className={styles.login}>
			<LoginForm />
		</section>
	);
};

export default AuthPage;
