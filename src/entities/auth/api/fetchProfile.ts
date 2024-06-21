import { baseApi } from '@/shared/config/api/baseApi';

import { CurrentUser } from '../model/types/auth';

export const fetchProfile = baseApi.injectEndpoints({
	endpoints: (build) => ({
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

export const { useFetchUserMutation } = fetchProfile;
