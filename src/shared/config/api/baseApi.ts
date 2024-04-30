import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiTags } from '@/shared/config/api/apiTags';

export const baseApi = createApi({
	tagTypes: Object.values(ApiTags),
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.API_URL,
		prepareHeaders: (headers) => {
			headers.set(
				'Authorization',
				`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJAZXhhbXBsZS5jb20iLCJzdWIiOiI3Zjg2YTU5ZC02OTcwLTQxZjAtOTk5Yy00YWQ4ZDQ1ZTMyNjYiLCJpYXQiOjE3MTQzOTU2NzYsImV4cCI6MTcxNDQ4MjA3Nn0.uLEcLKgBjBKBTxQ1HymenuvOAfwgsgkxwGH7tFwLPMo`,
			);
		},
	}),
	endpoints: () => ({}),
});
