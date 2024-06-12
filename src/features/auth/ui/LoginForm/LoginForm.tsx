import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation, useSignUpMutation } from '../../api/authApi';
import { logoutActions } from '../../model/slice/logoutSlice';
import { setToken } from '../../utils/tokenUtils';

const SUPERUSER = {
	firstName: 'Админ',
	lastName: 'Админов',
	password: '123',
	phone: '+7234567891',
	email: 'admin@bk.com',
	country: 'AGroba',
	city: 'Bag-dad',
	birthday: '1975-01-01',
	address: 'улица Пушкина дом Колотушкина1',
	avatarUrl: 'https://cdn.fastcup.net/logos/teams/20989_7n1la213o.png',
};

export const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [login] = useLoginMutation();
	const [signUp] = useSignUpMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const result = await login({ username, password });
		if ('data' in result) {
			setToken(result.data.access_token);
			dispatch(logoutActions.setAuthentication(true));
			navigate('/');
		}
	};

	const createUser = async () => {
		await signUp({ user: SUPERUSER });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					autoComplete="username"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
				/>
				<button type="submit">Login</button>
			</form>
			<button onClick={createUser}>create user</button>
		</>
	);
};

// {
//   "username": "admin@bk.com",
//   "password": "123"
// }
