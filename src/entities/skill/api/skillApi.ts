import { ApiTags } from '@/shared/config/api/apiTags';
import { baseApi } from '@/shared/config/api/baseApi';
import { Response } from '@/shared/types/types';

import { Skill } from '../model/types/skill';

const skillApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSkillsList: build.query<Response<Skill[]>, void>({
			query: () => ({
				url: 'http://localhost:4002/skills',
			}),
			providesTags: [ApiTags.SKILLS],
		}),
		getSkillById: build.query<Skill, string>({
			query: (skillId) => ({
				url: `http://localhost:4002/skills/${skillId}`,
			}),
			providesTags: [ApiTags.SKILL_DETAIL],
		}),
	}),
});

export const { useGetSkillsListQuery, useGetSkillByIdQuery } = skillApi;
