import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'yeahub-ui-kit';

import { Card } from '@/shared/ui/Card';
import { setToken } from '@/shared/utils/tokenUtils';

import { authActions } from '@/entities/auth';
import { useLoginMutation } from '@/entities/auth/api/authApi';

import styles from './LoginPage.module.css';

export const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [login] = useLoginMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		const result = await login({ username, password });

		if (result && 'data' in result) {
			setToken(result.data.access_token);
			dispatch(authActions.setAuthentication(true));
			navigate('/');
		}
		setIsLoading(false);
	};

	// "username": "user1@example.com",
	// 	"password": "password"

	return (
		<Card className={styles.block}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2 className={styles.title}>Авторизация</h2>
				<Input
					style={{ color: 'black' }}
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					autoComplete="username"
				/>
				<Input
					style={{ color: 'black' }}
					className={styles.input}
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
				/>
				<Button type="submit" disabled={isLoading}>
					Login
				</Button>
			</form>
		</Card>
	);
};

// {
//   "username": "admin@bk.com",
//   "password": "123"
// }
