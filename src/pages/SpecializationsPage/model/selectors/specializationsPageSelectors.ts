import { State } from '@/shared/config/store/State';

export const getSpecializationsPageNum = (state: State) => state.questionsPage.page || 1;
