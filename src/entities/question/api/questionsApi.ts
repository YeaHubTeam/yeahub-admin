import { baseApi } from '@/shared/config/api/baseApi';

import { Question } from '../model/types/question';

const questionsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getQuestionsList: build.query<Question[], void>({
			query: () => ({
				url: '/questions',
			}),
		}),
		getQuestionById: build.query<Question, string>({
			query: (questionId) => ({
				url: `/questions/${questionId}`,
			}),
		}),
	}),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } = questionsApi;
