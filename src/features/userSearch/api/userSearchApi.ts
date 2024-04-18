import { baseApi } from '@/shared/config/api/baseApi';

import { SearchUsername } from '../model/types/usersearch';

export const userSearchApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		checkUsersExists: build.mutation<SearchUsername, { username: string }>({
			query: ({ username }) => ({
				url: '/api/search',
				method: 'POST',
				body: { username },
			}),
		}),
	}),
});

export const { useCheckUsersExistsMutation } = userSearchApi;
