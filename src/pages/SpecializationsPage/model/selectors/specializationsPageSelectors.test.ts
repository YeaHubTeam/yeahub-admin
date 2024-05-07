import { State } from '@/shared/config/store/State';

import { getSpecializationsPageNum } from './specializationsPageSelectors';

describe('questionsPageSelectors', () => {
	test('getQuestionsPageNum', () => {
		const state: DeepPartial<State> = {
			questionsPage: { page: 2 },
		};
		expect(getSpecializationsPageNum(state as State)).toEqual(2);
	});
});
