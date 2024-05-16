import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SUPERUSER = {
	firstName: 'Guse',
	lastName: 'Kazulin',
	passwordHash: 'password',
	phone: '+1234567890',
	email: 'user@example.com',
	country: 'AGroba',
	city: 'Bag-dad',
	birthday: '1990-01-01',
	address: 'улица Пушкина дом Колотушкина',
	avatarUrl: 'http://example.com/avatar.jpg',
};

export const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await fetch('http://localhost:4002/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			const { access_token } = await response.json();
			localStorage.setItem('accessToken', access_token);

			navigate('/');
		} else {
			console.error('Ошибка при входе');
		}
	};

	const createUser = async () => {
		await fetch('http://localhost:4002/auth/signUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(SUPERUSER),
		});
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
//   "username": "user@example.com",
//   "password": "password"
// }
