import { baseApi } from '@/shared/config/api/baseApi';

import { AuthResult, CurrentUser, LoginInput } from '../model/types/auth';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<AuthResult, LoginInput>({
			query: ({ username, password }) => ({
				url: '/auth/login',
				method: 'POST',
				body: { username, password },
			}),
		}),
		signUp: build.mutation<void, { user: CurrentUser }>({
			query: ({ user }) => ({
				url: '/auth/signUp',
				method: 'POST',
				body: user,
			}),
		}),
		logOut: build.mutation<void, { token: string }>({
			query: ({ token }) => ({
				url: '/auth/logout',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		fetchUser: build.mutation<CurrentUser, string>({
			query: (token: string) => ({
				url: '/auth/profile',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
	}),
});

export const { useLoginMutation, useSignUpMutation, useLogOutMutation, useFetchUserMutation } =
	authApi;
