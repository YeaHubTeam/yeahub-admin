import { State } from '@/shared/config/store/State';

export const getSpecializationsPageNum = (state: State) => state.specializationsPage.page || 1;
