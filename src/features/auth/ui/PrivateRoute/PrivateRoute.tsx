import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
	children: React.ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

	const handleLogout = async () => {
		try {
			const token = localStorage.getItem('accessToken');
			await fetch('http://localhost:4002/auth/logout', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			localStorage.removeItem('accessToken');
			setIsAuthenticated(false);
		} catch (error) {
			console.error('Error logging out:', error);
		}
	};

	return isAuthenticated ? (
		<>
			{children}
			<button onClick={handleLogout}>Logout</button>
		</>
	) : (
		<Navigate to="/admin/login" />
	);
};
