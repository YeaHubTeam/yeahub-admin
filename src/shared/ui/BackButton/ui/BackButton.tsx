import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.css';

export const BackButton = memo(() => {
	const navigate = useNavigate();

	const onReturnBack = () => {
		navigate(-1);
	};

	return (
		<button className={styles.button} onClick={onReturnBack}>
			{'<'}
		</button>
	);
});

BackButton.displayName = 'BackButton';
