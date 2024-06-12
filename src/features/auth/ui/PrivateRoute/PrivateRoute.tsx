import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { State } from '@/shared/config/store/State';

import { useFetchUserMutation } from '../../api/authApi';
import { userActions } from '../../model/slice/userSlice';
import { getToken } from '../../utils/tokenUtils';

type Props = {
	children: React.ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
	const isAuthenticated = useSelector((state: State) => state.logout.isAuthenticated);
	const [data] = useFetchUserMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		const token = getToken();
		if (token) {
			data(token)
				.unwrap()
				.then((data) => {
					dispatch(userActions.setUser(data));
				});
		}
	}, [isAuthenticated]);

	return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};
