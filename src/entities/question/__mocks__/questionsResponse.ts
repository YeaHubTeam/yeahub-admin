import { http, HttpResponse } from 'msw';

import { Question } from '@/entities/question';
import { mockGetQuestionsList } from '@/entities/question/__mocks__/mockGetQuestionsList';

export const questionsResponse = [
	http.get('/questions', () => HttpResponse.json(mockGetQuestionsList as Question[])),
];
