import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Logout } from '@/shared/assets/icons/Logout';
import { Spinner } from '@/shared/assets/icons/Spinner';

import { authActions } from '@/entities/auth';
import { useLogOutMutation } from '@/entities/auth/api/authApi';

import { removeToken } from '../../../../../shared/utils/tokenUtils';

import styles from './LogoutButton.module.css';

export const LogoutButton = () => {
	const [logout] = useLogOutMutation();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogout = async () => {
		setIsLoading(true);

		await logout()
			.unwrap()
			.then(() => {
				removeToken();
				dispatch(authActions.setAuthentication(false));
			})
			.catch((error) => {
				console.error('Failed to logout:', error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<button onClick={handleLogout} className={styles.button} disabled={isLoading}>
			{isLoading ? <Spinner /> : <Logout />}
		</button>
	);
};
