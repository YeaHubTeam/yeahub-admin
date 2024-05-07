import { baseApi } from '@/shared/config/api/baseApi';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { QuestionsPageState } from '@/pages/QuestionsPage';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SpecializationsPageState } from '@/pages/SpecializationsPage';

export interface State {
	questionsPage: QuestionsPageState;
	specializationsPage: SpecializationsPageState;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
