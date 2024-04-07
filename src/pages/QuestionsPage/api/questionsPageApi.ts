import { baseApi } from '@/shared/config/api/baseApi';

import { Question } from '@/entities/Question';

const questionsPageApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getQuestionsList: build.query<Question[], void>({
			query: () => ({
				url: '/questions',
			}),
		}),
	}),
});

export const useGetQuestionsListQuery = questionsPageApi.useGetQuestionsListQuery;
