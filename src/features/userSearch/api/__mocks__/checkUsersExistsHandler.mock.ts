import { http, HttpResponse } from 'msw';

import { searchUsers } from '../../utils/searchUsers';

export const checkUsersExists = [
	http.post('/api/search', async ({ request }) => {
		const requestBody = await request.json();
		let searchResults;

		if (requestBody !== null && typeof requestBody === 'object') {
			searchResults = await searchUsers(requestBody.username);
		}

		return HttpResponse.json({ searchResults }, { status: 200 });
	}),
];
