import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '@/entities/auth';

type Props = {
	children: React.ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
};
