import { http, HttpResponse } from 'msw';

import { mockGetQuestionsList } from './mockGetQuestionsList';

export const getQuestionById = [
	http.get('/questions/:id', ({ params }) => {
		const id = params.id;
		return HttpResponse.json(mockGetQuestionsList[`${+id - 1}`]);
	}),
];
