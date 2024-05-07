import { ApiTags } from '@/shared/config/api/apiTags';
import { baseApi } from '@/shared/config/api/baseApi';

import { Specialization } from '../model/types/specialization';

const specializationApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSpecializationsList: build.query<Specialization[], void>({
			query: () => ({
				url: '/specializations',
			}),
			providesTags: [ApiTags.SPECIALIZATIONS],
		}),
		getSpecializationById: build.query<Specialization, string>({
			query: (specializationId) => ({
				url: `/specializations/${specializationId}`,
			}),
			providesTags: [ApiTags.SPECIALIZATION_DETAIL],
		}),
	}),
});

export const { useGetSpecializationByIdQuery, useGetSpecializationsListQuery } = specializationApi;
