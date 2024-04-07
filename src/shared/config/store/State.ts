import { baseApi } from '@/shared/config/api/baseApi';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { QuestionsPageState } from '@/pages/QuestionsPage';

export interface State {
	questionsPage: QuestionsPageState;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
