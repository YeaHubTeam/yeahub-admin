import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/config/api/baseApi';
import { State } from '@/shared/config/store/State';

import { authReducer } from '@/entities/auth';

import { questionsPageReducer } from '@/pages/QuestionsPage';
import { skillsPageReducer } from '@/pages/SkillsPage';
import { specializationsPageReducer } from '@/pages/SpecializationsPage';

export const createReduxStore = (initialState?: State) => {
	const rootReducer: ReducersMapObject<State> = {
		questionsPage: questionsPageReducer,
		specializationsPage: specializationsPageReducer,
		skillsPage: skillsPageReducer,
		auth: authReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	};
	return configureStore<State>({
		reducer: rootReducer as unknown as typeof rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
	});
};
