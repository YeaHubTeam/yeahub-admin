// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { baseApi } from '@/shared/config/api/baseApi';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { AuthState } from '@/entities/auth';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { QuestionsPageState } from '@/pages/QuestionsPage';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SkillsPageState } from '@/pages/SkillsPage';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SpecializationsPageState } from '@/pages/SpecializationsPage';

export interface State {
	questionsPage: QuestionsPageState;
	specializationsPage: SpecializationsPageState;
	skillsPage: SkillsPageState;
	auth: AuthState;

	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
