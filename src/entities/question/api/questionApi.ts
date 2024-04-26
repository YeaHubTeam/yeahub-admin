import { ApiTags } from '@/shared/config/api/apiTags';
import { baseApi } from '@/shared/config/api/baseApi';

import { Question } from '../model/types/question';

const questionApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getQuestionsList: build.query<Question[], void>({
			query: () => ({
				url: '/questions',
			}),
			providesTags: [ApiTags.QUESTIONS],
		}),
		getQuestionById: build.query<Question, string>({
			query: (questionId) => ({
				url: `/questions/${questionId}`,
			}),
			providesTags: [ApiTags.QUESTION_DETAIL],
		}),
	}),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } = questionApi;
