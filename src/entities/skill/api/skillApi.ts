import { ApiTags } from '@/shared/config/api/apiTags';
import { baseApi } from '@/shared/config/api/baseApi';
import { Response } from '@/shared/types/types';

import { Skill } from '../model/types/skill';

const skillApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSkillsList: build.query<Response<Skill[]>, void>({
			query: () => ({
				url: '/skills',
			}),
			providesTags: [ApiTags.SKILLS],
		}),
	}),
});

export const { useGetSkillsListQuery } = skillApi;
