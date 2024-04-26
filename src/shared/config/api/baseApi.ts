import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiTags } from '@/shared/config/api/apiTags';

export const baseApi = createApi({
	tagTypes: Object.values(ApiTags),
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.API_URL,
	}),
	endpoints: () => ({}),
});
