import { http, HttpResponse } from 'msw';

import { Question } from '@/entities/question';
import { mockGetQuestionsList } from '@/entities/question/__mocks__/mockGetQuestionsList';

export const questionsDetailResponse = [
	http.get('/questions/:id', ({ params }) => {
		const id = params.id;
		return HttpResponse.json(mockGetQuestionsList[`${+id - 1}`] as Question);
	}),
];
