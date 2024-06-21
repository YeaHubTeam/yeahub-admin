import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Logout } from '@/shared/assets/icons/Logout';
import { Spinner } from '@/shared/assets/icons/Spinner';

import { authActions } from '@/entities/auth';

import { useLogOutMutation } from '../../../api/authApi';
import { getToken, removeToken } from '../../../utils/tokenUtils';

import styles from './LogoutButton.module.css';

export const LogoutButton = () => {
	const [logout] = useLogOutMutation();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogout = async () => {
		const token = getToken();

		if (!token) {
			console.error('No token found');
			return;
		}
		setIsLoading(true);

		await logout({ token })
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
		<button onClick={handleLogout} className={styles.button}>
			{isLoading ? <Spinner /> : <Logout />}
		</button>
	);
};
