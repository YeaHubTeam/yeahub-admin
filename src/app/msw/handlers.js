import { http, HttpResponse } from 'msw';

import { mockGetQuestionsList } from './mockGetQuestionsList';

export const handlers = [
	http.get('/questions', () => HttpResponse.json(mockGetQuestionsList)),
	http.get('/questions/:id', ({ params }) =>
		HttpResponse.json(mockGetQuestionsList[`${params.id - 1}`]),
	),
	http.get('/assets/:imageId.png', ({ params }) =>
		HttpResponse.json({ img: `./shared/assets/images/MockAvatar${params.imageId}.png` }),
	),
];
