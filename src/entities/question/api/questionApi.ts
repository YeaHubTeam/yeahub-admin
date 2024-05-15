import { ApiTags } from '@/shared/config/api/apiTags';
import { baseApi } from '@/shared/config/api/baseApi';

import { ApiResponse, Question } from '../model/types/question';

const questionApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getQuestionsList: build.query<ApiResponse, void>({
			query: () => ({
				url: 'http://localhost:4002/questions',
			}),
			providesTags: [ApiTags.QUESTIONS],
		}),
		getQuestionById: build.query<Question, string>({
			query: (questionId) => ({
				url: `http://localhost:4002/questions/${questionId}`,
			}),
			providesTags: [ApiTags.QUESTION_DETAIL],
		}),
	}),
});

export const { useGetQuestionsListQuery, useGetQuestionByIdQuery } = questionApi;
