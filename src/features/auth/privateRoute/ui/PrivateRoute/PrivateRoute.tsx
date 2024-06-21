import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useFetchUserMutation } from '@/entities/auth/api/fetchProfile';
import { selectIsAuthenticated } from '@/entities/auth/model/selectors/authSelectors';

import { authActions } from '../../../../../entities/auth/model/slice/authSlice';
import { getToken } from '../../../utils/tokenUtils';

type Props = {
	children: React.ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const [fetchUser] = useFetchUserMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		const token = getToken();
		if (token) {
			fetchUser(token)
				.unwrap()
				.then((data) => {
					dispatch(authActions.setProfile(data));
				});
		}
	}, [fetchUser, dispatch, isAuthenticated]);

	return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};
