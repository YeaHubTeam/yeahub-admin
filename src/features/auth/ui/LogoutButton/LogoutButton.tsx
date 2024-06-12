import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Logout } from '@/shared/assets/icons/Logout';

import { useLogOutMutation } from '../../api/authApi';
import { logoutActions } from '../../model/slice/logoutSlice';
import { getToken, removeToken } from '../../utils/tokenUtils';

import styles from './LogoutButton.module.css';

export const LogoutButton: FC = () => {
	const [logout] = useLogOutMutation();
	const dispatch = useDispatch();

	const token = getToken();

	const handleLogout = async () => {
		if (!token) {
			return;
		}
		await logout({ token })
			.unwrap()
			.then(() => {
				removeToken();
				dispatch(logoutActions.setAuthentication(false));
			})
			.catch((error) => {
				console.error('Failed to logout:', error);
			});
	};

	return (
		<button onClick={handleLogout} className={styles.button}>
			<Logout />
		</button>
	);
};
