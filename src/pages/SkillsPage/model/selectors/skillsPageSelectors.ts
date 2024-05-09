import { State } from '@/shared/config/store/State';

export const getSkillsPageNum = (state: State) => state.skillsPage.page || 1;
