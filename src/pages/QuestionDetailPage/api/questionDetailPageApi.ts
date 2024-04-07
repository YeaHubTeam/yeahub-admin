import { baseApi } from '@/shared/config/api/baseApi';

import { Question } from '@/entities/Question';

const questionDetailPageApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getQuestionById: build.query<Question, string>({
			query: (questionId) => ({
				url: `/questions/${questionId}`,
			}),
		}),
	}),
});

export const useGetQuestionByIdQuery = questionDetailPageApi.useGetQuestionByIdQuery;
