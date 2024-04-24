import { http, HttpResponse } from 'msw';

import { mockGetQuestionsList } from './mockGetQuestionsList';

export const getQuestionsList = [
	http.get('/questions', () => HttpResponse.json(mockGetQuestionsList)),
];
